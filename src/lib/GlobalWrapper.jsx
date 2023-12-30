"use client";
import AuthProvider from "@/context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const GlobalWrapper = ({ children }) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" reverseOrder={false} />
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </div>
  );
};

export default GlobalWrapper;
