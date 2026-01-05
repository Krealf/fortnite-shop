import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useContext} from "react";
import {ShopContext} from "../context.jsx";

function CartItem(props) {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(ShopContext)

  let nameTitle = 'Other';

  const {
    finalPrice,
    brItems = [],
    tracks = [],
    quantity = 1,
    offerId,
  } = props;

  if (brItems.length > 0) {
    nameTitle = brItems[0].name;
  } else if (tracks.length > 0) {
    nameTitle = tracks[0].title;
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeFromCart(offerId)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      {nameTitle}, {finalPrice * quantity} V-bucks
      <IconButton
        aria-label="minus"
        onClick={() => decreaseQuantity(offerId)}
      >
        <RemoveIcon />
      </IconButton>
      {quantity}
      <IconButton
        aria-label="plus"
        onClick={() => increaseQuantity(offerId)}
      >
        <AddIcon />
      </IconButton>
    </ListItem>
  );
}

export {CartItem};
