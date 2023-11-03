"use client";

import { ReactNode, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";

export default function Layout({
  children,
  hasFooter = true,
}: {
  children: ReactNode;
  hasFooter?: boolean;
}) {
  return (
    <div className="flex items-center min-h-screen flex-col hide-scrollbars overflow-x-hidden">
      {children}
      {hasFooter && <Footer />}
      <Toaster position={"bottom-right"} />
    </div>
  );
}
