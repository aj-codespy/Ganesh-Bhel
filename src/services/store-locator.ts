/**
 * Represents a geographical location with latitude and longitude coordinates.
 */
export interface Location {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Represents store information, including name, location and contact.
 */
export interface Store {
  /**
   * The name of the store.
   */
  name: string;
   /**
   * The full address of the store.
   */
   address?: string; // Make address optional initially
  /**
   * The location of the store
   */
  location: Location;
  /**
   * The contact number of the store
   */
  contact: string;
  /**
   * Opening hours of the store
   */
  openingHours: string;
   /**
   * Optional distance from user's location
   */
   distance?: number;
}

/**
 * Asynchronously retrieves store information for a given location.
 *
 * @param location The location for which to retrieve store data.
 * @returns A promise that resolves to a list of stores.
 */
export async function getNearbyStores(location: Location): Promise<Store[]> {
  // TODO: Implement this by calling an API.
  // TODO: Calculate distance based on the input `location` and store locations.

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));


  // Mock data with addresses
  const mockStores: Store[] = [
    {
      name: 'Ganesh Bhel - FC Road',
      address: '123 Fergusson College Rd, Shivajinagar, Pune, Maharashtra 411004',
      location: {
        lat: 18.5196,
        lng: 73.8567,
      },
      contact: '020-24457788',
      openingHours: '9:00 AM - 10:00 PM',
    },
    {
      name: 'Ganesh Bhel - Kothrud',
      address: '456 Karve Rd, Kothrud, Pune, Maharashtra 411038',
      location: {
        lat: 18.5075,
        lng: 73.8095,
      },
      contact: '020-25386677',
      openingHours: '10:00 AM - 11:00 PM',
    },
     {
      name: 'Ganesh Bhel - Viman Nagar',
      address: 'Shop No. 7, Town Square, Viman Nagar, Pune, Maharashtra 411014',
      location: {
        lat: 18.5679,
        lng: 73.9143,
      },
      contact: '020-66829900',
      openingHours: '11:00 AM - 11:00 PM',
    },
     {
      name: 'Ganesh Bhel - Aundh',
      address: 'Opp. Reliance Mart, Aundh-Wakad Road, Aundh, Pune, Maharashtra 411007',
      location: {
        lat: 18.5590,
        lng: 73.8070,
      },
      contact: '+91 9876543210',
      openingHours: '10:30 AM - 10:30 PM',
    },
  ];

  // Simple distance calculation (Haversine formula is more accurate for real-world use)
  // This is a basic approximation and doesn't account for Earth's curvature
   mockStores.forEach(store => {
       const dx = store.location.lng - location.lng;
       const dy = store.location.lat - location.lat;
       // Rough estimate - replace with proper calculation if needed
       store.distance = Math.sqrt(dx * dx + dy * dy) * 111; // Approx km per degree
   });

   // Sort by distance
   mockStores.sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));


  return mockStores;
}
