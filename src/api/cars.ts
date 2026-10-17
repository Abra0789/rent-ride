import carsData from "../data/cars.json";
import faqsData from "../data/faqs.json";
import type { Car, Faq } from "../types";

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchCars(): Promise<Car[]> {
  await wait(800);
  return carsData;
}

export async function fetchFaqs(): Promise<Faq[]> {
  await wait(500);
  return faqsData;
}
