import * as React from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {CartItem} from "./CartItem.jsx";

function CartList(props) {
  const {order, cbRemoveFromCart = Function.prototype} = props

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity
  }, 0)

  return (
    <Box sx={{width: 450, p: 3}}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: "center",
        }}
      >
        Корзина
      </Typography>

      {order.length ? order.map(item => (
        <CartItem key={item.offerId} {...item} cbRemoveFromCart={cbRemoveFromCart}/>)) : <Typography>Здесь пока пусто</Typography>
      }

      <Typography
        sx={{
          mt: 3,
        }}
      >Общая стоимость корзины: {totalPrice}</Typography>
    </Box>
  )
}

export {CartList}