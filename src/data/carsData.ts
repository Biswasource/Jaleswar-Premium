import { Car, UsedCar, Brand, VisualStory, Comparison, City, NewsArticle } from '../types';

export const MOST_SEARCHED_CARS: Car[] = [
  {
    id: 'tata-sierra',
    name: 'Tata Sierra',
    brand: 'Tata',
    priceRange: '₹11.49 - 21.59 Lakh*',
    image: 'https://images10.gaadi.com/usedgaadi-sellcar/UsedCar/i6b75012a/e0e29db4-6d64-4b80-a0f5-791d01802783.jpg?imwidth=640',
    category: 'SUV',
    fuelTypes: ['Petrol', 'Diesel', 'Electric'],
    mileage: '18.5 kmpl',
    rating: 4.6,
    offers: 'Up to ₹45,000 Festive Benefits'
  },
  {
    id: 'mahindra-xuv-3xo',
    name: 'Mahindra XUV 3XO',
    brand: 'Mahindra',
    priceRange: '₹7.79 - 15.04 Lakh*',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    category: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    mileage: '20.1 kmpl',
    rating: 4.7,
    offers: 'Exchange Bonus up to ₹30,000'
  },
  {
    id: 'mahindra-thar-og',
    name: 'Mahindra Thar OG',
    brand: 'Mahindra',
    priceRange: '₹10.32 - 18.99 Lakh*',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'LAUNCHED ON : SEP 22, 2026',
      type: 'launch'
    },
    category: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    mileage: '15.2 kmpl',
    rating: 4.8,
    offers: 'Free Accessories Pack Worth ₹25,000'
  },
  {
    id: 'renault-duster',
    name: 'Renault Duster',
    brand: 'Renault',
    priceRange: '₹10.49 - 19.49 Lakh*',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    category: 'SUV',
    fuelTypes: ['Petrol', 'Hybrid'],
    mileage: '24.8 kmpl',
    rating: 4.5,
    offers: 'Special Low Interest Rate @ 6.99%'
  },
  {
    id: 'maruti-brezza',
    name: 'Maruti Brezza',
    brand: 'Maruti Suzuki',
    priceRange: '₹8.34 - 14.14 Lakh*',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    category: 'SUV',
    fuelTypes: ['Petrol', 'CNG'],
    mileage: '25.5 km/kg',
    rating: 4.4,
    offers: 'Corporate Discount ₹15,000'
  }
];

export const FESTIVE_OFFERS_CARS: Car[] = [
  {
    id: 'mahindra-scorpio',
    name: 'Mahindra Scorpio',
    brand: 'Mahindra',
    priceRange: '₹13.43 - 17.48 Lakh*',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
    category: 'SUV',
    fuelTypes: ['Diesel'],
    mileage: '16.4 kmpl',
    rating: 4.7,
    offers: 'Festive Cash Savings up to ₹65,000'
  },
  {
    id: 'hyundai-creta',
    name: 'Hyundai Creta',
    brand: 'Hyundai',
    priceRange: '₹10.91 - 20.46 Lakh*',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    category: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    mileage: '19.2 kmpl',
    rating: 4.8,
    offers: 'Discounts Up to ₹1 Lakh*'
  },
  {
    id: 'kia-seltos',
    name: 'Kia Seltos',
    brand: 'Kia',
    priceRange: '₹11.25 - 21.82 Lakh*',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    category: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    mileage: '20.7 kmpl',
    rating: 4.7,
    offers: 'Extended 5-Year Warranty Free'
  },
  {
    id: 'hyundai-venue',
    name: 'Hyundai Venue',
    brand: 'Hyundai',
    priceRange: '₹8 - 15.83 Lakh*',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    category: 'SUV',
    fuelTypes: ['Petrol', 'Diesel'],
    mileage: '21.5 kmpl',
    rating: 4.6,
    offers: 'Festive Gold Coin on Every Booking'
  }
];

