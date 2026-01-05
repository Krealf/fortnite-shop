import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

import {useContext} from "react";
import {ShopContext} from "../context.jsx";

function Cart() {
  const {handleCartShow, order} = useContext(ShopContext)

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '2%',
        right: '2%',
        zIndex: 1000,
        backgroundColor: 'green',
        borderRadius: '50%',
      }}
      onClick={() => handleCartShow()}
    >
      <IconButton size="large">
        <Badge badgeContent={order.length} color="primary">
          <ShoppingCartIcon sx={{ fontSize: 32, color: 'white' }} />
        </Badge>
      </IconButton>
    </Box>
  );
}

export { Cart };
