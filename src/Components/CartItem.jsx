import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

function CartItem(props) {
  let nameTitle = "Other"

  const {
    finalPrice,
    brItems = [],
    tracks = [],
    quantity = 1,
    cbRemoveFromCart = Function.prototype,
    offerId
  } = props;

  if (brItems.length > 0) {
    nameTitle = brItems[0].name
  } else if (tracks.length > 0) {
    nameTitle = tracks[0].title
  }

  return (<ListItem
    secondaryAction={
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => cbRemoveFromCart(offerId)}
      >
        <ClearIcon />
      </IconButton>
    }
  >
    <ListItemText
      primary={nameTitle + " x " + quantity + " = " + quantity * finalPrice}
    />
  </ListItem>)
}

export {CartItem}