import type { Car } from "../types";

interface CarCardProps {
  car: Car;
}

function CarCard({ car }: CarCardProps) {
  return (
    <article>
      <h3>{car.name}</h3>
      <p>
        {car.seats} Seats, {car.transmission}, {car.fuel}
      </p>
      <p>৳{car.pricePerDay} per day</p>
    </article>
  );
}

export default CarCard;
