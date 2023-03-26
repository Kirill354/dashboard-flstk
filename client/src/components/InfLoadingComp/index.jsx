import React from 'react';
import { Circles } from 'react-loader-spinner';

const InfLoadingComp = () => {
   return (
      <div className="h-full flex items-center justify-center">
         <Circles
            height="60"
            width="60"
            color="#325FE5"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass="items-center justify-center mt-3"
            visible={true}
         />
      </div>
   );
};

export default InfLoadingComp;
