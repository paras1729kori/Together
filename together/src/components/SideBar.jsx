import React from "react";

const SideBar = () => {
  return (
    <div className="hidden md:hidden fixed top-0 left-0 z-40 w-64 h-screen bg-slate-400 transition-transform -translate-x-sm sm:transition-x-0">
      <div className="h-full px-3 overflow-y-auto bg-gray-50">
        Sidebar Content
      </div>
    </div>
  );
};

export default SideBar;
