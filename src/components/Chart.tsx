import { Line } from 'react-chartjs-2';
import { range } from 'mathjs';
import { Curve } from './Plot';

export const Chart = ({ curves }: { curves: Curve[] }) => {
  const tValues = range(0, Math.PI * 2, 0.01).toArray() as number[];
  const partialColors = ['255, 99, 132', '99, 132, 255', '132, 255, 99'];

  return (
    <div>
      <Line
        data={{
          labels: tValues,
          datasets: curves.map((curve, index) => ({
            label: index,
            data: tValues.map(
              (t) =>
                curve.amplitude * Math.sin(2 * Math.PI * curve.frequency * t)
            ),
            pointRadius: 0,
            backgroundColor: `rgba(${
              partialColors[index % partialColors.length]
            }, 0.2)`,
            borderColor: `rgba(${
              partialColors[index % partialColors.length]
            }, 1)`,
            borderWidth: 1,
          })),
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
