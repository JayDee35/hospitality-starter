import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto max-w-3xl p-6 space-y-6">
      <h1 className="text-3xl font-bold">Hospitality Starter</h1>
      <p className="text-neutral-700">
        Restaurants & boutique hotels — I build sites that increase direct bookings and private-event leads.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><a className="underline" href="/about">About</a></li>
        <li><a className="underline" href="/projects">Projects</a></li>
      </ul>
    </section>
  );
}

