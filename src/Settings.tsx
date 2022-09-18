import {
  Box,
  TextField,
  Button,
  styled,
  Slider,
  Typography,
  Grid,
  Stack,
} from "@mui/material";
import MuiInput from "@mui/material/Input";

export function ResetButton(props: { onClick: () => void }) {
  return (
    <Button onClick={props.onClick} variant="outlined" color="error">
      Reset
    </Button>
  );
}

export function InspirationButton(props: { onClick: () => void }) {
  return <Button color="secondary">I need inspiration</Button>;
}

interface SettingsProps {
  words: number;
  setWords: (value: number) => void;
}

export default function Settings(props: SettingsProps) {
  const { words, setWords } = props;
  const Input = styled(MuiInput)`
    width: 42px;
  `;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setWords(Number(newValue));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWords(event.target.value === "" ? 1 : Number(event.target.value));
  };
  const handleBlur = () => {
    if (words < 1) setWords(1);
    else if (words > 10) setWords(10);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Words
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={words}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={1}
            max={10}
          />
        </Grid>
        <Grid item>
          <Input
            value={words}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 10,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
