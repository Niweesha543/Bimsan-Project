"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const destinations = [
  {
    id: 1,
    name: "Arugam Bay",
    country: "sri lanka",
    category: "Beach", 
    image: "/image_27.jpg", 
    description: "A surfer's paradise located on the southeast coast of Sri Lanka, famous for its perfect waves and laid-back atmosphere.",
    fullDescription: "Arugam Bay is considered one of the top surf spots in the world. The main surf break is at the point, which offers a long right-hand ride that's suitable for all levels. Beyond surfing, you can explore the nearby Kumana National Park, known for its abundant birdlife, or visit the ancient temple of Muhudu Maha Viharaya. The area's relaxed vibe and stunning coastline make it a favorite for beach lovers seeking both adventure and tranquility."
  },
   {
    id: 2,
    name: "Sigiriya",
    country: "sri lanka",
    category: "Culture & History",
    image: "/image_6.jpg", 
    description: "This ancient rock fortress with its frescoes and landscaped gardens is a UNESCO World Heritage site.",
    fullDescription: "Sigiriya (Lion Rock) is an ancient rock fortress and palace ruins situated in central Sri Lanka. This UNESCO World Heritage Site features remnants of a ruined palace complex at the top of a massive column of rock, surrounded by the remains of an extensive network of gardens and reservoirs. The site is renowned for its ancient frescoes, the mirror wall, and the lion gate. The climb to the top offers breathtaking panoramic views of the surrounding landscape."
  },
  {
    id: 3,
    name: "Yala National Park",
    country: "sri lanka",
    category: "Safari",
    image: "/image_40.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  
  {
    id: 4,
    name: "Kalpitiya",
    country: "sri lanka",
    category: "Beach",
    image: "/image_30.jpg", 
    description: "Home to the highest leopard density in the world, Yala offers unforgettable wildlife safari experiences.",
    fullDescription: "Yala National Park is Sri Lanka's most visited wildlife reserve, famous for having one of the highest leopard densities in the world. Besides leopards, the park is home to elephants, sloth bears, crocodiles, and over 200 bird species. The landscape varies from forests and grasslands to lagoons and beaches, creating diverse habitats for wildlife. Safari tours typically take place in the early morning or late afternoon when animals are most active."
  },
  {
    id: 5,
    name: "Polonnaruwa",
    country: "sri lanka",
    category: "Culture & History",
    image: "/image_41.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
 
  {
    id: 6,
    name: "Kandy",
    country: "sri lanka",
    category: "Culture & History",
    image: "/image_7.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 7,
    name: "Negombo",
    country: "sri lanka",
    category: "Beach",
    image: "/image_38.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 8,
    name: "Katharagama",
    country: "sri lanka",
    category: "Culture & History",
    image: "/image_44.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  
  {
    id: 9,
    name: "Passikudah",
    country: "sri lanka",
    category: "Beach",
    image: "/image_29.jpg", 
    description: "Known for its remarkably shallow coastline where you can walk far into the sea, Passikudah offers breathtaking sunsets.",
    fullDescription: "Passikudah is famous for its shallow bay where the water stays at knee-level for a considerable distance into the sea, making it one of the safest spots for swimming. The beach is known for its stunning sunrises and sunsets that paint the sky in vibrant hues. The bay is protected by a reef, creating a natural swimming pool effect with calm waters. Passikudah is also home to several luxury resorts that offer various water sports and excursions to nearby attractions."
  },
  {
    id: 10,
    name: "Anuradhapura",
    country: "sri lanka",
    category: "Culture & History",
    image: "/image_26.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 11,
    name: "Balapitiya",
    country: "sri lanka",
    category: "Beach",
    image: "/image_32.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 12,
    name: "Wilpaththu National Park",
    country: "sri lanka",
    category: "Safari",
    image: "/image_46.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  
  {
    id: 13,
    name: "Wasgamuwa National Park",
    country: "sri lanka",
    category: "Safari",
    image: "/image_21.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 14,
    name: "Hikkaduwa",
    country: "sri lanka",
    category: "Beach",
    image: "/image_39.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 15,
    name: "Dambulla",
    country: "sri lanka",
    category: "Culture & History",
    image: "/image_42.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 16,
    name: "Unawatuna",
    country: "sri lanka",
    category: "Beach",
    image: "/image_36.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 17,
    name: "Minneriya National Park",
    country: "sri lanka",
    category: "Safari",
    image: "/image_43.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 18,
    name: "Benthota",
    country: "sri lanka",
    category: "Beach",
    image: "/image_31.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 19,
    name: "Galle",
    country: "sri lanka",
    category: "Beach",
    image: "/image_33.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 20,
    name: "Mirissa",
    country: "sri lanka",
    category: "Beach",
    image: "/image_34.jpg",
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 21,
    name: "Kithulgala",
    country: "sri lanka",
    category: "Landscapes",
    image: "/image_11.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 22,
    name: "Ella",
    country: "sri lanka",
    category: "Landscapes",
    image: "/image_8.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 23,
    name: "Kumana National Park",
    country: "sri lanka",
    category: "Safari",
    image: "/image_45.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 24,
    name: "Nilaveli",
    country: "sri lanka",
    category: "Beach",
    image: "/image_28.jpg", 
    description: "Pristine white sandy beaches and crystal-clear waters make Nilaveli a tropical paradise for beach enthusiasts.",
    fullDescription: "Nilaveli Beach is a stretch of white sandy beach and turquoise shallow water. Its soft sand and clear water make it ideal for swimming and snorkeling. Just offshore lies Pigeon Island National Park, one of the two marine national parks in Sri Lanka, offering spectacular coral reefs and diverse marine life. The area is also home to several luxury resorts where you can indulge in spa treatments while enjoying ocean views."
  },

  {
    id: 25,
    name: "Adam's Peak",
    country: "sri lanka",
    category: "Landscapes",
    image: "/image_47.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 26,
    name: "Nuwara Eliya",
    country: "sri lanka",
    category: "Landscapes",
    image: "/image_48.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 27,
    name: "Udawalawe National Park",
    country: "sri lanka",
    category: "Safari",
    image: "/image_50.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  {
    id: 28,
    name: "Sinharaja Rain Forest",
    country: "sri lanka",
    category: "Safari",
    image: "/image_49.jpg", 
    description: "A picturesque mountain village with stunning views, famous for Ella Gap, Nine Arch Bridge, and tea plantations.",
    fullDescription: "Ella is a small mountain town in the Badulla District known for its breathtaking views and relaxed atmosphere. The area is famous for Ella Gap, which offers spectacular views across the southern plains of Sri Lanka. Other attractions include the Nine Arch Bridge, a colonial-era railway bridge; Little Adam's Peak, offering panoramic views after a moderate hike; and Ravana Falls, a popular cascading waterfall. The surrounding tea plantations provide lush green scenery and opportunities to learn about tea production."
  },
  // Add sample destinations for other countries
  {
    id: 29,
    name: "Ubud",
    country: "bali",
    category: "Culture & History",
    image: "/image_58.jpg",
    description: "Cultural heart of Bali with traditional arts, temples, and rice terraces.",
    fullDescription: "Ubud is the cultural heart of Bali, known for its traditional arts and crafts, temples, and stunning rice terraces. The town offers a peaceful retreat with yoga studios, art galleries, and traditional markets."
  },
  {
    id: 30,
    name: "Seminyak Beach",
    country: "bali",
    category: "Beach",
    image: "/image_59.jpg",
    description: "Stylish beach destination with upscale resorts and vibrant nightlife.",
    fullDescription: "Seminyak is known for its sophisticated beach clubs, fine dining restaurants, and luxury shopping. The beach offers great surfing conditions and spectacular sunsets."
  },
  {
    id: 31,
    name: "Bali Safari & Marine Park",
    country: "bali",
    category: "Safari",
    image: "/image_60.jpg",
    description: "Wildlife park with diverse animals and conservation programs.",
    fullDescription: "Bali Safari is a wildlife park that houses various animals in naturalistic habitats, offering educational experiences and conservation programs for visitors of all ages."
  },
  {
    id: 32,
    name: "Uluwatu Temple",
    country: "bali",
    category: "Landscapes",
    image: "/image_61.jpg",
    description: "Stunning rice terraces and volcanic mountains.",
    fullDescription: "Bali offers breathtaking landscapes from emerald rice terraces to volcanic mountains, providing countless opportunities for nature photography and hiking."
  },
  {
    id: 33,
    name: "Kuta Beach",
    country: "bali",
    category: "Beach",
    image: "/image_55.jpg",
    description: "Kuta Beach is a well-known surf spot, especially for beginners, with consistent waves",
    fullDescription: "Kuta Beach, located in southern Bali, Indonesia, is a famous beach known for its white sand, vibrant atmosphere, and strong waves ideal for surfing. It's a popular tourist destination, offering a range of activities from surfing to watersports and nightlife."
  },
   {
    id: 34,
    name: "Waterbom Bali",
    country: "bali",
    category: "Landscapes",
    image: "/image_62.jpg",
    description: " Water Park in Asia Most sustainable water park in the World.",
    fullDescription: "Exciting water slides slice through 3.8 hectares of landscaped tropical parks providing hours of fun and entertainment for the young and young at heart!"
  },

  {
    id: 35,
    name: "Malé Beach",
    country: "maldives",
    category: "Beach",
    image: "/image_63.jpg",
    description: "Capital city with pristine beaches and crystal-clear waters.",
    fullDescription: "Malé is the capital of Maldives, featuring stunning beaches, luxury resorts, and some of the clearest waters in the world, perfect for diving and snorkeling."
  },
  {
    id: 36,
    name: "muliaage (palace)",
    country: "maldives",
    category: "Culture & History",
    image: "/image_64.jpg",
    description: "The Muliaage palace or Muliaage is the official residence of the president of the Maldives. ",
    fullDescription: "The Muliaage palace or Muliaage is the official residence of the president of the Maldives. Muliaage, situated in Henveiru within the historic center of Malé, is located on Medhuziyaarai Magu, near significant landmarks, the Medhu Ziyaaraiy, the Malé Friday Mosque, and the Munnaru. "
  },
  {
    id: 37,
    name: "Landaa Giraavaru",
    country: "maldives",
    category: "Landscapes",
    image: "/image_66.jpg",
    description: "An innovative island sanctuary in the Baa Atoll UNESCO Biosphere Reserve. Welcome to one of the world's most beautiful islands.",
    fullDescription: "Landaa Giraavaru, often called Four Seasons at Landaagiraavaru, is an island in the Baa Atoll in the Maldives. Home to a luxury Four Seasons resort since 2004 with rates from USD $1,400 per night, it is one of the many island resorts of the Maldives."
  },
   {
    id: 38,
    name: "Safari Island Maldives",
    country: "maldives",
    category: "Safari",
    image: "/image_67.jpg",
    description: " a cruise or boat trip that explores multiple islands and atolls, often with the intention of diving, snorkeling, or relaxing.",
    fullDescription: "In the Maldives, 'safari' generally refers to a cruise or boat trip that explores multiple islands and atolls, often with the intention of diving, snorkeling, or relaxing. These trips can range from a few days to a week or more and offer a unique way to experience the diverse beauty of the Maldivian archipelago."
  },

  {
    id: 39,
    name: "Sinamale Bridge",
    country: "maldives",
    category: "Landscapes",
    image: "/image_65.jpg",
    description: "Rich Maldivian heritage and local traditions.",
    fullDescription: "Experience the unique Maldivian culture through local museums, traditional crafts, and historical sites that showcase the islands' rich heritage."
  },
  {
    id: 40,
    name: "Phuket Beach",
    country: "thailand",
    category: "Beach",
    image: "/image_68.jpg",
    description: "Thailand's largest island with beautiful beaches and vibrant culture.",
    fullDescription: "Phuket offers stunning beaches, vibrant nightlife, and rich cultural heritage. From Patong Beach's entertainment to peaceful coves, there's something for everyone."
  },
  {
    id: 41,
    name: "The grand palace",
    country: "thailand",
    category: "Culture & History",
    image: "/image_69.jpg",
    description: "The Grand Palace is a complex of buildings at the heart of Bangkok, Thailand.",
    fullDescription: "The Grand Palace is a complex of buildings at the heart of Bangkok, Thailand. The palace has been the official residence of the Kings of Siam since 1782. The king, his court, and his royal government were based on the grounds of the palace until 1925. "
  },
  {
    id: 42,
    name: "Safari World Bangkok",
    country: "thailand",
    category: "Safari",
    image: "/image_70.jpg",
    description: "Wildlife parks and elephant sanctuaries.",
    fullDescription: "Thailand offers various wildlife experiences from elephant sanctuaries to national parks where you can observe diverse flora and fauna."
  },
  {
    id: 43,
    name: "Doi inthanon",
    country: "thailand",
    category: "Landscapes",
    image: "/image_71.jpg",
    description: "Mountainous regions with lush forests and waterfalls.",
    fullDescription: "Doi Inthanon is the highest mountain in Thailand. It is in Chom Thong District, Chiang Mai Province. This mountain is an ultra prominent peak, known in the past as Doi Luang Ang Ga or meaning the 'crow's pond top'. Near the mountain's base was a pond where many crows gathered."
  },
   {
    id: 44,
    name: "Banana Beach",
    country: "thailand",
    category: "Beach",
    image: "/image_72.jpg",
    description: "Banana Beach on Koh Hey (Coral Island) is a paradise for photographers and nature lovers.",
    fullDescription: "The water is crystal clear, and the beach is super peaceful—perfect for relaxing or snorkeling. It feels like a little slice of paradise, away from the crowds."
  },
{
    id: 45,
    name: "The Temple of the Emerald Buddha",
    country: "thailand",
    category: "Culture & History",
    image: "/image_76.jpg",
    description: "It is a world-renowned 46 meter long gold plated reclining Buddha.",
    fullDescription: "Wat Phra Kaew, commonly known in English as the Temple of the Emerald Buddha and officially as Wat Phra Si Rattana Satsadaram, is regarded as the most sacred Buddhist temple in Thailand. The complex consists of a number of buildings within the precincts of the Grand Palace in the historical centre of Bangkok."
  },
 {
    id: 46,
    name: "Safari Park Kanchanaburi",
    country: "thailand",
    category: "Safari",
    image: "/image_77.jpg",
    description: "Wildlife parks and elephant sanctuaries.",
    fullDescription: "Thailand offers various wildlife experiences from elephant sanctuaries to national parks where you can observe diverse flora and fauna."
  },
{
    id: 47,
    name: "Phi Phi Islands",
    country: "thailand",
    category: "Landscapes",
    image: "/image_78.jpg",
    description: "This cozy, secluded beach features calm waters and is a favorite for families and couples to relax, snorkel and body surf.",
    fullDescription: "The Phi Phi Islands are an island group in Thailand between the large island of Krabi and the Straits of Malacca coast of Thailand. The islands are administratively part of Krabi Province.",
    
  },
  
{
    id: 48,
    name: "patong beach",
    country: "thailand",
    category: "Beach",
    image: "/image_74.png",
    description: " Phuket's busiest beach. The beach is nice from the middle and north to the roundabout at the north end.",
    fullDescription: "Patong is a beach resort town on the west coast of Phuket Island, facing the Andaman Sea in the southwest of Thailand. Its sandy, crescent beach is lined with cafes, restaurants and bars. The famously raucous nightlife scene features beer bars, go-go bars, nightclubs, massage parlors and cabarets that overflow into the street along neon-lit Bangla Road and in the Patong OTOP Shopping Paradise complex. ",
    
  },
 
  {
    id: 49,
    name: "Marina Beach • JBR",
    country: "dubai",
    category: "Beach",
    image: "/image_79.jpg",
    description: "Luxury beaches with world-class amenities.",
    fullDescription: "Dubai's beaches offer luxury and comfort with pristine sands, upscale beach clubs, and stunning views of the city's iconic skyline."
  },

  {
    id: 50,
    name: "Burj Khalifa",
    country: "dubai",
    category: "Landscapes",
    image: "/image_80.jpg",
    description: "World's tallest building offering breathtaking city views.",
    fullDescription: "The Burj Khalifa is an iconic skyscraper and the world's tallest building, offering observation decks with panoramic views of Dubai's skyline and beyond."
  },
  {
    id: 51,
    name: "Al awir desert",
    country: "dubai",
    category: "Safari",
    image: "/image_81.jpg",
    description: "Desert landscapes and safari experiences.",
    fullDescription: "Al Awir Desert is located about 35 kilometers from Dubai's city center. It is known for being the hub of camel breeding and agriculture. Al Awir Desert is a prime location for dune-bashing and quad biking. It attracts lots of tourists to experience the unique range of activities it offers including, desert safari and adventure sports. It is one of the most popular locations for Desert Safari in Dubai and it experiences lots of footfall during the weekends for such activities."
  },
   {
    id: 52,
    name: "Kite Beach",
    country: "dubai",
    category: "Beach",
    image: "/image_84.jpg",
    description: "Luxury beaches with world-class amenities.",
    fullDescription: "Kite Beach features open stretches of soft white sand, vibrant sights and sounds, fitness areas, a beach library, and kids activities."
  },
  {
    id: 53,
    name: "Liwa desert",
    country: "dubai",
    category: "Safari",
    image: "/image_82.jpg",
    description: "Liwa Desert, also known as 'The Empty Quarter,' is a vast desert area known for its high dunes and extreme weather conditions.",
    fullDescription: "Located near the Rub Al Khali, the Liwa Desert, also known as 'The Empty Quarter,' is a vast desert area known for its high dunes and extreme weather conditions. The highest sand dunes in all of UAE can be found here, with plenty to do and explore nearby. The area is known for its rich history, and it hosts events such as cultural festivals, like the week-long Liwa festival. Tourists can take part in challenging races or just relax at one hundred fifty different desert villages throughout this wide-open space where culture thrives."
  },
   {
    id: 54,
    name: "Sufouh Beach",
    country: "dubai",
    category: "Beach",
    image: "/image_85.jpg",
    description: "A large white beach on the shore of the Persian Gulf but just a short distance from Dubai downtown.",
    fullDescription: "Al Sufouh Beach is one of Dubai's hidden gems, hence the nickname 'Secret Beach'. Despite what that suggests, the spot has become a big hit with residents in recent years. The moniker does, however, aptly allude to the beach's out-of-sight entryway – covered behind a row of palm trees, it's easy to miss, but well worth the scouting mission."
  },
  {
    id: 55,
    name: "Dubai Safari Park",
    country: "dubai",
    category: "Safari",
    image: "/image_83.jpg",
    description: "Liwa Desert, also known as 'The Empty Quarter,' is a vast desert area known for its high dunes and extreme weather conditions.",
    fullDescription: "Dubai Safari Park is an eco-friendly safari park located in Dubai, United Arab Emirates. The park's major source of energy is solar energy. The park is located on Al Warqa 5 on the Hatta Road. "
  },
{
    id: 56,
    name: "al fahidi historical neighbourhood",
    country: "dubai",
    category: "Culture & History",
    image: "/image_86.png",
    description: "Al Fahidi Historical Neighbourhood is a historic district in Dubai, United Arab Emirates.",
    fullDescription: "Discover what life in Old Dubai was like during the mid-19th century at Al Fahidi Historical Neighbourhood. Located along the Dubai Creek, this district is a key heritage site with much of the original infrastructure preserved and intact.The traditional wind towers – constructed from sandstone, teak, gypsum, palm wood and sandalwood – represent only a small part of Al Fahidi's history. Each alley, twisting pathway and breezy tower tells a story of a life before the seven emirates.Follow the winding streets to discover a range of cultural activities, museums, art galleries, special events and traditional food. Check out Dubai Calendar so that you never miss an event in the neighbourhood – particularly Sikka Art Fair and Heritage Week. "
  },

{
    id: 57,
    name: "jumeirah mosque",
    country: "dubai",
    category: "Culture & History",
    image: "/image_87.jpg",
    description: "Morning and Afternoon Mosque Visit. Daily at 10:00am and 2:00pm except Friday. No prior booking required.",
    fullDescription: "Jumeirah Mosque is a mosque in Dubai, Emirate of Dubai, United Arab Emirates. Construction began in 1975 and the mosque opened in 1979; the mosque is built in a combination of historical Islamic architectural styles, including Fatimid and Mamluk.  "
  },

  {
    id: 58,
    name: "Dubai Mall",
    country: "dubai",
    category: "Landscapes",
    image: "/image_88.jpg",
    description: "Redefining luxury. More than 200 of the most covetable luxury brands at Fashion Avenue ready for you to discover.",
    fullDescription: "Dubai Mall is the largest shopping mall in Dubai. The mall is part of Downtown Dubai and is located adjacent to the Burj Khalifa. It includes over 1,200 shops.  "
  },

  {
    id: 59,
    name: "Global village",
    country: "dubai",
    category: "Landscapes",
    image: "/image_89.jpg",
    description: "Global Village is a cultural destination in the city of Dubai.",
    fullDescription: "At Global Village, we bring the world to Dubai with the best entertainment, shopping, dining experiences, and attractions designed to keep you enthralled all season long! Discover a more wonderful world each time you visit to enjoy myriad cultures, cuisines and conversations. "
  },

{
    id: 60,
    name: "Aquaventure World",
    country: "dubai",
    category: "Landscapes",
    image: "/image_90.jpg",
    description: "Conquer the world's largest waterpark, where over 105 record-breaking slides, attractions and experiences span 22.5 hectares of fun.",
    fullDescription: "World's largest water park with over 105 slides, attractions & experiences, plus a splash area for kids."
  },
{
    id: 61,
    name: "Etihad museum",
    country: "dubai",
    category: "Culture & History",
    image: "/image_91.jpg",
    description: "Etihad Museum is focused on inspiring its visitors with the story of the founding of the UAE.",
    fullDescription: "The Etihad Museum, historically called the Union House and formerly as the al-Diyafah Palace and the Jumeirah Guesthouse, is a museum in Dubai, United Arab Emirates that collects, preserves, and displays "
  },

  {
    id: 62,
    name: "Mercato Beach",
    country: "dubai",
    category: "Beach",
    image: "/image_92.jpg",
    description: "Mercato Beach is a non-public, non-closed beach which makes it accessible 24 hours a day, 7 days a week. The entrance to the beach is free. ",
    fullDescription: "Visiting Mercato Beach Dubai won't cost you much. It's free to enter, making it a budget-friendly choice compared to private beaches in Dubai."
  },

  {
    id: 63,
    name: "Langkawi Beach",
    country: "malaysia",
    category: "Beach",
    image: "/image_93.jpg",
    description: "Beautiful islands with pristine beaches.",
    fullDescription: "Langkawi offers stunning beaches, duty-free shopping, and various water activities in one of Malaysia's most beautiful island destinations."
  },
  {
    id: 64,
    name: "Kuala Lumpur",
    country: "malaysia",
    category: "Culture & History",
    image: "/image_96.jpg",
    description: "Malaysia's capital featuring modern architecture and rich heritage.",
    fullDescription: "Kuala Lumpur is a bustling metropolis known for the iconic Petronas Twin Towers, diverse cuisine, and cultural landmarks that blend modern and traditional elements."
  },
   {
    id: 65,
    name: "Batu ferringhi beach",
    country: "malaysia",
    category: "Beach",
    image: "/image_94.jpg",
    description: "Beautiful, almost white sand. Warm sea almost all year round.",
    fullDescription: "Beautiful, almost white sand. Warm sea almost all year round. Almost the entire beach has a convenient smooth entrance to the sea. There are sometimes problems."
  },
  {
    id: 66,
    name: "Borneo Wildlife",
    country: "malaysia",
    category: "Safari",
    image: "/image_95.jpg",
    description: "Wildlife sanctuaries and rainforest experiences.",
    fullDescription: "Malaysian Borneo offers incredible wildlife experiences including orangutan sanctuaries, diverse rainforest ecosystems, and unique endemic species."
  },
  {
    id: 67,
    name: "Cameron Highlands",
    country: "malaysia",
    category: "Landscapes",
    image: "/image_97.jpg",
    description: "Cool highland retreat with tea plantations.",
    fullDescription: "Cameron Highlands is a beautiful hill station known for its cool climate, extensive tea plantations, and strawberry farms, perfect for a refreshing mountain getaway."
  },
  {
    id: 68,
    name: "Cenang beach",
    country: "malaysia",
    category: "Beach",
    image: "/image_98.jpg",
    description: "Beautiful, almost white sand. Warm sea almost all year round.",
    fullDescription: "Cenang Beach offers a nice balance of relaxation and fun. The sand is soft and the sea calm, although water is not perfect for swimming."
  },

  {
    id: 70,
    name: "Tanjung Rhu beach",
    country: "malaysia",
    category: "Beach",
    image: "/image_99.jpg",
    description: "Beautiful, almost white sand. Warm sea almost all year round.",
    fullDescription: "This secluded beach has blue waters of the Andaman Sea, ivory white sand, and a mild, cool breeze. Tanjung Rhu has shallow waters for easy swimming, snorkelling."
  },
];

export default function DestinationsPage() {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const countries = ["all", "sri lanka", "bali", "maldives", "thailand", "dubai", "malaysia"];
  const categories = ["All", "Beach", "Safari", "Culture & History", "Landscapes"];

  
  const filteredDestinations = destinations.filter(dest => {
    const countryMatch = selectedCountry === "all" || dest.country === selectedCountry;
    const categoryMatch = selectedCategory === "All" || dest.category === selectedCategory;
    return countryMatch && categoryMatch;
  });

 
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedCategory("All"); 
    setSelectedDestination(null);
  };

 
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedDestination(null);
  };

  
  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination);
  };

  const closeDetails = () => {
    setSelectedDestination(null);
  };

  
  const capitalizeCountry = (country) => {
    if (country === "all") return "All";
    return country.split(" ").map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(" ");
  };

  return (
  <div className="min-h-screen bg-gray-50 text-4xl font-serif">
  
    <div className="container mx-auto px-4 py-12">
  
      <div className="flex border-l-4 border-orange-500 mb-8">
        <div className="flex flex-wrap">
          {countries.map((country) => (
            <div 
              key={country}
              className={`cursor-pointer py-2 px-6 text-lg ${
                selectedCountry === country 
                  ? 'text-orange-500 font-semibold'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
              onClick={() => handleCountrySelect(country)}
            >
              {capitalizeCountry(country)}
            </div>
          ))}
        </div>
      </div>

   
      {selectedCountry !== "all" && (
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button 
              key={category}
              className={`px-6 py-1 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category 
                  ? 'bg-blue-950 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900'
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

  
      <div className="mb-8">
        <p className="text-lg text-gray-600">
          Showing {filteredDestinations.length} destinations 
          {selectedCountry !== "all" && ` in ${capitalizeCountry(selectedCountry)}`}
          {selectedCountry !== "all" && selectedCategory !== "All" && ` (${selectedCategory})`}
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((destination) => (
          <div 
            key={destination.id} 
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 w-full group">
              <Image 
                src={destination.image || "/api/placeholder/600/400"} 
                alt={destination.name}
                fill
                className="object-cover"
              />
            
              {selectedCountry === "all" && (
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    {capitalizeCountry(destination.country)}
                  </span>
                </div>
              )}
              
             
              {selectedCountry !== "all" && (
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {destination.category}
                  </span>
                </div>
              )}
              
           
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-2xl font-bold text-white">{destination.name}</h3>
              </div>
              
            
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handleDestinationSelect(destination)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  EXPLORE
                </button>
              </div>
              
            
              <div 
                className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all cursor-pointer"
                onClick={() => handleDestinationSelect(destination)}
              ></div>
            </div>
          </div>
        ))}
      </div>

      
      {filteredDestinations.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">
            No destinations found for the selected filters.
          </p>
          <button 
            onClick={() => {
              setSelectedCountry("all");
              setSelectedCategory("All");
            }}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>

  
    {selectedDestination && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative h-72 w-full">
            <Image 
              src={selectedDestination.image || "/api/placeholder/1200/600"} 
              alt={selectedDestination.name}
              fill
              className="object-cover"
            />
            <button 
              onClick={closeDetails}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-3xl font-bold text-orange-500 mb-2">{selectedDestination.name}</h2>
                <div className="flex gap-2">
                  <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                    {capitalizeCountry(selectedDestination.country)}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {selectedDestination.category}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed font-sans text-base">
              {selectedDestination.fullDescription}
            </p>
            <div className="flex justify-between items-center">
              <button 
                onClick={closeDetails}
                className="text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
              <Link 
                href={`/destinations/${selectedDestination.id}`}
                className='bg-blue-950 text-white px-6 py-2 rounded-3xl hover:bg-orange-400 transition font-sans tracking-widest uppercase text-sm'>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}