export const ELECTRIC_CARS: Car[] = [
  {
    id: 'tesla-roadster',
    name: 'Tesla Roadster',
    brand: 'Tesla',
    priceRange: '₹50.06 Lakh - 2.50 Cr*',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'LAUNCHED ON : OCT 16, 2026',
      type: 'launch'
    },
    category: 'Electric',
    fuelTypes: ['Electric'],
    mileage: '1000 km/charge',
    rating: 4.9,
    offers: 'Priority Global Reservation Active'
  },
  {
    id: 'maruti-e-vitara',
    name: 'Maruti Suzuki e Vitara',
    brand: 'Maruti Suzuki',
    priceRange: '₹16.19 - 20.21 Lakh*',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    category: 'Electric',
    fuelTypes: ['Electric'],
    mileage: '500 km/charge',
    rating: 4.6,
    offers: 'Free 7.4 kW Home Charger Included'
  },
  {
    id: 'tata-punch-ev',
    name: 'Tata Punch EV',
    brand: 'Tata',
    priceRange: '₹9.79 - 12.99 Lakh*',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80',
    category: 'Electric',
    fuelTypes: ['Electric'],
    mileage: '421 km/charge',
    rating: 4.7,
    offers: 'Zero Down Payment Festive Scheme'
  },
  {
    id: 'mahindra-xev-9e',
    name: 'Mahindra XEV 9e',
    brand: 'Mahindra',
    priceRange: '₹21.90 - 31.25 Lakh*',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    category: 'Electric',
    fuelTypes: ['Electric'],
    mileage: '656 km/charge',
    rating: 4.8,
    offers: 'Free Fast Charging for 1 Year'
  }
];

export const UPCOMING_CARS: Car[] = [
  {
    id: 'hyundai-bayon',
    name: 'Hyundai Bayon',
    brand: 'Hyundai',
    priceRange: '₹10 - 17.50 Lakh',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'EXPECTED LAUNCH: OCT 26, 2026',
      type: 'expected'
    },
    category: 'SUV',
    isUpcoming: true,
    expectedDate: 'Oct 26, 2026'
  },
  {
    id: 'mg-hector',
    name: 'MG Hector',
    brand: 'MG',
    priceRange: '₹12.14 - 20 Lakh',
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'EXPECTED LAUNCH: OCT 27, 2026',
      type: 'expected'
    },
    category: 'SUV',
    isUpcoming: true,
    expectedDate: 'Oct 27, 2026'
  },
  {
    id: 'mercedes-glc-electric',
    name: 'Mercedes-Benz GLC Electric',
    brand: 'Mercedes-Benz',
    priceRange: '₹80 Lakh',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'EXPECTED LAUNCH: NOV 4, 2026',
      type: 'expected'
    },
    category: 'Electric',
    isUpcoming: true,
    expectedDate: 'Nov 4, 2026'
  },
  {
    id: 'mahindra-thar-e',
    name: 'Mahindra Thar E',
    brand: 'Mahindra',
    priceRange: '₹25 Lakh',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'EXPECTED LAUNCH: NOV 15, 2026',
      type: 'expected'
    },
    category: 'Electric',
    isUpcoming: true,
    expectedDate: 'Nov 15, 2026'
  }
];

export const LATEST_CARS: Car[] = [
  {
    id: 'renault-duster-2026',
    name: 'New Renault Duster',
    brand: 'Renault',
    priceRange: '₹10.99 - 18.50 Lakh*',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'LAUNCHED ON : OCT 17, 2026',
      type: 'variant'
    },
    category: 'SUV'
  },
  {
    id: 'hyundai-creta-n-line',
    name: 'Hyundai Creta N Line',
    brand: 'Hyundai',
    priceRange: '₹16.82 - 20.45 Lakh*',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'LAUNCHED ON : OCT 16, 2026',
      type: 'facelift'
    },
    category: 'SUV'
  },
  {
    id: 'audi-q6-e-tron',
    name: 'Audi Q6 e-tron',
    brand: 'Audi',
    priceRange: '₹85.00 - 95.00 Lakh*',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'LAUNCHED ON : OCT 16, 2026',
      type: 'electric'
    },
    category: 'Luxury'
  },
  {
    id: 'tata-curvv',
    name: 'Tata Curvv EV',
    brand: 'Tata',
    priceRange: '₹17.49 - 21.99 Lakh*',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    badge: {
      text: 'LAUNCHED ON : OCT 15, 2026',
      type: 'variant'
    },
    category: 'Electric'
  }
];

