"use client";
import { useState } from "react";

export default function Home() {
  const [count] = useState(0);
  return (
    <div>
      <OtherComponent count={count} />
    </div>
  );
}

const OtherComponent = ({ count }: { count: number }) => {
  return <div>{count}</div>;
};
