import React from 'react';
import { Line } from 'react-chartjs-2';
import { range } from 'mathjs';

export const Plot = () => {
  const xValues = range(0, Math.PI * 2, 0.1).toArray() as number[];

  return (
    <div>
      <Line
        data={{
          labels: xValues,
          datasets: [
            {
              label: 'Sinus',
              data: xValues.map(Math.sin),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
};
