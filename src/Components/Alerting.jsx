import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useEffect } from 'react';
import {useContext} from "react";
import {ShopContext} from "../context.jsx";

function Alerting() {
  const {alertName, closeAlert} = useContext(ShopContext)

  useEffect(() => {
    const timerId = setTimeout(() => closeAlert(), 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);

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
      {alertName} добавлен в корзину!
    </Alert>
  );
}

export { Alerting };