export const POPULAR_BRANDS: Brand[] = [
  {
    name: 'Maruti Suzuki',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Suzuki_logo_2.svg/320px-Suzuki_logo_2.svg.png',
    carCount: 18
  },
  {
    name: 'Tata',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/320px-Tata_logo.svg.png',
    carCount: 14
  },
  {
    name: 'Kia',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/320px-Kia_logo.svg.png',
    carCount: 9
  },
  {
    name: 'Toyota',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/320px-Toyota.svg.png',
    carCount: 12
  },
  {
    name: 'Hyundai',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/320px-Hyundai_Motor_Company_logo.svg.png',
    carCount: 15
  },
  {
    name: 'Mahindra',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mahindra_Rise_2021.svg/320px-Mahindra_Rise_2021.svg.png',
    carCount: 11
  },
  {
    name: 'Honda',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Honda_logo.svg/320px-Honda_logo.svg.png',
    carCount: 6
  },
  {
    name: 'BMW',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/320px-BMW.svg.png',
    carCount: 22
  }
];

export const VISUAL_STORIES: VisualStory[] = [
  {
    id: 'story-1',
    title: '2026 Mahindra Bolero Bold Edition Launched With...',
    thumbnail: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    duration: '0:45',
    views: '124K'
  },
  {
    id: 'story-2',
    title: 'Hyundai Bayon Colour Options & First Look',
    thumbnail: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=600&q=80',
    duration: '0:58',
    views: '89K'
  },
  {
    id: 'story-3',
    title: '2026 Kia Seltos GTX Optional Variant Explained! New...',
    thumbnail: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
    duration: '1:12',
    views: '210K'
  },
  {
    id: 'story-4',
    title: '2026 Toyota Glanza Facelift Colours Explained! Adds Tw...',
    thumbnail: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
    duration: '0:50',
    views: '67K'
  },
  {
    id: 'story-5',
    title: 'Top End ZX Plus Black Edition Explored In Detail',
    thumbnail: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
    duration: '1:05',
    views: '155K'
  }
];

export const COMPARISONS: Comparison[] = [
  {
    id: 'thar-roxx-vs-og',
    car1: {
      name: 'Thar ROXX',
      brand: 'Mahindra',
      price: '₹12.52 - 23.52 Lakh*',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80'
    },
    car2: {
      name: 'Thar',
      brand: 'Mahindra',
      price: '₹10.32 - 18.99 Lakh*',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80'
    },
    buttonText: 'Thar ROXX vs Thar OG'
  },
  {
    id: 'baleno-vs-fronx',
    car1: {
      name: 'Baleno',
      brand: 'Maruti Suzuki',
      price: '₹5.99 - 9.99 Lakh*',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80'
    },
    car2: {
      name: 'FRONX',
      brand: 'Maruti Suzuki',
      price: '₹6.90 - 12.03 Lakh*',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80'
    },
    buttonText: 'Baleno vs FRONX'
  },
  {
    id: 'aeris-vs-dzire',
    car1: {
      name: 'Aeris',
      brand: 'Tata',
      price: '₹5.30 - 9.75 Lakh*',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80'
    },
    car2: {
      name: 'Dzire',
      brand: 'Maruti Suzuki',
      price: '₹6.31 - 9.54 Lakh*',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=600&q=80'
    },
    buttonText: 'Aeris vs Dzire'
  }
];

