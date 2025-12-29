import { Sparkles } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <>
      <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
        <Sparkles className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-4">Yeni Maceralara Hazır mısın?</h3>
        <p className="text-xl mb-8 opacity-90">Binlerce kişi zaten yeni arkadaşlıklar kuruyor!</p>
        <button className="px-8 py-4 bg-white text-purple-600 text-lg font-semibold rounded-xl hover:shadow-2xl transition transform hover:scale-105">
          Ücretsiz Hesap Aç
        </button>
      </div>
    </>
  );
};
export default CtaSection;
