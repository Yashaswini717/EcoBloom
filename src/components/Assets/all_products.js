import p1_img from './product_1.png';
import p2_img from './product_2.png';
import p3_img from './product_3.png';
import p4_img from './product_4.png';
import p5_img from './product_5.png';
import p6_img from './product_6.png';
import p7_img from './product_7.png';
import p8_img from './product_8.png';
import p9_img from './product_9.png';
import p10_img from './product_10.png';
import p11_img from './product_11.png';
import p12_img from './product_12.png';
import p13_img from './product_13.png';
import p14_img from './product_14.png';
import p15_img from './product_15.png';
import p16_img from './product_16.png';
import p17_img from './product_17.png';
import p18_img from './product_18.png';
import p19_img from './product_19.png';
import p20_img from './product_20.png';
import p21_img from './product_21.png';
import p22_img from './product_22.png';
import p23_img from './product_23.png';
import p24_img from './product_24.png';
import p25_img from './product_25.png';

let all_products = [
  {
    id: 1,
    name: "Cel Repair and Protect Combo",
    image: p1_img,
    new_price: 399,
    old_price: 499,
    category: 'Personal Care',
    desc: 'A must-have for healthy, glowing skin! This combo includes a repair cream and protective serum, enriched with natural extracts to rejuvenate and shield your skin.'
  },
  {
    id: 2,
    name: "Tote Bag",
    image: p2_img,
    new_price: 150,
    old_price: 200,
    desc: 'This stylish and durable tote bag is perfect for shopping or daily use. Made from eco-friendly materials, it’s a great alternative to plastic bags.'
  },
  {
    id: 3,
    name: "Cotton T-shirt",
    image: p3_img,
    new_price: 149,
    old_price: 299,
    category: 'Personal Care',
    desc: 'Made from 100% organic cotton, this T-shirt offers ultimate comfort and breathability. Wear it casually or as part of a sustainable wardrobe.'
  },
  {
    id: 4,
    name: "Bamboo Toothbrush",
    image: p4_img,
    new_price: 49,
    old_price: 59,
    category: 'Personal Care',
    desc: 'An eco-friendly choice for oral hygiene, this bamboo toothbrush is biodegradable and features soft bristles for gentle cleaning.'
  },
  {
    id: 5,
    name: "Bamboo Hair Brush",
    image: p5_img,
    new_price: 150.0,
    old_price: 230.0,
    category: 'Personal Care',
    desc: 'Say goodbye to frizz with our bamboo hairbrush! It’s lightweight, sturdy, and great for detangling all hair types without static.'
  },
  {
    id: 6,
    name: 'Beeswax & Vanilla Lip Balm',
    image: p6_img,
    new_price: 80.0,
    old_price: 120.0,
    category: 'Personal Care',
    desc: 'Moisturize and protect your lips naturally with our beeswax and vanilla lip balm. Perfect for dry and chapped lips in any season.'
  },
  {
    id: 7,
    name: 'Disposable Razor',
    image: p7_img,
    new_price: 150.0,
    old_price: 250.0,
    category: 'Personal Care',
    desc: 'Enjoy a smooth, hassle-free shave with this eco-friendly disposable razor. Its precision blades ensure an easy, close shave every time.'
  },
  {
    id: 8,
    name: 'Shampoo Bar',
    image: p8_img,
    new_price: 250.0,
    old_price: 350.0,
    category: 'Personal Care',
    desc: 'Replace plastic shampoo bottles with our compact, travel-friendly shampoo bar. Infused with natural oils to cleanse and nourish your hair.'
  },
  {
    id: 9,
    name: 'Reusable Beeswax Food Wraps',
    image: p9_img,
    new_price: 180.0,
    old_price: 250.0,
    category: 'Home & Kitchen',
    desc: 'Ditch plastic wraps for our reusable beeswax food wraps. Ideal for covering bowls or wrapping food while keeping it fresh.'
  },
  {
    id: 10,
    name: 'Cotton Yoga Mat',
    image: p10_img,
    new_price: 90.0,
    old_price: 130.0,
    category: 'Home & Kitchen',
    desc: 'Enhance your yoga sessions with this eco-friendly cotton yoga mat. Soft, durable, and easy to maintain for all fitness enthusiasts.'
  },
  {
    id: 11,
    name: "Bamboo Cotton Swabs",
    image: p11_img,
    new_price: 190.0,
    old_price: 230.0,
    category: 'Personal Care',
    desc: 'Clean ears and apply makeup with ease using our biodegradable bamboo cotton swabs. A simple yet impactful switch to sustainability.'
  },
  {
    id: 12,
    name: 'Hyaluronic Acid Night Cream',
    image: p12_img,
    new_price: 200.0,
    old_price: 400.0,
    category: 'Personal Care',
    desc: 'Wake up to hydrated and radiant skin with our hyaluronic acid night cream. Packed with ingredients that lock in moisture overnight.'
  },
  {
    id: 13,
    name: 'Bamboo Utensils',
    image: p13_img,
    new_price: 500.0,
    old_price: 699.0,
    category: 'Home & Kitchen',
    desc: 'Make mealtime sustainable with our lightweight, reusable bamboo utensils. Perfect for picnics, lunches, or daily meals at home.'
  },
  {
    id: 14,
    name: 'Recycled Paper Towels',
    image: p14_img,
    new_price: 100.0,
    old_price: 150.0,
    category: 'Home & Kitchen',
    desc: 'Eco-friendly and absorbent, these recycled paper towels are a great addition to your sustainable cleaning supplies.'
  },
  {
    id: 15,
    name: 'Cotton Canvas Tote Bag',
    image: p15_img,
    new_price: 100.0,
    old_price: 150.0,
    category: 'Home & Kitchen',
    desc: 'Carry groceries or personal items with ease in our durable cotton canvas tote bag. Simple, stylish, and eco-conscious.'
  },
  {
    id: 16,
    name: 'Solar Garden Lights',
    image: p16_img,
    new_price: 100.0,
    old_price: 150.0,
    category: 'Gardening & Outdoor',
    desc: 'Illuminate your garden sustainably with these solar-powered lights. Energy-efficient and perfect for adding charm to outdoor spaces.'
  },
  {
    id: 17,
    name: 'Solar Lamp',
    image: p17_img,
    new_price: 100.0,
    old_price: 150.0,
    category: 'Gardening & Outdoor',
    desc: 'Light up any space with our solar lamp. Portable, reliable, and powered by the sun for ultimate convenience.'
  },
  {
    id: 18,
    name: 'Toothpaste Tablets',
    image: p18_img,
    new_price: 100.0,
    old_price: 150.0,
    category: 'Personal Care',
    desc: 'Say goodbye to toothpaste tubes with our mess-free toothpaste tablets. Easy to use and perfect for travel.'
  },
  {
    id: 19,
    name: 'Candle Jar',
    image: p19_img,
    new_price: 100.0,
    old_price: 150.0,
    category: 'Gardening & Outdoor',
    desc: 'Create a cozy atmosphere with our scented candle jars. Perfect for relaxation or as a thoughtful gift.'
  },
  {
    id: 20,
    name: 'Solar Lamp',
    image: p20_img,
    new_price: 100.0,
    old_price: 150.0,
    category: 'Gardening & Outdoor',
    desc: 'Harness solar energy to brighten up your home or outdoor areas with this durable and eco-friendly solar lamp.'
  },
  {
    id: 21,
    name: 'Wooden Premium Cooking & Serving Kitchen Tool 6 Pieces Spoon Set',
    image: p21_img,
    new_price: 549.0,
    old_price: 699.0,
    category: 'Home & Kitchen',
    desc: 'Harness solar energy to brighten up your home or outdoor areas with this durable and eco-friendly solar lamp.'
  },
  {
    id: 22,
    name: 'Rainbow Steel Cutlery Set - Full',
    image: p22_img,
    new_price: 999.0,
    old_price: 1399.0,
    category: 'Home & Kitchen',
    desc: 'Harness solar energy to brighten up your home or outdoor areas with this durable and eco-friendly solar lamp.'
  },
  {
    id: 23,
    name: 'The traveller kit',
    image: p23_img,
    new_price: 1000.0,
    old_price: 1500.0,
    category: 'Home & Kitchen',
    desc: 'Harness solar energy to brighten up your home or outdoor areas with this durable and eco-friendly solar lamp.'
  },
  {
    id: 24,
    name: 'Stiff Coir Body Brush',
    image: p24_img,
    new_price: 300.0,
    old_price: 400.0,
    category: 'Personal Care',
    desc: 'Harness solar energy to brighten up your home or outdoor areas with this durable and eco-friendly solar lamp.'
  },
  {
    id: 25,
    name: 'Whipped Cream',
    image: p25_img,
    new_price: 400.0,
    old_price: 500.0,
    category: 'Personal Care',
    desc: 'Harness solar energy to brighten up your home or outdoor areas with this durable and eco-friendly solar lamp.'
  },
];

export default all_products;
