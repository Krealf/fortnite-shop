import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {useEffect, useState} from 'react';
import API_KEY from '../../config.js';
import {Preloader} from "./Prealoader.jsx";
import {GoodsList} from "./GoodsList.jsx";
import {Cart} from "./Cart.jsx";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([])

  useEffect(function getGoods() {
    setLoading(true)
    fetch('https://fortnite-api.com/v2/shop?language=ru', {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setGoods(data.data.entries)
      });
  }, []);

  const addToCart = (item) => {
    setOrder(prev => ([...prev, item]))
  }

  return (
    <Container
      component="main"
      sx={{p: 3}}
      maxWidth="xl"
    >
      <Toolbar />
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList
        good={goods}
        cbAddToCart={addToCart}
      />}
    </Container>
  );
}

export {Shop};
