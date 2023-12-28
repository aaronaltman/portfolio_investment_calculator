import InputBox from "@/components/not-layout/input-box";
import OutputTable from "@/components/not-layout/output-table";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Image src="/logo.png" width={200} height={200} alt="logo" />
      <h1 className="text-center text-5xl font-bold my-5">
        Investment Calculator
      </h1>
      <InputBox />
      <OutputTable />
    </main>
  );
}
