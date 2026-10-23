import type { Car } from "../types";

interface CarCardProps {
  car: Car;
}

function CarCard({ car }: CarCardProps) {
  return (
    <article className="car-card">
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
