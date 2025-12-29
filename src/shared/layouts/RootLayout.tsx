import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-blue-50">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
