import Header from "@/components/not-layout/header";
import InputBox from "@/components/not-layout/input-box";
import OutputTable from "@/components/not-layout/output-table";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header />
      <InputBox />
      <OutputTable />
    </main>
  );
}
