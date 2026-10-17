import { useQuery } from "@tanstack/react-query";
import { fetchCars, fetchFaqs } from "./cars";

export function useCars() {
  return useQuery({ queryKey: ["cars"], queryFn: fetchCars });
}

export function useFaqs() {
  return useQuery({ queryKey: ["faqs"], queryFn: fetchFaqs });
}
