"use client";

import { useCounterStore } from "@/app/zEx1/store";
import { useEffect } from "react";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log(count);
};

const resetCount = () => useCounterStore.setState({ count: 0 });

export default function Home() {
  const count = useCounterStore((state) => state.count);
  useEffect(() => {
    logCount();
  }, [count]);

  return <OtherComponent />;
}

const OtherComponent = () => {
  const { count, increment, decrement, incrementA } = useCounterStore();
  return (
    <div className="flex flex-col items-center">
      <h1> {count} </h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => incrementA()}>Increment Async</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => resetCount()}>Reset Count</button>
    </div>
  );
};
