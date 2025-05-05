'use client'; // Required for useEffect and useState

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { List, MapPin, Phone, Clock, Search } from 'lucide-react'; // Added Search Icon
import type { Store, Location } from '@/services/store-locator'; // Ensure correct path
import { getNearbyStores } from '@/services/store-locator';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image'; // For map placeholder

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [stores, setStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]); // State for filtered results
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [mapCenter, setMapCenter] = useState<Location>({ lat: 18.5204, lng: 73.8567 }); // Default Pune center

  // Fetch stores on initial load
  useEffect(() => {
    const fetchInitialStores = async (location: Location | null = null) => {
      setLoading(true);
      setError(null);
      try {
        const queryLocation = location || mapCenter; // Use default center if no user loc
        const fetchedStores = await getNearbyStores(queryLocation);
        setStores(fetchedStores);
        setFilteredStores(fetchedStores); // Initially show all fetched stores
        if (location) {
            setMapCenter(location); // Center map on user location if available
        }
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
           fetchInitialStores(loc); // Fetch stores based on user location
         },
         (geoError) => {
           console.warn('Geolocation error:', geoError.message, '- Using default location.');
           fetchInitialStores(); // Fetch with default location
         }
       );
     } else {
       console.warn('Geolocation not supported. Using default location.');
       fetchInitialStores(); // Fetch with default location
     }

  }, []); // Empty dependency array: runs once on mount

   // Handle search filtering (client-side for this example)
   useEffect(() => {
     setLoading(true);
     setError(null);
     const lowerCaseQuery = searchQuery.toLowerCase();
     const results = stores.filter(store =>
       store.name.toLowerCase().includes(lowerCaseQuery) ||
       store.address?.toLowerCase().includes(lowerCaseQuery) // Also search address if available
     );
     setFilteredStores(results);

     if (results.length === 0 && searchQuery !== '') {
       setError(`No stores found matching "${searchQuery}".`);
     }
     // Simulate slight delay for user feedback
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);

   }, [searchQuery, stores]);


  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search logic is handled by the useEffect above
    // You could add geocoding here if needed for map centering
    console.log('Triggering search based on:', searchQuery);
  };

  return (
    <div className="space-y-16 md:space-y-20"> {/* Increased spacing */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Find Ganesh Bhel Near You</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Use the map or search below to find your closest outlet and enjoy our authentic flavors.
        </p>
      </section>

      {/* Search Bar */}
      <section>
        <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-lg mx-auto relative"> {/* Centered search */}
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          <Input
            type="text"
            placeholder="Search by name or area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow pl-10 text-base rounded-full shadow-sm" // Added padding, rounded
          />
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6">Search</Button>
        </form>
      </section>

      {/* Map and List Container */}
      <section className="grid md:grid-cols-5 gap-8"> {/* Changed grid to 5 cols */}
        {/* Map Placeholder */}
        <Card className="shadow-lg md:col-span-3 overflow-hidden"> {/* Map takes 3 cols */}
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-2xl font-heading text-primary"><MapPin /> Map View</CardTitle>
          </CardHeader>
          <CardContent className="p-0"> {/* Remove padding for full map */}
            <div className="w-full h-[450px] md:h-[550px] bg-muted rounded-b-md flex items-center justify-center text-muted-foreground relative"> {/* Increased height */}
                {/* Placeholder map image */}
               <Image
                   src={`https://picsum.photos/seed/pune-map-stores-${mapCenter.lat}/1000/600`} // Dynamic seed based on center
                   alt="Map showing store locations placeholder"
                   layout="fill"
                   objectFit="cover"
                   className="opacity-60 dark:opacity-40"
                   data-ai-hint="city map pune india stores marked"
               />
               <p className="absolute text-lg font-semibold text-foreground/80 bg-background/80 px-4 py-2 rounded shadow">Interactive Map Coming Soon!</p>
              {/* TODO: Integrate actual map component */}
              {/* Example: <GoogleMapComponent stores={filteredStores} center={mapCenter} /> */}
               {userLocation && (
                 <p className="absolute bottom-2 left-2 text-xs bg-background/70 px-2 py-1 rounded">Map centered near your location</p>
               )}
            </div>
          </CardContent>
        </Card>

        {/* Store List */}
        <Card className="shadow-lg md:col-span-2"> {/* List takes 2 cols */}
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-2xl font-heading text-primary"><List /> Store List</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 max-h-[550px] overflow-y-auto pr-2"> {/* Synced max height, added padding-right for scrollbar */}
             {error && !loading && <p className="text-destructive text-center py-4">{error}</p>}
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => ( // Increased skeleton items
                <div key={index} className="space-y-3 p-4 border rounded-lg bg-background">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
            ) : filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <div key={store.name} className="p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-pointer card-hover-effect" onClick={() => setMapCenter(store.location)}> {/* Added hover, cursor, effect, onClick to center map */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">{store.name}</h3>
                   {store.address && (
                    <div className="flex items-start gap-2 text-sm text-foreground/80 mt-1">
                        <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{store.address}</span>
                    </div>
                    )}
                  <div className="flex items-center gap-2 text-sm text-foreground/80 mt-1">
                    <Phone size={16} />
                    <a href={`tel:${store.contact}`} className="hover:text-primary">{store.contact}</a>
                  </div>
                   <div className="flex items-center gap-2 text-sm text-foreground/80 mt-1">
                    <Clock size={16} />
                    <span>{store.openingHours}</span>
                  </div>
                   {/* Display distance if user location is available - Calculation needed */}
                   {/* {userLocation && store.distance && (
                       <p className="text-xs text-accent font-medium mt-2">{store.distance.toFixed(1)} km away</p>
                   )} */}
                </div>
              ))
            ) : (
              !error && <p className="text-center text-muted-foreground py-4">No stores found matching your criteria.</p>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
