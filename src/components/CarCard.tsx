import { useState } from "react";
import type { Car } from "../types";

interface CarCardProps {
  car: Car;
}

const PLACEHOLDER = "/images/cars/placeholder.jpg";

function toSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function CarCard({ car }: CarCardProps) {
  const sources = [
    `/images/cars/${toSlug(car.name)}.jpg`,
    `/images/cars/${toSlug(car.type)}.jpg`,
    PLACEHOLDER,
  ];
  const [index, setIndex] = useState(0);

  const handleError = () => {
    setIndex((prev) => Math.min(prev + 1, sources.length - 1));
  };

  return (
    <article className="car-card">
      <img
        className="car-image"
        src={sources[index]}
        alt={car.name}
        loading="lazy"
        onError={handleError}
      />
      <span className="car-type">{car.type}</span>
      <h3>{car.name}</h3>
      <p className="car-meta">
        {car.seats} Seats · {car.transmission} · {car.fuel}
      </p>
      <p className="car-price">
        ৳{car.pricePerDay} <small>/ day</small>
      </p>
    </article>
  );
}

export default CarCard;
