import { Heart, MessageCircle, Users } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
            <Users className="w-7 h-7 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Akıllı Eşleştirme</h3>
          <p className="text-gray-600">
            Gelişmiş algoritmamız sayesinde ilgi alanlarınıza ve değerlerinize uygun insanlarla
            eşleşin.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
            <MessageCircle className="w-7 h-7 text-pink-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Güvenli Sohbet</h3>
          <p className="text-gray-600">
            Güvenli ve kolay kullanımlı mesajlaşma sistemiyle yeni arkadaşlarınızla rahatça iletişim
            kurun.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
            <Heart className="w-7 h-7 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Gerçek Bağlantılar</h3>
          <p className="text-gray-600">
            Yüzeysel değil, gerçek ve anlamlı arkadaşlıklar kurmak için tasarlandı.
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
