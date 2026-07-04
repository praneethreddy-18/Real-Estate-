export interface Property {
  id: string;
  title: string;
  price: number;
  type: 'Villa' | 'Penthouse' | 'Apartment';
  location: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Aetheria Ocean Villa',
    price: 4850000,
    type: 'Villa',
    location: 'Malibu',
    address: '27400 Pacific Coast Hwy, Malibu, CA',
    beds: 5,
    baths: 6,
    sqft: 6200,
    image: 'villa.png'
  },
  {
    id: '2',
    title: 'Horizon Heights Penthouse',
    price: 3200000,
    type: 'Penthouse',
    location: 'Manhattan',
    address: '432 Park Ave, Penthouse B, New York, NY',
    beds: 3,
    baths: 4,
    sqft: 3400,
    image: 'penthouse.png'
  },
  {
    id: '3',
    title: 'Nordic Minimalist Apartment',
    price: 1150000,
    type: 'Apartment',
    location: 'Seattle',
    address: '1102 Eastlake Ave E, Seattle, WA',
    beds: 2,
    baths: 2,
    sqft: 1450,
    image: 'apartment.png'
  },
  {
    id: '4',
    title: 'Sunset Cove Residence',
    price: 5200000,
    type: 'Villa',
    location: 'Miami',
    address: '42 Pine Tree Dr, Miami Beach, FL',
    beds: 6,
    baths: 7,
    sqft: 7100,
    image: 'villa.png'
  },
  {
    id: '5',
    title: 'The Glass Skyline Penthouse',
    price: 2900000,
    type: 'Penthouse',
    location: 'Los Angeles',
    address: '8900 Sunset Blvd, Los Angeles, CA',
    beds: 3,
    baths: 3,
    sqft: 2800,
    image: 'penthouse.png'
  },
  {
    id: '6',
    title: 'Cascade Modern Apartment',
    price: 850000,
    type: 'Apartment',
    location: 'Portland',
    address: '1540 NW 11th Ave, Portland, OR',
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: 'apartment.png'
  }
];
