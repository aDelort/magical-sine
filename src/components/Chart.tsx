import { Line } from 'react-chartjs-2';
import { range } from 'mathjs';
import { Param } from './ParamInputs';

export const Chart = ({ f, A }: { f: Param; A: Param }) => {
  const xValues = range(0, Math.PI * 2, 0.01).toArray() as number[];

  return (
    <div>
      <Line
        data={{
          labels: xValues,
          datasets: [
            {
              label: 'Sinus',
              data: xValues.map((t) => A * Math.sin(2 * Math.PI * f * t)),
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
