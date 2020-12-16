import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { range } from 'mathjs';
import { Input, Slider } from '@material-ui/core';

export const Plot = () => {
  const [f, setF] = useState<number>(1);

  return (
    <div>
      <Chart f={f as number} />
      <FrequencyInput f={f} setFrequency={setF} />
    </div>
  );
};
const FrequencyInput = ({
  f,
  setFrequency,
}: {
  f: number;
  setFrequency: (f: number) => void;
}) => {
  return (
    <div>
      <Slider
        value={typeof f === 'number' ? f : 0}
        onChange={(_event, newValue) => {
          const newF = typeof newValue === 'number' ? newValue : 0;
          setFrequency(newF);
        }}
      />
      <Input
        value={f}
        onChange={(event) => {
          const parsedF = parseInt(event.target.value, 10);
          const newF = isNaN(parsedF) ? 0 : parsedF;
          setFrequency(newF);
        }}
        inputProps={{ min: 0, max: 100, step: 1 }}
      />
    </div>
  );
};

const Chart = ({ f }: { f: number }) => {
  const xValues = range(0, Math.PI * 2, 0.01).toArray() as number[];

  return (
    <div>
      <Line
        data={{
          labels: xValues,
          datasets: [
            {
              label: 'Sinus',
              data: xValues.map((t) => Math.sin(2 * Math.PI * f * t)),
              pointRadius: 0,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  callback: (label: number, index: number) =>
                    index % 20 === 0 ? label.toFixed(3) : '',
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};
