import { GoodsItem } from './GoodsItem.jsx';
import Grid from '@mui/material/Grid';

export function GoodsList(props) {
  const { good = [], cbAddToCart } = props;

  return (
    <Grid
      container
      spacing={3}
      className="goods"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
      {good.map((item) => (
        <GoodsItem
          key={item.offerId}
          cbAddToCard={() => cbAddToCart(item)}
          {...item}
        />
      ))}
    </Grid>
  );
}
