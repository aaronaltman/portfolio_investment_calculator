import React from "react";

// Define your column headers
const columns = ["Year", "Name", "Age", "Job", "Location"];

// Sample data: Array of objects, each object is a row in the table
const data = [
  { id: 1, name: "Alice", age: 24, job: "Engineer", location: "New York" },
  { id: 2, name: "Bob", age: 30, job: "Designer", location: "San Francisco" },
  { id: 3, name: "Tom", age: 30, job: "Designer", location: "San Francisco" },
  { id: 4, name: "Jen", age: 30, job: "Designer", location: "San Francisco" },
  // ... more data
];

export default function DataTable() {
  return (
    <div>
      <section>
        <table>
          {/* Table Head */}
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.job}</td>
                <td>{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
