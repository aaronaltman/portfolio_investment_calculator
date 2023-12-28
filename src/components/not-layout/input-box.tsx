"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { on } from "events";

type HandleInitialProps = React.ChangeEvent<HTMLInputElement>;

interface InputBoxProps {
  initialInvestment: string;
  onInitialInvestmentChange: (event: HandleInitialProps) => void;
  monthlyInvestment: string;
  onMonthlyInvestmentChange: (event: HandleInitialProps) => void;
  investmentPeriod: string;
  onInvestmentPeriodChange: (event: HandleInitialProps) => void;
  estimatedRateOfReturn: string;
  onEstimatedRateOfReturnChange: (event: HandleInitialProps) => void;
}

export default function InputBox({
  initialInvestment,
  onInitialInvestmentChange,
  monthlyInvestment,
  onMonthlyInvestmentChange,
  investmentPeriod,
  onInvestmentPeriodChange,
  estimatedRateOfReturn,
  onEstimatedRateOfReturnChange,
}: InputBoxProps) {
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
            onChange={onInitialInvestmentChange}
            value={initialInvestment}
          />
        </label>
        <label className="flex flex-col min-w-[200px] text-white">
          Monthly Investment
          <input
            type="number"
            placeholder="Enter your monthly investment amount"
            className="mt-2 p-3 rounded border-none bg-slate-700 text-white placeholder-gray-300"
            onChange={onMonthlyInvestmentChange}
            value={monthlyInvestment}
          />
        </label>
        <label className="flex flex-col min-w-[200px] text-white">
          Investment Period (Years)
          <input
            type="number"
            placeholder="Enter investment period in years"
            className="mt-2 p-3 rounded border-none bg-slate-700 text-white placeholder-gray-300"
            onChange={onInvestmentPeriodChange}
            value={investmentPeriod}
          />
        </label>
        <label className="flex flex-col min-w-[200px] text-white">
          Estimated Rate of Return (%)
          <input
            type="number"
            placeholder="Enter estimated rate of return"
            className="mt-2 p-3 rounded border-none bg-slate-700 text-white placeholder-gray-300"
            onChange={onEstimatedRateOfReturnChange}
            value={estimatedRateOfReturn}
          />
        </label>
      </form>
    </section>
  );
}
