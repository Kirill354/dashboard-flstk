import React from 'react';
import ItemsList from '../../components/ItemsList';

// import Modal from "@components/Modal";
// import {
//   Search,
//   ContextMenu,
//   useContextMenu,
//   WorkspaceList,
//   SettingsList,
// } from "@/features/sidebar";
// import {
//   SvgDoubleIn,
//   SvgDoubleOut,
//   SvgPlusCircle,
//   SvgGoToMyWorkspaces,
// } from "@assets/svg/sidebar";

const SidebarView = () => {
   return (
      <div
         className="h-screen w-[260px] border-r border-solid border-gray-300 overflow-y-auto overflow-x-hidden"
         style={{ height: 'calc(100vh - 52px)' }}>
         <div className="w-full p-3">
            <nav className="w-full text-[16px] font-medium">
               <ItemsList />
            </nav>
         </div>
      </div>
   );
};

export default SidebarView;
