import React from 'react';
import { Boxes, Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Boxes className="text-white h-8 w-8" />
        <Sparkles className="text-white h-4 w-4 absolute -top-1 -right-1 animate-pulse" />
      </div>
      <span className="text-white font-bold text-xl">Innovex</span>
    </div>
  );
};

export default Logo;