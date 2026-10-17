import { useState } from "react";
import { useCars } from "../api/hooks";
import CarCard from "../components/CarCard";

function Fleet() {
  const { data: cars = [], isLoading, isError } = useCars();
  const [selectedType, setSelectedType] = useState("All");

  const types = ["All", ...new Set(cars.map((car) => car.type))];

  const visibleCars =
    selectedType === "All"
      ? cars
      : cars.filter((car) => car.type === selectedType);

  if (isLoading) return <p>Loading cars...</p>;
  if (isError) return <p>Could not load cars.</p>;

  return (
    <section>
      <h1>Our Fleet</h1>

      <div>
        {types.map((type) => (
          <button key={type} onClick={() => setSelectedType(type)}>
            {type}
          </button>
        ))}
      </div>

      <p>
        Showing: {selectedType} ({visibleCars.length} cars)
      </p>

      <div>
        {visibleCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}

export default Fleet;
