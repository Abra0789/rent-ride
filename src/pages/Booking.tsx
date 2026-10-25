import { useState } from "react";
import type { ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toggle from "../components/Toggle";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetBooking, setDays, toggleInsurance } from "../store/bookingSlice";

const INSURANCE_PER_DAY = 500;

function Booking() {
  const { selectedCar, days, insurance } = useAppSelector(
    (state) => state.booking,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [daysInput, setDaysInput] = useState(String(days));

  const handleDaysChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDaysInput(value);

    const number = Number(value);
    if (value !== "" && Number.isInteger(number) && number >= 1) {
      dispatch(setDays(number));
    }
  };

  const handleDaysBlur = () => {
    setDaysInput(String(days));
  };

  if (!selectedCar) {
    return (
      <section>
        <h1>Booking</h1>
        <p>Ekhono kono car select kora hoyni.</p>
        <Link to="/fleet" className="btn btn-accent">
          See our fleet
        </Link>
      </section>
    );
  }

  const rentCost = selectedCar.pricePerDay * days;
  const insuranceCost = insurance ? INSURANCE_PER_DAY * days : 0;
  const total = rentCost + insuranceCost;

  const handleCancel = () => {
    dispatch(resetBooking());
    navigate("/fleet");
  };

  return (
    <section className="booking">
      <h1>Your Booking</h1>

      <div className="booking-card">
        <h3>{selectedCar.name}</h3>
        <p className="car-meta">
          {selectedCar.type} · {selectedCar.seats} Seats ·{" "}
          {selectedCar.transmission} · {selectedCar.fuel}
        </p>

        <label className="field">
          <span>Koto din rent nibe</span>
          <input
            type="number"
            min={1}
            value={daysInput}
            onChange={handleDaysChange}
            onBlur={handleDaysBlur}
          />
        </label>

        <Toggle
          label="Insurance"
          checked={insurance}
          onChange={() => dispatch(toggleInsurance())}
        />

        <div className="summary">
          <div>
            <span>Rent ({days} din)</span>
            <span>৳{rentCost}</span>
          </div>
          <div>
            <span>Insurance</span>
            <span>৳{insuranceCost}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>৳{total}</span>
          </div>
        </div>

        <button className="btn btn-accent" onClick={handleCancel}>
          Cancel booking
        </button>
      </div>
    </section>
  );
}

export default Booking;
