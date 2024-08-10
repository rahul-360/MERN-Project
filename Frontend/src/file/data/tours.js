import tourImg01 from "../image/pexels-debphotography-5373680.jpg";
import tourImg02 from "../image/delhi_tajmahal.jpg";
import tourImg03 from "../image/karnataka.jpg";
import tourImg04 from "../image/bihar_bodhgaya.jpg";
import tourImg05 from "../image/tamil_nadu.jpg";
import tourImg06 from "../image/hawa-mahal-jaipur.jpg";
import tourImg07 from "../image/mayapur.jpg";
import tourImg08 from "../image/taj_hotel.jpg";


const tours = [
  {
    id: "01",
    title: "Itc Royal",
    city: "Kokata",
    distance: 300,
    address: 'kolkata,west bengal',
    price: 79200,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Raj ",
        rating: 4.6,
      },
      {
         name: "Apurva",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Taj Mahal",
    city: "Agra",
    distance: 400,
    address: 'agra, Delhi',
    price: 76800,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Anand",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Shiv Temple",
    city: "karnataka",
    distance: 500,
    address: 'karnataka, india',
    price: 60800,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Amitosh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: " Bodh gaya",
    city: "gaya",
    distance: 500,
    address: 'Bodh Gaya, Bihar',
    price: 68000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Nayan",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Kali Temple",
    city: "Tamil Nadu",
    distance: 500,
    address: 'Tamil Nadu, India',
    price: 60000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Hitesh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Hawa Mahal",
    city: "jaipur",
    distance: 500,
    address: 'Jaipur, Rajasthan',
    price: 70400,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Yash",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Mayapur",
    city: "Krishnanagar",
    distance: 500,
    address: 'Krishnanagar, West bengal',
    price: 63200,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Nandkulyar",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Taj Hotel",
    city: "Mumbai",
    distance: 500,
    address: 'Mumbai, India',
    price: 79200,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
