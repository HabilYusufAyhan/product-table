const HowItWorks: React.FC = () => {
  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h3>
          <p className="text-gray-600 text-lg">Üç basit adımda yeni arkadaşlıklara başla</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Profil Oluştur</h4>
            <p className="text-gray-600">İlgi alanlarını, hobilerinı ve kişiliğini paylaş</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Eşleş</h4>
            <p className="text-gray-600">Sana uygun insanları keşfet ve bağlantı kur</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Tanış</h4>
            <p className="text-gray-600">Sohbet et, etkinliklere katıl ve arkadaşlıklar kur</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HowItWorks;
