import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <Image src="/logo.png" width={200} height={200} alt="logo" />
      <h1 className="text-center text-5xl font-bold my-5">
        Investment Calculator
      </h1>
    </header>
  );
}
