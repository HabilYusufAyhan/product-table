interface SubmitButtonProps {
  isLogin: boolean;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLogin, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-xl transition transform hover:scale-105"
    >
      {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
    </button>
  );
};

export default SubmitButton;
