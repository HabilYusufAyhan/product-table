import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';

import BackButton from '../components/BackButton';
import Branding from '../components/Branding';
import FormHeader from '../components/FormHeader';
import Input from '../components/Input';
import RememberMe from '../components/RememberMe';
import SocialLogin from '../components/SocialLogin';
import SubmitButton from '../components/SubmitButton';
import TabButtons from '../components/TabButtons';
import TermsCheckbox from '../components/TermsCheckbox';
import { useAuthStore } from '../store/useAuthStore';

function AuthPage() {
  const { isLogin, setIsLogin, formData, setFormData, showPassword, setShowPassword } =
    useAuthStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      console.log('Login:', { email: formData.email, password: formData.password });
      alert('Giriş başarılı! (Demo)');
    } else {
      console.log('Signup:', formData);
      alert('Kayıt başarılı! (Demo)');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-6">
      <BackButton />

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <Branding isLogin={isLogin} />

        <div className="p-12 md:w-3/5">
          <div className="max-w-md mx-auto">
            <TabButtons isLogin={isLogin} onTabChange={setIsLogin} />
            <FormHeader isLogin={isLogin} />

            <div className="space-y-5">
              {!isLogin && (
                <Input
                  label="Ad Soyad"
                  type="text"
                  name="name"
                  value={formData.name}
                  icon={
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  }
                  onChange={handleInputChange}
                  placeholder="Adınız ve soyadınız"
                />
              )}

              <Input
                label="E-posta"
                type="email"
                name="email"
                value={formData.email}
                icon={
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                }
                onChange={handleInputChange}
                placeholder="ornek@email.com"
              />

              <Input
                label="Şifre"
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                icon={
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                }
                onChange={handleInputChange}
                placeholder="••••••••"
                button={{
                  type: 'button',
                  onClick: () => setShowPassword(!showPassword),
                  element: showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )
                }}
              />

              {!isLogin && (
                <Input
                  label="Şifre Tekrar"
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword || ''}
                  icon={
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  }
                  onChange={handleInputChange}
                  placeholder="••••••••"
                />
              )}

              {isLogin && <RememberMe />}
              {!isLogin && <TermsCheckbox />}

              <SubmitButton isLogin={isLogin} onClick={handleSubmit} />
            </div>

            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
