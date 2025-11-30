"use client";

import Link from "next/link";
import { Fuel, Gauge, Users, DollarSign } from "lucide-react";

const carsData = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    price: 300,
    fuel: "Diesel",
    seats: 7,
    speed: "180 km/h",
    image: "https://images.pexels.com/photos/18029607/pexels-photo-18029607.jpeg",
  },
  {
    id: 2,
    name: "Mazda CX-5",
    price: 180,
    fuel: "Petrol",
    seats: 5,
    speed: "200 km/h",
    image: "https://images.pexels.com/photos/26224702/pexels-photo-26224702.jpeg",
  },
  {
    id: 3,
    name: "Mercedes G Wagon",
    price: 200,
    fuel: "Petrol",
    seats: 5,
    speed: "220 km/h",
    image: "https://images.pexels.com/photos/8622791/pexels-photo-8622791.jpeg",
  },
  {
    id: 4,
    name: "Toyota Land Cruiser",
    price: 300,
    fuel: "Diesel",
    seats: 7,
    speed: "180 km/h",
    image: "https://images.pexels.com/photos/18029607/pexels-photo-18029607.jpeg",
  },
  {
    id: 5,
    name: "Mazda CX-5",
    price: 180,
    fuel: "Petrol",
    seats: 5,
    speed: "200 km/h",
    image: "https://images.pexels.com/photos/26224702/pexels-photo-26224702.jpeg",
  },
  {
    id: 6,
    name: "Mercedes G Wagon",
    price: 2000,
    fuel: "Petrol",
    seats: 5,
    speed: "220 km/h",
    image: "https://images.pexels.com/photos/8622791/pexels-photo-8622791.jpeg",
  },
  {
    id: 7,
    name: "Toyota Land Cruiser",
    price: 300,
    fuel: "Diesel",
    seats: 7,
    speed: "180 km/h",
    image: "https://images.pexels.com/photos/18029607/pexels-photo-18029607.jpeg",
  },
  {
    id: 8,
    name: "Mazda CX-5",
    price: 180,
    fuel: "Petrol",
    seats: 5,
    speed: "200 km/h",
    image: "https://images.pexels.com/photos/26224702/pexels-photo-26224702.jpeg",
  },
  {
    id: 9,
    name: "Mercedes G Wagon",
    price: 200,
    fuel: "Petrol",
    seats: 5,
    speed: "220 km/h",
    image: "https://images.pexels.com/photos/8622791/pexels-photo-8622791.jpeg",
  },
];

export default function CarsListPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0F9E99] to-[#062825] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-10 text-center">Available Cars</h1>

        <div className="grid md:grid-cols-3 gap-10">
          {carsData.map((car) => (
            <div
              key={car.id}
              className="bg-white/10 rounded-2xl p-5 border border-white/20 backdrop-blur-lg shadow-xl"
            >
              <img
                src={car.image}
                alt={car.name}
                className="rounded-xl h-40 w-full object-cover mb-4"
              />

              <h2 className="text-xl font-bold mb-2">{car.name}</h2>

              <div className="text-white/80 space-y-2 text-sm mb-4">
                <p className="flex items-center gap-2 font-bold"><Fuel size={18} /> {car.fuel}</p>
                <p className="flex items-center gap-2 font-bold"><Users size={18} /> {car.seats} Seats</p>
                <p className="flex items-center gap-2 font-bold"><Gauge size={18} /> {car.speed}</p>
                <p className="flex items-center gap-2 font-bold"><DollarSign size={18} /> ${car.price}/day</p>
              </div>

              <Link
                href={`/cars/${car.id}`}
                className="block text-center bg-[#EFE9E0] text-[#062825] py-2 rounded-xl font-semibold hover:bg-white transition"
              >
                View Car Details
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
