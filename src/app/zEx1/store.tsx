"use client";
import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementA: () => Promise<void>;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((s) => ({ count: s.count + 1 }));
  },
  incrementA: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((s) => ({ count: s.count + 1 }));
  },
  decrement: () => {
    set((s) => ({ count: s.count - 1 }));
  },
}));
