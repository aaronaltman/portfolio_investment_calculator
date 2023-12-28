import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-gradient-to-r from-teal-900 via-orange-900 to-cyan-900">
      <div className="h-screen max-w-3xl mx-auto bg-gradient-to-br from-lime-700/60 via-lime-700 to-lime-900 text-slate-50 z-100">
        {children}
      </div>
    </div>
  );
}
