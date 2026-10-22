export interface Car {
  id: string;
  name: string;
  brand: string;
  priceRange: string;
  image: string;
  badge?: {
    text: string;
    type: 'launch' | 'expected' | 'variant' | 'electric' | 'facelift';
  };
  category: 'SUV' | 'Hatchback' | 'Sedan' | 'MUV' | 'Luxury' | 'Electric';
  fuelTypes?: string[];
  mileage?: string;
  rating?: number;
  offers?: string;
  isUpcoming?: boolean;
  expectedDate?: string;
  isPopular?: boolean;
}

export interface UsedCar {
  id: string;
  name: string;
  brand: string;
  year: number;
  priceLakh: number;
  priceFormatted: string;
  kmDriven: number;
  kmFormatted: string;
  fuel: 'Petrol' | 'Diesel' | 'CNG' | 'Electric';
  transmission: 'Manual' | 'Automatic';
  location: string;
  owner: '1st Owner' | '2nd Owner' | '3rd Owner';
  isDirectOwner?: boolean;
  isFeatured?: boolean;
  isLuxury?: boolean;
  images: string[];
  aiExpert: {
    status: 'GREAT PRICE' | 'ABOVE MARKET' | 'FAIR PRICE';
    points: string[];
  };
  seller: {
    name: string;
    phone: string;
    rating: number;
    verified: boolean;
  };
}

export interface Brand {
  name: string;
  logo: string;
  carCount: number;
}

export interface VisualStory {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

export interface Comparison {
  id: string;
  car1: {
    name: string;
    brand: string;
    price: string;
    image: string;
  };
  car2: {
    name: string;
    brand: string;
    price: string;
    image: string;
  };
  buttonText: string;
}

export interface City {
  name: string;
  state: string;
  carsAvailable: number;
  iconType: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  image: string;
  tag: string;
  date: string;
  readTime: string;
}
