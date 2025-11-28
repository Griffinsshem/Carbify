"use client";

import { useParams } from "next/navigation";
import { Car, Fuel, Gauge, Users, DollarSign } from "lucide-react";
import Link from "next/link";

const carsData = [
  {
    id: 1,
    name: "Toyota Land Cruiser",
    price: 120,
    fuel: "Diesel",
    seats: 7,
    speed: "180 km/h",
    image: "/car1.png",
  },
  {
    id: 2,
    name: "Mazda CX-5",
    price: 70,
    fuel: "Petrol",
    seats: 5,
    speed: "200 km/h",
    image: "/car2.png",
  },
  {
    id: 3,
    name: "Mercedes G Wagon",
    price: 200,
    fuel: "Petrol",
    seats: 5,
    speed: "220 km/h",
    image: "/car3.png",
  },
];

export default function CarDetailsPage() {
  const { id } = useParams();
  const car = carsData.find((c) => c.id == id);

  if (!car) {
    return (
      <div className="text-center py-20 text-xl text-red-400">
        Car not found.
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-[#0F9E99] to-[#062825] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Car Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
          <img src={car.image} alt={car.name} className="w-full object-cover" />
        </div>

        {/* Car Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            Experience premium comfort and power with the {car.name}. Designed for
            both luxury and performance, perfect for road trips, business rides,
            and special events.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/20">
              <Fuel /> <span>{car.fuel}</span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/20">
              <Users /> <span>{car.seats} Seats</span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/20">
              <Gauge /> <span>{car.speed}</span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/20">
              <DollarSign /> <span>${car.price}/day</span>
            </div>
          </div>

          <Link
            href={`/booking/${car.id}`}
            className="inline-block text-lg font-semibold px-6 py-3 bg-[#EFE9E0] text-[#062825] rounded-xl hover:bg-white transition"
          >
            Book This Car
          </Link>
        </div>

      </div>
    </section>
  );
}
