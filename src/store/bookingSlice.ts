import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Car } from "../types";

interface BookingState {
  selectedCar: Car | null;
  days: number;
  insurance: boolean;
}

const initialState: BookingState = {
  selectedCar: null,
  days: 1,
  insurance: true,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    selectCar(state, action: PayloadAction<Car>) {
      state.selectedCar = action.payload;
    },
    setDays(state, action: PayloadAction<number>) {
      state.days = Math.max(1, action.payload);
    },
    toggleInsurance(state) {
      state.insurance = !state.insurance;
    },
    resetBooking() {
      return initialState;
    },
  },
});

export const { selectCar, setDays, toggleInsurance, resetBooking } =
  bookingSlice.actions;
export default bookingSlice.reducer;
