import { Users } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Users className="w-8 h-8 text-purple-600" />
          <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ConnectMe
          </h1>
        </div>
        <div className="flex gap-4">
          <button className="cursor-pointer px-6 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition">
            Giriş Yap
          </button>
          <button className="cursor-pointer px-6 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition">
            Kayıt Ol
          </button>
        </div>
      </div>
    </header>
  );
}
