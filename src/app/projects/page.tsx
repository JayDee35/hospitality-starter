import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <ul className="list-disc pl-6 space-y-2 text-neutral-700">
        <li>Hospitality Template v1 — coming soon</li>
        <li>Personal Site v1 — this site</li>
      </ul>
      {/* TODO: replace with real portfolio cards and case studies */}
      <Link href="/" className="underline block mt-6">← Back home</Link>
    </main>
  );
}
