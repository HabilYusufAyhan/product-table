import { Users } from 'lucide-react';

interface BrandingProps {
  isLogin: boolean;
}

const Branding: React.FC<BrandingProps> = ({ isLogin }) => {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-12 md:w-2/5 flex flex-col justify-center text-white">
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-10 h-10" />
        <h1 className="text-3xl font-bold">ConnectMe</h1>
      </div>
      <h2 className="text-3xl font-bold mb-4">
        {isLogin ? 'Tekrar Hoş Geldin!' : 'Aramıza Katıl!'}
      </h2>
      <p className="text-lg opacity-90 mb-8">
        {isLogin
          ? 'Yeni arkadaşlarınla buluşmak için giriş yap ve sohbete devam et.'
          : 'Yeni insanlarla tanış, arkadaşlıklar kur ve sosyal çevreni genişlet.'}
      </p>

      <div className="space-y-4">
        <FeatureItem emoji="✨" text="Akıllı eşleştirme algoritması" />
        <FeatureItem emoji="💬" text="Güvenli ve kolay sohbet" />
        <FeatureItem emoji="❤️" text="Gerçek ve anlamlı bağlantılar" />
      </div>
    </div>
  );
};

const FeatureItem: React.FC<{ emoji: string; text: string }> = ({ emoji, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
        <span className="text-xl">{emoji}</span>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Branding;
