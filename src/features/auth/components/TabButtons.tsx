interface TabButtonsProps {
  isLogin: boolean;
  onTabChange: (isLogin: boolean) => void;
}

const TabButtons: React.FC<TabButtonsProps> = ({ isLogin, onTabChange }) => {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => onTabChange(true)}
        className={`flex-1 py-3 rounded-xl font-semibold transition ${
          isLogin
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Giriş Yap
      </button>
      <button
        onClick={() => onTabChange(false)}
        className={`flex-1 py-3 rounded-xl font-semibold transition ${
          !isLogin
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Kayıt Ol
      </button>
    </div>
  );
};

export default TabButtons;
