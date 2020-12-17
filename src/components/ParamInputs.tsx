import { Input, Slider } from '@material-ui/core';

export type Param = number;
export type SetParam = (newValue: Param) => void;
export type SettableParam = { value: Param; setValue: SetParam };

export const ParamInputs = ({
  settableParams,
}: {
  settableParams: SettableParam[];
}) => (
  <div>
    {settableParams.map((settableParam, index) => (
      <ParamInput key={index} settableParam={settableParam} />
    ))}
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
