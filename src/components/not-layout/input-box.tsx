import React from "react";
import { Button } from "../ui/button";

export default function InputBox() {
  return (
    <section className="bg-slate-900 max-w-xl mx-auto py-5 my-5">
      <h1 className="text-center py-4">Calculate Your Investment</h1>
      <form className="flex flex-wrap gap-10 px-10">
        <label className="flex flex-col">
          Initial Investment
          <input
            type="number"
            placeholder="Enter your initial investment amount"
          />
        </label>
        <label className="flex flex-col">
          Monthly Investment
          <input
            type="number"
            placeholder="Enter your monthly investment amount"
          />
        </label>
        <label className="flex flex-col">
          Investment Period (Years)
          <input type="number" placeholder="Enter investment period in years" />
        </label>
        <label className="flex flex-col">
          Estimated Rate of Return (%)
          <input type="number" placeholder="Enter estimated rate of return" />
        </label>
        <Button>Calculate</Button>
      </form>
    </section>
  );
}
