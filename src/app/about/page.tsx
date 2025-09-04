import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-neutral-700 mb-4">
        TODO: add your 20 years of restaurant & luxury hotel experience and how you help
        venues increase direct bookings and private-event leads.
      </p>
      <ul className="list-disc pl-6 text-neutral-700 space-y-1">
        <li>Focus: restaurants & boutique hotels</li>
        <li>Outcomes: ↑ direct bookings, ↑ event leads, ↓ no-shows</li>
        <li>Stack: Next.js + TypeScript + Tailwind</li>
      </ul>
      <Link href="/" className="underline block mt-6">← Back home</Link>
    </main>
  );
}
