"use client";

import React from "react";
import { Button } from "../ui/button";

export default function InputBox() {
  const [initialInvestment, setInitialInvestment] = React.useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = React.useState(0);
  const [investmentPeriod, setInvestmentPeriod] = React.useState(0);
  const [estimatedRateOfReturn, setEstimatedRateOfReturn] = React.useState(0);

  return (
    <section className="bg-slate-900 max-w-2xl mx-auto py-8 my-6 rounded-md shadow-md">
      <h1 className="text-center text-white text-xl font-semibold py-4">
        Calculate Your Investment
      </h1>
      <form className="flex flex-wrap gap-6 px-10 justify-center">
        <label className="flex flex-col min-w-[200px] text-white">
          Initial Investment
          <input
            type="number"
            placeholder="Enter your initial investment amount"
            className="mt-2 p-3 rounded border-none bg-slate-700 text-white placeholder-gray-300"
            onChange={(e) => setInitialInvestment(e.target.value)}
          />
        </label>
        <label className="flex flex-col min-w-[200px] text-white">
          Monthly Investment
          <input
            type="number"
            placeholder="Enter your monthly investment amount"
            className="mt-2 p-3 rounded border-none bg-slate-700 text-white placeholder-gray-300"
          />
        </label>
        <label className="flex flex-col min-w-[200px] text-white">
          Investment Period (Years)
          <input
            type="number"
            placeholder="Enter investment period in years"
            className="mt-2 p-3 rounded border-none bg-slate-700 text-white placeholder-gray-300"
          />
        </label>
        <label className="flex flex-col min-w-[200px] text-white">
          Estimated Rate of Return (%)
          <input
            type="number"
            placeholder="Enter estimated rate of return"
            className="mt-2 p-3 rounded border-none bg-slate-700 text-white placeholder-gray-300"
          />
        </label>
        <div className="flex w-full bg-white justify-center">
          <Button variant={"secondary"}>Calculate</Button>
        </div>
      </form>
    </section>
  );
}
