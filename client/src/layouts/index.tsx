import React from 'react';
import { FC, useEffect, useState, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// import apiReq from "@/services/api";

import { Header } from './Header';
import { Sidebar } from './Sidebar';
// import { Sidebar } from './Sidebar';

const MainLayout: FC = () => {
   const [isWkLoading, setIsWkLoading] = useState(true);

   //   useEffect(() => {
   //     apiReq.auth
   //       .getUser()
   //       .then((res) => {
   //         dispatch(signOut(res.data));
   //       })
   //       .catch(() => {
   //         setIsWkLoading(false);
   //         navigate("/login");
   //       });

   //     apiReq.workspace
   //       .getAll()
   //       .then((res) => {
   //         if (!res.data.length) {
   //           apiReq.workspace
   //             .create({
   //               name: "Workspace 1",
   //             })
   //             .then((res) => {});
   //         } else {
   //           dispatch(getWorkspaces(res.data));
   //         }
   //       })
   //       .catch((err) => {
   //         console.log(err);
   //       })
   //       .finally(() => setIsWkLoading(false));
   //   }, []);

   return (
      <div>
         <Header />
         <div className="flex overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
            <Sidebar />
            <main className="grow min-h-screen" style={{ width: 'calc(100% - 240px)' }}>
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default MainLayout;
