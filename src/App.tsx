import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthPage from './features/auth/routes/AuthPage';
import HomePage from './features/home/routes/HomePage';
import RootLayout from './shared/layouts/RootLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
