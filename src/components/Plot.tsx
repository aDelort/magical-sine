import React, { useReducer, useState } from 'react';
import { Chart } from './Chart';
import { Param, Curves, SettableCurve } from './Curves';

export type Curve = {
  frequency: Param;
  amplitude: Param;
};

export const Plot = () => {
  const reducer = (
    curves: Curve[],
    action: {
      type: 'setFrequency' | 'setAmplitude';
      payload: { curveIndex: number; newValue: Param };
    }
  ) => {
    let updatedCurves = [...curves];
    switch (action.type) {
      case 'setFrequency':
        updatedCurves[action.payload.curveIndex].frequency =
          action.payload.newValue;
        break;
      case 'setAmplitude':
        updatedCurves[action.payload.curveIndex].amplitude =
          action.payload.newValue;
        break;
    }
    return updatedCurves;
  };

  const [curves, dispatch] = useReducer(reducer, [
    { frequency: 1, amplitude: 4 },
    { frequency: 2, amplitude: 2 },
    { frequency: 4, amplitude: 1 },
  ]);

  const settableCurves = curves.map((curve, index) => ({
    frequency: {
      value: curve.frequency,
      setValue: (newValue: Param) => {
        dispatch({
          type: 'setFrequency',
          payload: { curveIndex: index, newValue },
        });
      },
    },
    amplitude: {
      value: curve.amplitude,
      setValue: (newValue: Param) => {
        dispatch({
          type: 'setAmplitude',
          payload: { curveIndex: index, newValue },
        });
      },
    },
  }));

  return (
    <div>
      <Chart curves={[...curves]} />
      <Curves settableCurves={settableCurves} />
    </div>
  );
};