export const CITIES: City[] = [
  { name: 'Ahmedabad', state: 'Gujarat', carsAvailable: 2840, iconType: 'mosque' },
  { name: 'Bangalore', state: 'Karnataka', carsAvailable: 5120, iconType: 'palace' },
  { name: 'Chennai', state: 'Tamil Nadu', carsAvailable: 3410, iconType: 'temple' },
  { name: 'Delhi NCR', state: 'Delhi', carsAvailable: 8900, iconType: 'gate' },
  { name: 'Gurgaon', state: 'Haryana', carsAvailable: 4200, iconType: 'towers' },
  { name: 'Hyderabad', state: 'Telangana', carsAvailable: 3950, iconType: 'charminar' },
  { name: 'Jaipur', state: 'Rajasthan', carsAvailable: 2190, iconType: 'hawa' },
  { name: 'Kolkata', state: 'West Bengal', carsAvailable: 2750, iconType: 'howrah' },
  { name: 'Mumbai', state: 'Maharashtra', carsAvailable: 7680, iconType: 'gate' },
  { name: 'New Delhi', state: 'Delhi', carsAvailable: 6300, iconType: 'monument' },
  { name: 'Noida', state: 'Uttar Pradesh', carsAvailable: 3100, iconType: 'metro' },
  { name: 'Pune', state: 'Maharashtra', carsAvailable: 4450, iconType: 'fort' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Kia Seltos Petrol Vs Diesel: We Tested 3 Powertrains And Compared Real-World Performance',
    summary: 'While still superior, diesel engines have definitely lost that innate fuel efficiency advantage over high-tech turbo petrols.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80',
    tag: 'Comparison Test',
    date: '2 hrs ago',
    readTime: '4 min read'
  },
  {
    id: 'news-2',
    title: 'Want An Automatic CNG Car This Diwali? Check Out Which One Suits You Best',
    summary: 'Three Maruti models, one fuel-saving formula, and an automatic twist. But which one delivers optimum drivability and trunk utility?',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80',
    tag: 'Buying Advice',
    date: '5 hrs ago',
    readTime: '3 min read'
  },
  {
    id: 'news-3',
    title: '2026 Mahindra Bolero Bold Edition Launched With Bronze Accents And Rugged Tech',
    summary: 'One thing is for sure; the Bold Edition will definitely make your Bolero stand out on the street with rugged alloy finishes and tech upgrades.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    tag: 'Launch News',
    date: '1 day ago',
    readTime: '5 min read'
  },
  {
    id: 'news-4',
    title: 'Hyundai Creta Gets Discounts Of Up To Rs 1 Lakh! Check Out How To Avail',
    summary: 'All models are having finance benefits of up to Rs 1 lakh! Find out eligibility, dealer locations, and instant exchange bonuses.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80',
    tag: 'Festive Offers',
    date: '1 day ago',
    readTime: '3 min read'
  }
];

