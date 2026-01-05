import { GoodsItem } from './GoodsItem.jsx';
import Grid from '@mui/material/Grid';

import {useContext} from "react";
import {ShopContext} from "../context.jsx";

export function GoodsList() {
  const {goods = []} = useContext(ShopContext)

  return (
    <Grid
      container
      spacing={3}
      className="goods"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
      {goods.map((item) => (
        <GoodsItem
          key={item.offerId}
          {...item}
        />
      ))}
    </Grid>
  );
}
