import React from 'react';

const HeaderView = () => {
   return (
      <header className="max-w-full bg-blue-700 h-[52px] flex items-center text-white">
         <div className="ml-3.5 p-2.5 cursor-pointer">LOGO</div>
         <nav className="flex flex-row items-center p-0 gap-3 h-9 text-sm ml-auto">
            <div className="flex items-center ml-24 gap-7">MENU</div>
            <div className="flex items-center ml-24 gap-7">MENU</div>
            <div className="flex items-center ml-24 gap-7">MENU</div>
         </nav>
      </header>
   );
};

export default HeaderView;
