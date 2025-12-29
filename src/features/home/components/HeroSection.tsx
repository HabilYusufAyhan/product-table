const HeroSection: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Yeni Arkadaşlıklar
          <br />
          <span className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Bir Tık Uzağında
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          ConnectMe ile ortak ilgi alanlarına sahip insanlarla tanış, yeni dostluklar kur ve sosyal
          çevreni genişlet.
        </p>
        <button className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white text-lg rounded-xl hover:shadow-xl transition transform hover:scale-105">
          Hemen Başla
        </button>
      </div>
    </main>
  );
};
export default HeroSection;
