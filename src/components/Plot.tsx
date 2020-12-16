import React from "react";
import { Line } from "react-chartjs-2";

export const Plot = () => {
  const range = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ];

  return (
    <div>
      <Line
        data={{
          labels: range,
          datasets: [
            {
              label: "Sinus",
              data: range.map(Math.sin),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};
