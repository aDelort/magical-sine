import React, { useState } from 'react';
import { Chart } from './Chart';
import { Param, ParamInputs } from './ParamInputs';

export const Plot = () => {
  const [frequency, setFrequency] = useState<Param>(1);
  const [amplitude, setAmplitude] = useState<Param>(1);

  return (
    <div>
      <Chart f={frequency} A={amplitude} />
      <ParamInputs
        settableParams={[
          { value: frequency, setValue: setFrequency },
          { value: amplitude, setValue: setAmplitude },
        ]}
      />
    </div>
  );
};
