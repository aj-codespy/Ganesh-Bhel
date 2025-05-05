'use client'; // Required for useEffect and useState

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { List, MapPin, Phone, Clock, Search } from 'lucide-react';
import type { Store, Location } from '@/services/store-locator';
import { getNearbyStores } from '@/services/store-locator';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [stores, setStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [mapCenter, setMapCenter] = useState<Location>({ lat: 18.5204, lng: 73.8567 }); // Default Pune center

  useEffect(() => {
    const fetchInitialStores = async (location: Location | null = null) => {
      setLoading(true);
      setError(null);
      try {
        const queryLocation = location || mapCenter;
        const fetchedStores = await getNearbyStores(queryLocation);
        setStores(fetchedStores);
        setFilteredStores(fetchedStores);
        if (location) {
            setMapCenter(location);
        }
      } catch (err) {
        console.error('Error fetching stores:', err);
        setError('Failed to load store locations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

     if (typeof window !== 'undefined' && navigator.geolocation) { // Check if window exists
       navigator.geolocation.getCurrentPosition(
         (position) => {
           const loc = {
             lat: position.coords.latitude,
             lng: position.coords.longitude,
           };
           setUserLocation(loc);
           fetchInitialStores(loc);
         },
         (geoError) => {
           console.warn('Geolocation error:', geoError.message, '- Using default location.');
           fetchInitialStores();
         },
         { timeout: 10000 } // Add timeout for geolocation
       );
     } else {
       console.warn('Geolocation not supported or not available. Using default location.');
       fetchInitialStores();
     }

  }, []);

   useEffect(() => {
     setLoading(true);
     setError(null);
     const lowerCaseQuery = searchQuery.toLowerCase();
     const results = stores.filter(store =>
       store.name.toLowerCase().includes(lowerCaseQuery) ||
       store.address?.toLowerCase().includes(lowerCaseQuery)
     );
     setFilteredStores(results);

     if (results.length === 0 && searchQuery !== '') {
       setError(`No stores found matching "${searchQuery}".`);
     }
      const timer = setTimeout(() => setLoading(false), 300);
      return () => clearTimeout(timer);

   }, [searchQuery, stores]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Optionally, geocode the searchQuery to center the map
    // For now, filtering is handled by useEffect
  };

  return (
    <div className="space-y-12 md:space-y-20"> {/* Adjusted base spacing */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading text-secondary">Find Ganesh Bhel Near You</h1> {/* Responsive heading */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto px-2 sm:px-0"> {/* Responsive text, padding */}
          Use the map or search below to find your closest outlet and enjoy our authentic flavors.
        </p>
      </section>

      {/* Search Bar */}
      <section>
        <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-xl mx-auto relative px-2 sm:px-0"> {/* Responsive padding */}
           <Search className="absolute left-4 sm:left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground pointer-events-none" /> {/* Responsive icon size */}
          <Input
            type="text"
            placeholder="Search by name or area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow pl-9 sm:pl-10 text-sm sm:text-base rounded-full shadow-sm" // Responsive padding/text
          />
          <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-4 sm:px-6 text-sm sm:text-base">Search</Button> {/* Responsive padding/text */}
        </form>
         {userLocation && (
           <p className="text-xs text-muted-foreground text-center mt-2">Showing stores near your current location.</p>
         )}
      </section>

      {/* Map and List Container */}
      <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8"> {/* Default 1 col, adjust gap */}
        {/* Map Placeholder */}
        <Card className="shadow-lg lg:col-span-3 overflow-hidden order-1 lg:order-none"> {/* Map takes 3 cols on lg, first on mobile */}
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl font-heading text-primary"><MapPin size={20} /> Map View</CardTitle> {/* Responsive title/icon */}
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] bg-muted rounded-b-md flex items-center justify-center text-muted-foreground relative"> {/* Responsive height */}
               <Image
                   src={`https://picsum.photos/seed/pune-map-stores-${mapCenter.lat}/1000/600`}
                   alt="Map showing store locations placeholder"
                   layout="fill"
                   objectFit="cover"
                   className="opacity-60 dark:opacity-40"
                   data-ai-hint="city map pune india stores marked"
                   priority
               />
               <p className="absolute text-base sm:text-lg font-semibold text-foreground/80 bg-background/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded shadow">Interactive Map Coming Soon!</p> {/* Responsive text/padding */}
               {/* TODO: Integrate actual map component */}
            </div>
          </CardContent>
        </Card>

        {/* Store List */}
        <Card className="shadow-lg lg:col-span-2 order-2 lg:order-none"> {/* List takes 2 cols on lg, second on mobile */}
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl font-heading text-primary"><List size={20} /> Store List</CardTitle> {/* Responsive title/icon */}
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 h-[400px] lg:max-h-[550px] overflow-y-auto pr-1 sm:pr-2"> {/* Adjusted height for mobile, Responsive spacing/padding */}
             {error && !loading && <p className="text-destructive text-center py-4 text-sm">{error}</p>} {/* Responsive text */}
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => ( // Fewer skeletons on mobile initially
                <div key={index} className="space-y-2 sm:space-y-3 p-3 sm:p-4 border rounded-lg bg-background"> {/* Responsive spacing/padding */}
                  <Skeleton className="h-4 sm:h-5 w-3/4" />
                  <Skeleton className="h-3 sm:h-4 w-full" />
                  <Skeleton className="h-3 sm:h-4 w-5/6" />
                  <Skeleton className="h-3 sm:h-4 w-1/2" />
                </div>
              ))
            ) : filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <div key={store.name} className="p-3 sm:p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors cursor-pointer card-hover-effect" onClick={() => setMapCenter(store.location)}>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{store.name}</h3> {/* Responsive text */}
                   {store.address && (
                    <div className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/80 mt-1"> {/* Responsive gap/text */}
                        <MapPin size={14} className="mt-0.5 flex-shrink-0" /> {/* Responsive size */}
                        <span>{store.address}</span>
                    </div>
                    )}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/80 mt-1">
                    <Phone size={14} />
                    <a href={`tel:${store.contact}`} className="hover:text-primary">{store.contact}</a>
                  </div>
                   <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/80 mt-1">
                    <Clock size={14} />
                    <span>{store.openingHours}</span>
                  </div>
                   {userLocation && store.distance !== undefined && ( // Check for undefined
                       <p className="text-xs text-accent font-medium mt-2">{store.distance.toFixed(1)} km away</p>
                   )}
                </div>
              ))
            ) : (
              !error && <p className="text-center text-muted-foreground py-4 text-sm">No stores found matching your criteria.</p>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
