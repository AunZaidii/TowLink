import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/navbar';
import { HomePage } from '@/app/pages/home';
import { PlansPage } from '@/app/pages/plans';
import { CheckoutPage } from '@/app/pages/checkout';
import { SuccessPage } from '@/app/pages/success';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
