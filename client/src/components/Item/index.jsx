import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ name, to }) => {
   return (
      <Link to={`/item/${to}`} className="text-gray-800 cursor-pointer select-none">
         <div className="border rounded-lg bg-gray-100 transition hover:text-blue-500 hover:bg-gray-200">
            <div className="flex items-center justify-center p-2">{name}</div>
         </div>
      </Link>
   );
};

export default Item;
