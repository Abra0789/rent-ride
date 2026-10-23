import { useEffect, useState } from "react";
import { useCars } from "../api/hooks";
import FilterBar from "../components/FilterBar";
import CarList from "../components/CarList";

function Fleet() {
  const { data: cars = [], isLoading, isError } = useCars();
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Fleet | RentRide";

    return () => {
      document.title = previousTitle;
    };
  }, []);

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
      <FilterBar
        types={types}
        selectedType={selectedType}
        onSelect={setSelectedType}
      />
      <p>
        Showing: {selectedType} ({visibleCars.length} cars)
      </p>
      <CarList cars={visibleCars} />
    </section>
  );
}

export default Fleet;
