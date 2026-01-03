import LinearProgress from '@mui/material/LinearProgress';
import { green } from '@mui/material/colors';

function Preloader() {
  return (
    <LinearProgress
      sx={{
        '& .MuiLinearProgress-bar': {
          backgroundColor: green[500],
        },
      }}
    />
  );
}

export { Preloader };
