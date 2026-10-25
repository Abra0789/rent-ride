import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Car } from "../types";

interface BookingState {
  selectedCar: Car | null;
  pickupDate: string | null;
  returnDate: string | null;
  insurance: boolean;
}

const initialState: BookingState = {
  selectedCar: null,
  pickupDate: null,
  returnDate: null,
  insurance: true,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectCar(state, action: PayloadAction<Car>) {
      state.selectedCar = action.payload;
    },
    setDates(
      state,
      action: PayloadAction<{
        pickupDate: string | null;
        returnDate: string | null;
      }>
    ) {
      state.pickupDate = action.payload.pickupDate;
      state.returnDate = action.payload.returnDate;
    },
    toggleInsurance(state) {
      state.insurance = !state.insurance;
    },
    resetBooking() {
      return initialState;
    },
  },
});

export const { selectCar, setDates, toggleInsurance, resetBooking } =
  bookingSlice.actions;
export default bookingSlice.reducer;