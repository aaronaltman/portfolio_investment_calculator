"use client";

import React from "react";
import InputBox from "./input-box";
import Table2 from "./table2";
import { useState } from "react";

type HandleInitialProps = React.ChangeEvent<HTMLInputElement>;

export default function InputPlusBoxTable2() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [estimatedRateOfReturn, setEstimatedRateOfReturn] = useState("");

  const handleInitialInvestmentChange = (event: HandleInitialProps) => {
    // Convert the input value to a number before setting the state
    let value = Number(event.target.value);
    if (value < 0) {
      alert("Initial investment cannot be negative");
      return;
    }
    setInitialInvestment(value.toString());
    console.log(value);
  };

  const handleMonthlyInvestmentChange = (event: HandleInitialProps) => {
    // Convert the input value to a number before setting the state
    let value = Number(event.target.value);
    if (value < 0) {
      alert("Initial investment cannot be negative");
      return;
    }
    setMonthlyInvestment(value.toString());
    console.log(value);
  };
  const handleInvestmentPeriodChange = (event: HandleInitialProps) => {
    // Convert the input value to a number before setting the state
    let value = Number(event.target.value);
    if (value < 0) {
      alert("Initial investment cannot be negative");
      return;
    }
    setInvestmentPeriod(value.toString());
    console.log(value);
  };
  const handleEstimatedRateOfReturnChange = (event: HandleInitialProps) => {
    // Convert the input value to a number before setting the state
    let value = Number(event.target.value);
    if (value < 0) {
      alert("Initial investment cannot be negative");
      return;
    }
    setEstimatedRateOfReturn(value.toString());
    console.log(value);
  };
  return (
    <main className="pb-20">
      <InputBox
        initialInvestment={initialInvestment}
        onInitialInvestmentChange={handleInitialInvestmentChange}
        monthlyInvestment={monthlyInvestment}
        onMonthlyInvestmentChange={handleMonthlyInvestmentChange}
        investmentPeriod={investmentPeriod}
        onInvestmentPeriodChange={handleInvestmentPeriodChange}
        estimatedRateOfReturn={estimatedRateOfReturn}
        onEstimatedRateOfReturnChange={handleEstimatedRateOfReturnChange}
      />
      <Table2
        initialInvestment={initialInvestment}
        monthlyInvestment={monthlyInvestment}
        investmentPeriod={investmentPeriod}
        estimatedRateOfReturn={estimatedRateOfReturn}
      />
    </main>
  );
}
