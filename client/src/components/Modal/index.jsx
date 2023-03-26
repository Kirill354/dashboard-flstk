import { useEffect, useState, useRef } from 'react';
import { userService } from '../../services/users';

// import apiReq from '@/services/api';

const Modal = ({ handleModalClose, type, update }) => {
   // delete user data
   const deleteInputRef = useRef(null);

   // create user data
   const createUsernameInputRef = useRef(null);
   const createUserAgeInputRef = useRef(null);
   const createUserHeightInputRef = useRef(null);
   const createUserBirthDateInputRef = useRef(null);

   useEffect(() => {
      document.addEventListener('keydown', onKeydown);
      return () => document.removeEventListener('keydown', onKeydown);
   });

   const onClose = () => {
      handleModalClose();
   };

   const onKeydown = ({ key }) => {
      switch (key) {
         case 'Escape':
            onClose();
            break;
      }
   };
   const onSubmit = async (e) => {
      e.preventDefault();

      if (type === 'create') {
         if (
            !createUsernameInputRef.current.value ||
            !createUserAgeInputRef.current.value ||
            !createUserHeightInputRef.current.value ||
            !createUserBirthDateInputRef.current.value
         ) {
            return;
         }

         const data = {
            username: createUsernameInputRef.current.value,
            userage: Number(createUserAgeInputRef.current.value),
            userheight: Number(createUserHeightInputRef.current.value),
            userbirthdate: createUserBirthDateInputRef.current.value,
         };

         await userService.createUser(data);
         onClose();
         update();
      } else {
         if (!deleteInputRef.current.value) return;

         await userService.deleteUser(deleteInputRef.current.value);
         onClose();
         update();
      }
   };
   return (
      <div>
         <div
            className="fixed flex top-0 bottom-0 left-0 right-0 w-screen h-screen z-50 bg-blue-500/10 animation-appear animation-duration-300"
            onClick={onClose}>
            <div
               className="p-5 flex flex-col w-[550px]  mx-auto my-auto overflow-hidden shadow-md bg-white rounded-lg animate-slide-in animation-duration-500"
               onClick={(e) => e.stopPropagation()}>
               <div className="flex items-center justify-between pt-2 ">
                  <h3 className="font-poppins">
                     {type === 'create' ? <>Create user</> : <>Delete user</>}
                  </h3>
               </div>
               <div className="pb-2">
                  <form onSubmit={onSubmit}>
                     <div className="flex flex-nowrap pt-5">
                        {type === 'create' ? (
                           <div className="flex flex-col w-full gap-3">
                              <input
                                 ref={createUsernameInputRef}
                                 className="w-full h-9 px-3 py-1 text-gray-500 text-14a font-medium bg-white border border-gray-300 rounded-lg outline-gray-300 placeholder:font-normal"
                                 type="text"
                                 placeholder="Please, enter username here"
                              />
                              <input
                                 ref={createUserAgeInputRef}
                                 className="w-full h-9 px-3 py-1 text-gray-500 text-14a font-medium bg-white border border-gray-300 rounded-lg outline-gray-300 placeholder:font-normal"
                                 type="text"
                                 placeholder="Please, enter user age here"
                              />
                              <input
                                 ref={createUserHeightInputRef}
                                 className="w-full h-9 px-3 py-1 text-gray-500 text-14a font-medium bg-white border border-gray-300 rounded-lg outline-gray-300 placeholder:font-normal"
                                 type="text"
                                 placeholder="Please, enter user height here"
                              />
                              <input
                                 ref={createUserBirthDateInputRef}
                                 className="w-full h-9 px-3 py-1 text-gray-500 text-14a font-medium bg-white border border-gray-300 rounded-lg outline-gray-300 placeholder:font-normal"
                                 type="text"
                                 placeholder="Please, enter user birthdate here (format yyyy-mm-dd)"
                              />
                           </div>
                        ) : (
                           <input
                              ref={deleteInputRef}
                              className="w-full h-9 px-3 py-1 text-gray-500 text-14a font-medium bg-white border border-gray-300 rounded-lg outline-gray-300 placeholder:font-normal"
                              type="text"
                              placeholder="Please, enter ID user to delete"
                           />
                        )}
                     </div>
                     <div className="flex justify-between gap-6 pt-4">
                        <button
                           className="w-40 h-10 bg-[#EFF6FF] text-14a font-medium text-gray-700 rounded-lg cancel-button"
                           onClick={onClose}
                           type="button">
                           Cancel
                        </button>
                        <button
                           className={`w-40 h-10 bg-indigo-500 text-14a font-medium text-white rounded-lg disabled:bg-disabled main-button ${
                              type === 'create' ? 'bg-indigo-500' : 'bg-red-600'
                           }`}
                           type="submit">
                           {type === 'create' ? <>Create</> : <>Delete</>}
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
