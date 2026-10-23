import type { Car } from "../types";
import CarCard from "./CarCard";

interface CarListProps {
  cars: Car[];
}

function CarList({ cars }: CarListProps) {
  if (cars.length === 0) {
    return <p>Kono car pawa jayni.</p>;
  }

  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
