import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts';
import Main from '../pages/Main';
import Table from '../pages/Table';

const AppRouting = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route index element={<Main />} />

               <Route path="item/:id" element={<Table />} />
            </Route>
            {/* page not found */}
            <Route path="*" element={<div>Страница не найдена!</div>} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouting;
