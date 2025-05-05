'use client'; // Required for useEffect and useState

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { List, MapPin, Phone, Clock } from 'lucide-react';
import type { Store, Location } from '@/services/store-locator'; // Ensure correct path
import { getNearbyStores } from '@/services/store-locator';
import { Skeleton } from '@/components/ui/skeleton';

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [stores, setStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<Location | null>(null);

  // Fetch stores on initial load (or based on user location if available)
  useEffect(() => {
    const fetchStores = async (location: Location | null = null) => {
      setLoading(true);
      setError(null);
      try {
        // Use a default location if user location isn't available yet
        const queryLocation = location || { lat: 18.5204, lng: 73.8567 }; // Default to Pune
        const fetchedStores = await getNearbyStores(queryLocation);
        setStores(fetchedStores);
      } catch (err) {
        console.error('Error fetching stores:', err);
        setError('Failed to load store locations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

     // Try to get user's current location
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(
         (position) => {
           const loc = {
             lat: position.coords.latitude,
             lng: position.coords.longitude,
           };
           setUserLocation(loc);
           fetchStores(loc); // Fetch stores based on user location
         },
         (geoError) => {
           console.warn('Geolocation error:', geoError.message, '- Using default location.');
           fetchStores(); // Fetch with default location if geolocation fails or is denied
         }
       );
     } else {
       console.warn('Geolocation not supported by this browser. Using default location.');
       fetchStores(); // Fetch with default location if geolocation is not supported
     }

  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual search logic based on searchQuery
    // This might involve geocoding the searchQuery or filtering existing stores
    console.log('Searching for:', searchQuery);
    // For now, just filter the mock data by name (replace with actual API call/logic)
     setLoading(true);
     const filteredStores = stores.filter(store =>
       store.name.toLowerCase().includes(searchQuery.toLowerCase())
     );
      setTimeout(() => { // Simulate network delay
        setStores(filteredStores.length > 0 ? filteredStores : stores); // Show all if filter yields no results for demo
        setLoading(false);
        if(filteredStores.length === 0 && searchQuery !== '') {
            setError(`No stores found matching "${searchQuery}". Showing all nearby stores.`);
        } else {
             setError(null);
        }
      }, 500);
  };

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Find Ganesh Bhel Near You</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Use the map or search below to find your closest outlet and enjoy our authentic flavors.
        </p>
      </section>

      {/* Search Bar */}
      <section>
        <form onSubmit={handleSearch} className="flex gap-2 max-w-xl mx-auto">
          <Input
            type="text"
            placeholder="Enter ZIP code or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Search</Button>
        </form>
      </section>

      {/* Map and List Container */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Map Placeholder */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-heading text-primary"><MapPin /> Map View</CardTitle>
          </CardHeader>
          <CardContent>
             {/* Replace with actual map component (e.g., @vis.gl/react-google-maps) */}
            <div className="w-full h-[400px] bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              <p>Interactive Map Coming Soon!</p>
              {/* TODO: Integrate map component here */}
              {/* Example: <GoogleMapComponent stores={stores} userLocation={userLocation} /> */}
               {userLocation && (
                 <p className="text-xs mt-2">Centering near: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}</p>
               )}
            </div>
          </CardContent>
        </Card>

        {/* Store List */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-heading text-primary"><List /> Nearby Stores</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[400px] overflow-y-auto">
             {error && <p className="text-destructive text-center">{error}</p>}
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="space-y-2 p-3 border rounded-md">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
            ) : stores.length > 0 ? (
              stores.map((store) => (
                <div key={store.name} className="p-4 border rounded-lg bg-background hover:bg-muted/50 transition-colors">
                  <h3 className="text-lg font-semibold text-foreground">{store.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-foreground/80 mt-1">
                    <MapPin size={16} />
                    <span>Lat: {store.location.lat.toFixed(4)}, Lng: {store.location.lng.toFixed(4)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80 mt-1">
                    <Phone size={16} />
                    <span>{store.contact}</span>
                  </div>
                   <div className="flex items-center gap-2 text-sm text-foreground/80 mt-1">
                    <Clock size={16} />
                    <span>{store.openingHours}</span>
                  </div>
                </div>
              ))
            ) : (
              !error && <p className="text-center text-muted-foreground">No stores found nearby.</p>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

// Note: You'll need to install @vis.gl/react-google-maps and configure Google Maps API
// npm install @vis.gl/react-google-maps
// And create a GoogleMapComponent to render the map with markers.
