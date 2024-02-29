import React from 'react';

interface EmployeeProps {
  name: string;
  age: number;
  country: string;
  children?: React.ReactNode; // 👈️ for demo purposes
}

function Employee({name, age, country}: EmployeeProps) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{country}</h2>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Employee name="Alice" age={29} country="Austria" />
    </div>
  );
}
