import {
  Input,
  makeStyles,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

export type Param = number;
export type SetParam = (newValue: Param) => void;
export type SettableParam = { value: Param; setValue: SetParam };

export type SettableCurve = {
  frequency: SettableParam;
  amplitude: SettableParam;
};

const useStyles = makeStyles({
  paramInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '2em',
    margin: '2em',
  },
  slider: {
    width: '10em',
    margin: '3em',
  },
});

export const Curves = ({
  settableCurves,
}: {
  settableCurves: SettableCurve[];
}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fréquences</TableCell>
            <TableCell>Amplitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {settableCurves.map((settableCurve, index) => (
            <Curve key={index} settableCurve={settableCurve} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Curve = ({ settableCurve }: { settableCurve: SettableCurve }) => (
  <TableRow>
    <ParamInput settableParam={settableCurve.frequency} />
    <ParamInput settableParam={settableCurve.amplitude} />
  </TableRow>
);

const ParamInput = ({ settableParam }: { settableParam: SettableParam }) => {
  const styles = useStyles();

  return (
    <TableCell>
      <div className={styles.paramInput}>
        <Input
          className={styles.textInput}
          value={settableParam.value}
          onChange={(event) => {
            const parsedParam = parseInt(event.target.value, 10);
            const newParam = isNaN(parsedParam) ? 0 : parsedParam;
            settableParam.setValue(newParam);
          }}
          inputProps={{ min: 0, max: 10, step: 1 }}
        />
        <Slider
          className={styles.slider}
          value={
            typeof settableParam.value === 'number' ? settableParam.value : 0
          }
          onChange={(_event, newValue) => {
            const newParam = typeof newValue === 'number' ? newValue : 0;
            settableParam.setValue(newParam);
          }}
        />
      </div>
    </TableCell>
  );
};
