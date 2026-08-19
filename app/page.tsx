export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Karibu UDOM Forum
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Jukwaa la majadiliano kwa wanafunzi wa Chuo Kikuu cha Dodoma.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Anzisha Mjadala
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Tazama Mada
        </button>
      </div>
    </main>
  );
}