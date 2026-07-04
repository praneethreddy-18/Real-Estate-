export interface Property {
  id: string;
  title: string;
  price: number; // numeric value for filtering (in INR)
  formattedPrice: string; // display string e.g. "₹ 4.85 Cr"
  type: 'Villa' | 'Penthouse' | 'Apartment';
  location: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Jubilee Hills Luxury Villa',
    price: 68500000,
    formattedPrice: '₹ 6.85 Cr',
    type: 'Villa',
    location: 'Jubilee Hills',
    address: 'Road No. 36, Jubilee Hills, Hyderabad',
    beds: 5,
    baths: 6,
    sqft: 6500,
    image: 'villa.png',
    description: 'An ultra-luxurious private villa in prime Jubilee Hills. Features custom teakwood flooring, private infinity pool, Italian marble finishes, automated smart home lighting, landscaped garden, and a 4-car private garage.',
    amenities: ['Private Pool', 'Smart Automation', 'Italian Marble', 'Landscaped Garden', '4-Car Garage', '24/7 Security']
  },
  {
    id: '2',
    title: 'Banjara Hills Sky Penthouse',
    price: 45000000,
    formattedPrice: '₹ 4.50 Cr',
    type: 'Penthouse',
    location: 'Banjara Hills',
    address: 'Road No. 12, Banjara Hills, Hyderabad',
    beds: 4,
    baths: 4,
    sqft: 4200,
    image: 'penthouse.png',
    description: 'Panoramic city skyline views from this penthouse on Road No. 12. Complete with high ceilings, private terrace jacuzzi, imported sanitary fittings, modular chef kitchen, and dedicated servant quarters.',
    amenities: ['Terrace Jacuzzi', 'Skyline View', 'Modular Kitchen', 'Private Elevator', 'Power Backup', 'Clubhouse Access']
  },
  {
    id: '3',
    title: 'Gachibowli Financial Suite',
    price: 18500000,
    formattedPrice: '₹ 1.85 Cr',
    type: 'Apartment',
    location: 'Gachibowli',
    address: 'Financial District, Gachibowli, Hyderabad',
    beds: 3,
    baths: 3,
    sqft: 2100,
    image: 'apartment.png',
    description: 'Premium modern apartment located right in the Financial District corridor. Minutes away from IT hubs, featuring wooden deck balcony, clubhouse amenities, badminton court, and EV charging ports.',
    amenities: ['EV Charger', 'Badminton Court', 'Swimming Pool', 'Gymnasium', 'Visitor Parking', 'Intercom']
  },
  {
    id: '4',
    title: 'Kokapet Golden Mile Villa',
    price: 52000000,
    formattedPrice: '₹ 5.20 Cr',
    type: 'Villa',
    location: 'Kokapet',
    address: 'Golden Mile Layout, Kokapet, Hyderabad',
    beds: 5,
    baths: 5,
    sqft: 5800,
    image: 'villa.png',
    description: 'Exclusive gated villa community in Kokapet Golden Mile with Neoclassical architecture, double-height living room, private home theater room, rooftop solar installation, and lush lawn garden.',
    amenities: ['Home Theater', 'Solar Power', 'Gated Community', 'Tennis Court', 'Children Play Area', 'Party Lawn']
  },
  {
    id: '5',
    title: 'HITEC City Cyber Horizon',
    price: 14500000,
    formattedPrice: '₹ 1.45 Cr',
    type: 'Penthouse',
    location: 'HITEC City',
    address: 'Near Mindspace IT Park, HITEC City, Hyderabad',
    beds: 3,
    baths: 3,
    sqft: 1850,
    image: 'penthouse.png',
    description: 'High-rise residence overlooking Mindspace tech park. Perfect for tech executives featuring floor-to-ceiling glass windows, soundproof double glazing, high-speed fiber internet infrastructure, and infinity sky deck.',
    amenities: ['Sky Deck', 'Soundproof Glass', 'High-Speed Internet', 'Concierge Desk', 'Co-working Lounge', 'Sauna']
  },
  {
    id: '6',
    title: 'Kondapur Botanical Residence',
    price: 12500000,
    formattedPrice: '₹ 1.25 Cr',
    type: 'Apartment',
    location: 'Kondapur',
    address: 'Botanical Garden Road, Kondapur, Hyderabad',
    beds: 2,
    baths: 2,
    sqft: 1500,
    image: 'apartment.png',
    description: 'Eco-conscious 2-BHK apartment right adjacent to Hyderabad Botanical Gardens. Ample natural light, rainwater harvesting system, jogging track, and 24/7 CCTV surveillance.',
    amenities: ['Park View', 'Rainwater Harvesting', 'Jogging Track', 'CCTV Security', 'Solar Water Heater', 'Supermarket']
  }
];
