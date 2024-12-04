import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
         <div className="relative z-50">
        <CustomCursor />
      </div>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
