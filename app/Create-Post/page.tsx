import Link from 'next/link';

export default function CreatePost() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h1 className="text-2xl font-bold text-blue-500 mb-6">Anzisha Mjadala Mpya</h1>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Kichwa cha Mada</label>
            <input type="text" placeholder="Ingiza kichwa..." className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-300">Maelezo</label>
            <textarea rows={4} placeholder="Andika maelezo..." className="w-full p-2.5 bg-gray-800 border border-gray-700 rounded-md text-white" />
          </div>
          <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-md">
            Chapisha Mjadala
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">← Rudi Nyumbani</Link>
        </div>
      </div>
    </div>
  );
}