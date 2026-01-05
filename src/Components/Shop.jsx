import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useEffect } from 'react';
import API_KEY from '../../config.js';
import { Preloader } from './Prealoader.jsx';
import { GoodsList } from './GoodsList.jsx';
import { Cart } from './Cart.jsx';
import { CartList } from './CartList.jsx';
import Drawer from '@mui/material/Drawer';
import { Alerting } from './Alerting.jsx';

import {useContext} from "react";
import {ShopContext} from "../context.jsx";

function Shop() {
  const {setGoods, handleCartShow, loading, alertName, isCartShow} = useContext(ShopContext)

  useEffect(function getGoods() {
    fetch('https://fortnite-api.com/v2/shop?language=ru', {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.data.entries);
      });
  }, []);

  return (
    <Container component="main" sx={{ p: 3}} maxWidth="xl">
      <Toolbar />

      <Drawer
        anchor="right"
        open={isCartShow}
        onClose={() => handleCartShow()}
      >
        <CartList />
      </Drawer>

      <Cart />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList />
      )}
      {alertName && <Alerting />}
    </Container>
  );
}

export { Shop };
