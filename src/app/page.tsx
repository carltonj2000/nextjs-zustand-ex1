import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Link href="/usEx1">useStateEx1</Link>
      <Link href="/zEx1">Zustand Ex1</Link>
    </main>
  );
}
