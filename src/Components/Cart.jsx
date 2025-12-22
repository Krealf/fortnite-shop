import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from "@mui/material/IconButton";
import {Box} from "@mui/material";

function Cart(props) {
  const {quantity = 0} = props;

  return (<Box sx={{position: "fixed", bottom: "2%", right: "2%",   zIndex: 1000, backgroundColor: 'green', borderRadius: '50%',}}>
    <IconButton
      size="large"
    >
      <Badge
        badgeContent={quantity}
        color="primary"
      >
        <ShoppingCartIcon sx={{fontSize: 32, color: "white"}} />
      </Badge>
    </IconButton>
  </Box>)
}

export {Cart}