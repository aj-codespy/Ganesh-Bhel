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
}

/**
 * Asynchronously retrieves store information for a given location.
 *
 * @param location The location for which to retrieve store data.
 * @returns A promise that resolves to a list of stores.
 */
export async function getNearbyStores(location: Location): Promise<Store[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      name: 'Ganesh Bhel - FC Road',
      location: {
        lat: 18.5196,
        lng: 73.8567,
      },
      contact: '020-24457788',
      openingHours: '9:00 AM - 10:00 PM',
    },
    {
      name: 'Ganesh Bhel - Kothrud',
      location: {
        lat: 18.5075,
        lng: 73.8095,
      },
      contact: '020-25386677',
      openingHours: '10:00 AM - 11:00 PM',
    },
  ];
}
