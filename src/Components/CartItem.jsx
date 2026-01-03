import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function CartItem(props) {
  let nameTitle = "Other"

  const {
    finalPrice,
    brItems = [],
    tracks = [],
    quantity = 1,
    cbRemoveFromCart = Function.prototype,
    offerId,
    cbincreaseQuantity = Function.prototype,
    cbdecreaseQuantity = Function.prototype,
  } = props;

  if (brItems.length > 0) {
    nameTitle = brItems[0].name
  } else if (tracks.length > 0) {
    nameTitle = tracks[0].title
  }

  return (<ListItem
    secondaryAction={<IconButton
      edge="end"
      aria-label="delete"
      onClick={() => cbRemoveFromCart(offerId)}
    >
      <DeleteIcon />
    </IconButton>}
  >
    {nameTitle}, {finalPrice * quantity} V-bucks

    <IconButton
      aria-label="minus"
      onClick={() => cbdecreaseQuantity(offerId)}
    >
      <RemoveIcon />
    </IconButton>
    {quantity}
    <IconButton
      aria-label="plus"
      onClick={() => cbincreaseQuantity(offerId)}
    >
      <AddIcon />
    </IconButton>

  </ListItem>)
}

export {CartItem}