interface FilterBarProps {
  types: string[];
  selectedType: string;
  onSelect: (type: string) => void;
}

function FilterBar({ types, selectedType, onSelect }: FilterBarProps) {
  return (
    <div className="filter-bar">
      {types.map((type) => (
        <button
          key={type}
          className={type === selectedType ? "active" : ""}
          onClick={() => onSelect(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
