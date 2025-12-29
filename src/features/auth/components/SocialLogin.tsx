const SocialLogin: React.FC = () => {
  return (
    <div className="mt-8">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500">veya</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <SocialButton icon="https://www.google.com/favicon.ico" alt="Google" text="Google" />
        <SocialButton icon="https://www.facebook.com/favicon.ico" alt="Facebook" text="Facebook" />
      </div>
    </div>
  );
};

interface SocialButtonProps {
  icon: string;
  alt: string;
  text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, alt, text }) => {
  return (
    <button className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition">
      <img src={icon} alt={alt} className="w-5 h-5" />
      <span className="font-semibold text-gray-700">{text}</span>
    </button>
  );
};

export default SocialLogin;
