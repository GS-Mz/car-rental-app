import {
  car_one_1,
  car_one_2,
  car_one_3,
  car_one_4,
  car_one_5,
  car_one_6,
  car_one_7,
  car_two_1,
  car_two_2,
  car_two_3,
  car_two_4,
  car_two_5,
  car_two_6,
  car_three_1,
  car_three_2,
  car_three_3,
  car_three_4,
  car_three_5,
  car_four_1,
  car_four_2,
  car_four_3,
  car_four_4,
  car_four_5,
  calendar_icon,
  car_icon,
  location_icon,
  audi,
  bmw,
  ford,
  honda,
  nissan,
  tesla,
  vw,
  wallet_icon,
  driver_icon,
  twentyfour_icon,
  support_icon,
  carMap,
} from "../assets";

const cars = [
  {
    make: "Jaguar",
    model: "F-Type",
    year: "2022",
  },
  {
    make: "Subaru",
    model: "Outback",
    year: "2020",
  },
  {
    make: "Kia",
    model: "K5",
    year: "2021",
  },
  {
    make: "Honda",
    model: "Accord",
    year: "2021",
  }
];

const steps = [
  {
    title: "Choose location",
    description: "Choose your location and find your best car.",
    icon: location_icon,
  },
  {
    title: "Pick-up date",
    description: "Select your pick up date and time to book your car.",
    icon: calendar_icon,
  },
  {
    title: "Book your car",
    description: "Book your car and we will deliver it directly to you.",
    icon: car_icon,
  },
];

const makers = [
  {
    name: "audi",
    logo: audi,
  },
  {
    name: "bmw",
    logo: bmw,
  },
  {
    name: "ford",
    logo: ford,
  },
  {
    name: "honda",
    logo: honda,
  },
  {
    name: "nissan",
    logo: nissan,
  },
  {
    name: "tesla",
    logo: tesla,
  },
  {
    name: "vw",
    logo: vw,
  },
];

const navLinks = [
  {
    id: "about",
    title: "Become a renter",
  },
  {
    id: "how-it-work",
    title: "How it work?",
  },
  {
    id: "why",
    title: "Why choose us",
  },
  {
    id: "rent",
    title: "Rent Now",
  },
];

const benefits = [
  {
    title: "why choose us",
    subtitle: "We offer the best experience with our rental deals",
    icon: carMap,
    id: "why",
  },
  {
    title: "Best price guaranteed",
    subtitle: "Find a lower price? We'll refund you 100% of the difference",
    icon: wallet_icon,
    id: "best",
  },
  {
    title: "Experience driver",
    subtitle:
      "Don't have a driver? Don't you worry, we have many experienced driver for you",
    icon: driver_icon,
    id: "driver",
  },
  {
    title: "24-hour car delivery",
    subtitle: "Book your car anytime and we deliver it directly to you",
    icon: twentyfour_icon,
    id: "delivery",
  },
  {
    title: "24/7 technical support",
    subtitle:
      "Have any question? Contact LuxDrive support anytime when you have problem.",
    icon: support_icon,
    id: "support",
  },
];

const footerInfo = [
  {
    title: "Our Product",
    links: ["Career", "Cars", "Features", "Priceline"],
  },
  {
    title: "Resources",
    links: ["Download", "Help Center", "Guides", "Partner Network", "Cruises"],
  },
  {
    title: "About LuxDrive",
    links: [
      "Why Choose LuxDrive",
      "Our Story",
      "Investor Relations",
      "Press Center",
      "Advertise",
    ],
  },
];

export { cars, steps, makers, navLinks, benefits, footerInfo };
