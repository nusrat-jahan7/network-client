"use client";
import AuthProvider from "@/context/AuthProvider";

const GlobalWrapper = ({ children }) => {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default GlobalWrapper;