export const USED_CARS_DATA: UsedCar[] = [
  {
    id: 'used-tata-tigor-2022',
    name: 'Tata Tigor',
    brand: 'Tata',
    year: 2022,
    priceLakh: 6.65,
    priceFormatted: '₹6.65L',
    kmDriven: 20000,
    kmFormatted: '20,000 kms',
    fuel: 'CNG',
    transmission: 'Manual',
    location: 'Bidanasi, Cuttack',
    owner: '1st Owner',
    isDirectOwner: true,
    isFeatured: true,
    images: [
      'https://images10.gaadi.com/usedgaadi-sellcar/UsedCar/i6b75012a/e0e29db4-6d64-4b80-a0f5-791d01802783.jpg?imwidth=640',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=640&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=640&q=80'
    ],
    aiExpert: {
      status: 'ABOVE MARKET',
      points: [
        '1st owner, fitness valid — documents are clear on this Tigor.',
        'Only 20k km — lower than 96% of similar 2022 cars.'
      ]
    },
    seller: {
      name: 'Ramesh Mohanty',
      phone: '98610-44211',
      rating: 4.8,
      verified: true
    }
  },
  {
    id: 'used-tata-punch-ev-2025',
    name: 'Tata Punch EV',
    brand: 'Tata',
    year: 2025,
    priceLakh: 11.0,
    priceFormatted: '₹11L',
    kmDriven: 20000,
    kmFormatted: '20,000 kms',
    fuel: 'Electric',
    transmission: 'Automatic',
    location: 'CRRI, Cuttack',
    owner: '1st Owner',
    isDirectOwner: true,
    images: [
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=640&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=640&q=80'
    ],
    aiExpert: {
      status: 'GREAT PRICE',
      points: [
        '1st owner — key checks pass on this Punch EV.',
        '1 year old, only 20k km — near-new battery health.'
      ]
    },
    seller: {
      name: 'Debasis Patnaik',
      phone: '94371-88204',
      rating: 4.9,
      verified: true
    }
  },
  {
    id: 'used-datsun-go-plus-2019',
    name: 'Datsun GO Plus',
    brand: 'Datsun',
    year: 2019,
    priceLakh: 3.0,
    priceFormatted: '₹3L',
    kmDriven: 20000,
    kmFormatted: '20,000 kms',
    fuel: 'Petrol',
    transmission: 'Manual',
    location: 'Mundali Colony, Cuttack',
    owner: '1st Owner',
    isDirectOwner: true,
    images: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=640&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=640&q=80'
    ],
    aiExpert: {
      status: 'GREAT PRICE',
      points: [
        '20k km — check the full verdict report.',
        'Datsun service is easy to find with zero claim history.'
      ]
    },
    seller: {
      name: 'Satyajit Ray',
      phone: '99370-12889',
      rating: 4.7,
      verified: true
    }
  },
  {
    id: 'used-maruti-wagon-r-2018',
    name: 'Maruti Wagon R',
    brand: 'Maruti Suzuki',
    year: 2018,
    priceLakh: 1.95,
    priceFormatted: '₹1.95L',
    kmDriven: 45000,
    kmFormatted: '45,000 kms',
    fuel: 'CNG',
    transmission: 'Manual',
    location: 'Link Road, Cuttack',
    owner: '1st Owner',
    isDirectOwner: true,
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=640&q=80'
    ],
    aiExpert: {
      status: 'GREAT PRICE',
      points: [
        'Company fitted CNG — 32 km/kg certified.',
        'Low maintenance family hatchback.'
      ]
    },
    seller: {
      name: 'Prakash Sahoo',
      phone: '98612-55610',
      rating: 4.6,
      verified: true
    }
  },
  {
    id: 'used-maruti-swift-dzire-2020',
    name: 'Maruti Swift Dzire',
    brand: 'Maruti Suzuki',
    year: 2020,
    priceLakh: 4.80,
    priceFormatted: '₹4.80L',
    kmDriven: 28000,
    kmFormatted: '28,000 kms',
    fuel: 'Petrol',
    transmission: 'Manual',
    location: 'Madhupatna, Cuttack',
    owner: '1st Owner',
    isDirectOwner: true,
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=640&q=80'
    ],
    aiExpert: {
      status: 'GREAT PRICE',
      points: [
        'Mint condition sedan with complete authorized records.',
        'Touchscreen infotainment with reverse camera.'
      ]
    },
    seller: {
      name: 'Kailash Tripathy',
      phone: '94372-90112',
      rating: 4.8,
      verified: true
    }
  },
  {
    id: 'used-hyundai-creta-2021',
    name: 'Hyundai Creta SX',
    brand: 'Hyundai',
    year: 2021,
    priceLakh: 9.75,
    priceFormatted: '₹9.75L',
    kmDriven: 35000,
    kmFormatted: '35,000 kms',
    fuel: 'Diesel',
    transmission: 'Manual',
    location: 'CDA Sector 9, Cuttack',
    owner: '1st Owner',
    isDirectOwner: true,
    isFeatured: true,
    images: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=640&q=80'
    ],
    aiExpert: {
      status: 'GREAT PRICE',
      points: [
        'Panoramic sunroof & Bose premium audio system.',
        'Non-accidental certified with comprehensive insurance.'
      ]
    },
    seller: {
      name: 'Anupam Jena',
      phone: '98531-77890',
      rating: 4.9,
      verified: true
    }
  },
  {
    id: 'used-bmw-3-series-2022',
    name: 'BMW 3 Series Luxury',
    brand: 'BMW',
    year: 2022,
    priceLakh: 28.50,
    priceFormatted: '₹28.50L',
    kmDriven: 18000,
    kmFormatted: '18,000 kms',
    fuel: 'Petrol',
    transmission: 'Automatic',
    location: 'Bhubaneswar Hub',
    owner: '1st Owner',
    isDirectOwner: false,
    isFeatured: true,
    isLuxury: true,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=640&q=80'
    ],
    aiExpert: {
      status: 'GREAT PRICE',
      points: [
        'Pristine luxury sedan under extended BMW BSI package.',
        'Zero depreciation insurance valid till Dec 2026.'
      ]
    },
    seller: {
      name: 'JJ Motors Certified Hub',
      phone: '1800-200-8899',
      rating: 5.0,
      verified: true
    }
  }
];

