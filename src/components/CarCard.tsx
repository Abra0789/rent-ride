import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Car } from "../types";
import { useAppDispatch } from "../store/hooks";
import { selectCar } from "../store/bookingSlice";

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const sources = [
    `/images/cars/${toSlug(car.name)}.jpg`,
    `/images/cars/${toSlug(car.type)}.jpg`,
    PLACEHOLDER,
  ];
  const [index, setIndex] = useState(0);

  const handleError = () => {
    setIndex((prev) => Math.min(prev + 1, sources.length - 1));
  };

  const handleBook = () => {
    dispatch(selectCar(car));
    navigate("/booking");
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
      <button className="btn btn-brand car-book" onClick={handleBook}>
        Book now
      </button>
    </article>
  );
}

export default CarCard;
