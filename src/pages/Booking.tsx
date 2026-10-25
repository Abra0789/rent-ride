import { Link, useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import type { DateRange } from "react-day-picker";
import "react-day-picker/style.css";
import Toggle from "../components/Toggle";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetBooking, setDates, toggleInsurance } from "../store/bookingSlice";
import { countDays, formatDate, parseISODate, toISODate } from "../utils/dates";

const INSURANCE_PER_DAY = 500;

function Booking() {
  const { selectedCar, pickupDate, returnDate, insurance } = useAppSelector(
    (state) => state.booking
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedRange: DateRange | undefined = pickupDate
    ? {
        from: parseISODate(pickupDate),
        to: returnDate ? parseISODate(returnDate) : undefined,
      }
    : undefined;

  const handleSelect = (range: DateRange | undefined) => {
    dispatch(
      setDates({
        pickupDate: range?.from ? toISODate(range.from) : null,
        returnDate: range?.to ? toISODate(range.to) : null,
      })
    );
  };

  const days = countDays(pickupDate, returnDate);
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

        <div className="calendar">
          <p className="calendar-title">Pickup ar return date select koro</p>
          <DayPicker
            mode="range"
            selected={selectedRange}
            onSelect={handleSelect}
            disabled={{ before: today }}
          />
        </div>

        {pickupDate ? (
          <p className="date-info">
            Pickup: <strong>{formatDate(pickupDate)}</strong>
            {" · "}
            Return:{" "}
            <strong>{returnDate ? formatDate(returnDate) : "select koro"}</strong>
          </p>
        ) : (
          <p className="date-info">Calendar theke pickup date e click koro.</p>
        )}

        <Toggle
          label="Insurance"
          checked={insurance}
          onChange={() => dispatch(toggleInsurance())}
        />

        {days > 0 && (
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
        )}

        <button className="btn btn-accent" onClick={handleCancel}>
          Cancel booking
        </button>
      </div>
    </section>
  );
}

export default Booking;