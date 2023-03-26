import React, { useEffect } from 'react';
import Item from '../Item';

const defaultArray = [
   {
      name: 'Table1',
      to: '1',
   },
   {
      name: 'Table2-no',
      to: 'inf-loading',
   },
];

const ItemsList = () => {
   // useEffect(() => {
   //    return () => {};
   // }, []);

   return (
      <div className="flex flex-col gap-5">
         {defaultArray.map((item, index) => (
            <Item name={item.name} to={item.to} key={index} />
         ))}
      </div>
   );
};

export default ItemsList;
