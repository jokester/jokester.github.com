import React from 'react';
import { Header } from './header';

export const Layout: React.FC = (props) => {
  return (
    <div className="bg-black text-yellow-100">
      <div className="min-h-screen container mx-auto">
        <Header />
        <div className="p-2">{props.children}</div>
      </div>
    </div>
  );
};
