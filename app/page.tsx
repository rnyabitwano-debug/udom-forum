import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-950 text-white">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Karibu UDOM Forum</h1>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-xl">
        Jukwaa la majadiliano kwa wanafunzi wa Chuo Kikuu cha Dodoma.
      </p>
      <div className="flex gap-4">
        <Link href="/create-post" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">
          Anzisha Mjadala
        </Link>
        <Link href="#" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded border border-gray-700 transition">
          Tazama Mada
        </Link>
      </div>
    </main>
  );
}