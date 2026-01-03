import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect } from 'react';

function Alerting(props) {
  const { name = '', closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <Alert
      icon={<CheckIcon fontSize="inherit" />}
      severity="success"
      sx={{
        position: 'fixed',
        bottom: '2.5%',
        right: '7%',
        zIndex: 1000,
      }}
    >
      {name} добавлен в корзину!
    </Alert>
  );
}

export { Alerting };
