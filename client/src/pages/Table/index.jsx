import React, { useState, useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { userService } from '../../services/users';
import { postService } from '../../services/posts';

import InfLoadingComp from '../../components/InfLoadingComp';
import Modal from '../../components/Modal';

const usersColumnDefs = [
   { field: 'userid' },
   { field: 'username' },
   { field: 'userage' },
   { field: 'userheight' },
   { field: 'userbirthdate' },
];
const postsColumnDefs = [{ field: 'postid' }, { field: 'posttitle' }, { field: 'userid' }];

const Table = () => {
   // for update table
   const [forceUpdate, setForceUpdate] = useReducer((x) => x + 1, 0);

   const [modalData, setModalData] = useState({
      type: 'create',
      isOpen: false,
   });

   const location = useLocation();
   const [isLoading, setIsLoading] = useState(true);

   const [userRowData, setUserRowData] = useState(null);
   const [postRowData, setPostRowData] = useState(null);

   useEffect(() => {
      try {
         const fetchData = async () => {
            const users = await userService.getUsers();
            const posts = await postService.getPosts();
            setUserRowData(users);
            setPostRowData(posts);
         };
         fetchData();
      } catch (error) {
         console.log(error);
      } finally {
         setIsLoading(false);
      }
   }, [forceUpdate]);

   if (location.pathname.includes('inf-loading')) return <InfLoadingComp />;

   if (isLoading) return <div>Loading...</div>;

   return (
      <>
         <div className="flex gap-8 p-3">
            <button
               onClick={() => setModalData({ type: 'create', isOpen: true })}
               className="py-2 px-3 bg-blue-100 rounded-xl transition hover:bg-blue-200">
               Add
            </button>
            <button
               onClick={() => setModalData({ type: 'delete', isOpen: true })}
               className="py-2 px-3 bg-blue-100 rounded-xl transition hover:bg-blue-200">
               Delete
            </button>
         </div>

         <div className="flex gap-5 p-3">
            {userRowData && (
               <div className="ag-theme-alpine" style={{ width: 700, height: 500 }}>
                  <AgGridReact rowData={userRowData} columnDefs={usersColumnDefs}></AgGridReact>
               </div>
            )}

            {postRowData && (
               <div className="ag-theme-alpine" style={{ width: 700, height: 500 }}>
                  <AgGridReact rowData={postRowData} columnDefs={postsColumnDefs}></AgGridReact>
               </div>
            )}
         </div>

         {modalData.isOpen && (
            <Modal
               type={modalData.type}
               handleModalClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
               update={() => setForceUpdate()}
            />
         )}
      </>
   );
};

export default Table;
