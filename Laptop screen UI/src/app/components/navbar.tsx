import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { TruckIcon } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="h-[72px] flex items-center px-20 border-b bg-white">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <TruckIcon className="w-7 h-7 text-orange-500" />
          <span className="font-bold text-xl">TowLink</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link to="/" className="text-base font-semibold hover:text-orange-500 transition-colors">
            Home
          </Link>
          <a href="#how-it-works" className="text-base font-semibold hover:text-orange-500 transition-colors">
            How It Works
          </a>
          <Link to="/plans" className="text-base font-semibold hover:text-orange-500 transition-colors">
            Plans
          </Link>
          <a href="#contact" className="text-base font-semibold hover:text-orange-500 transition-colors">
            Contact
          </a>
        </div>

        <Button className="h-10 px-5 rounded-lg">
          Login / Register
        </Button>
      </div>
    </nav>
  );
}