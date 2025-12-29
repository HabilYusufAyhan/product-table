interface FormHeaderProps {
  isLogin: boolean;
}

const FormHeader: React.FC<FormHeaderProps> = ({ isLogin }) => {
  return (
    <>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {isLogin ? 'Hesabına Giriş Yap' : 'Yeni Hesap Oluştur'}
      </h3>
      <p className="text-gray-600 mb-8">
        {isLogin ? 'Bilgilerini girerek devam et' : 'Birkaç basit adımda kayıt ol'}
      </p>
    </>
  );
};

export default FormHeader;
