"use client";

import React from "react";

interface Table2Props {
  initialInvestment: string;
  monthlyInvestment: string;
  investmentPeriod: string;
  estimatedRateOfReturn: string;
}

const Table2: React.FC<Table2Props> = ({
  initialInvestment,
  monthlyInvestment,
  investmentPeriod,
  estimatedRateOfReturn,
}) => {
  // Convert strings to numbers for calculation
  const P = Number(initialInvestment);
  const monthlyInvest = Number(monthlyInvestment);
  const years = Number(investmentPeriod);
  const rateOfReturn = Number(estimatedRateOfReturn) / 100; // Convert percentage to decimal

  // Calculate future value for each year
  const calculateFutureValue = (year: number) => {
    // Using compound interest annually for simplicity
    return P * Math.pow(1 + rateOfReturn, year) + monthlyInvest * 12 * year;
  };

  // Generate rows for each year
  const rows = Array.from({ length: years }, (_, index) => ({
    year: index + 1,
    value: calculateFutureValue(index + 1),
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row) => (
              <tr key={row.year}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.year}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${row.value.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table2;
