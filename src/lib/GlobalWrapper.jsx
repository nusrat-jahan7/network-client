"use client";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "react-hot-toast";

const GlobalWrapper = ({ children }) => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default GlobalWrapper;
