import { Input, Slider } from '@material-ui/core';

export type Param = number;
export type SetParam = (newValue: Param) => void;
export type SettableParam = { value: Param; setValue: SetParam };

export type SettableCurve = {
  frequency: SettableParam;
  amplitude: SettableParam;
};

export const Curves = ({
  settableCurves,
}: {
  settableCurves: SettableCurve[];
}) => (
  <>
    {settableCurves.map((settableCurve, index) => (
      <Curve key={index} settableCurve={settableCurve} />
    ))}
  </>
);

const Curve = ({ settableCurve }: { settableCurve: SettableCurve }) => (
  <div>
    <ParamInput settableParam={settableCurve.frequency} />
    <ParamInput settableParam={settableCurve.amplitude} />
  </div>
);

const ParamInput = ({ settableParam }: { settableParam: SettableParam }) => {
  return (
    <div>
      <Slider
        value={
          typeof settableParam.value === 'number' ? settableParam.value : 0
        }
        onChange={(_event, newValue) => {
          const newParam = typeof newValue === 'number' ? newValue : 0;
          settableParam.setValue(newParam);
        }}
      />
      <Input
        value={settableParam.value}
        onChange={(event) => {
          const parsedParam = parseInt(event.target.value, 10);
          const newParam = isNaN(parsedParam) ? 0 : parsedParam;
          settableParam.setValue(newParam);
        }}
        inputProps={{ min: 0, max: 100, step: 1 }}
      />
    </div>
  );
};
