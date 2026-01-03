import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {useEffect, useState} from 'react';
import API_KEY from '../../config.js';
import {Preloader} from "./Prealoader.jsx";
import {GoodsList} from "./GoodsList.jsx";
import {Cart} from "./Cart.jsx";
import {CartList} from "./CartList.jsx";
import Drawer from "@mui/material/Drawer";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([])
  const [isCartShow, setCartShow] = useState(false)

  useEffect(function getGoods() {
    setLoading(true)
    fetch('https://fortnite-api.com/v2/shop?language=ru', {
      method: 'GET', headers: {
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
    const itemIndex = order.findIndex(orderItem => orderItem.offerId === item.offerId)

    if (itemIndex < 0) {
      const newItem = {
        ...item, quantity: 1,
      }

      setOrder(prev => ([...prev, newItem]))
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem, quantity: orderItem.quantity + 1,
          }
        } else {
          return orderItem;
        }
      })

      setOrder(newOrder)
    }
  }

  const removeFromCart = (itemId) => {
    const newOrder = order.filter(el => el.offerId !== itemId)

    setOrder(newOrder)
  }

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  }

  return (<Container
    component="main"
    sx={{p: 3}}
    maxWidth="xl"
  >
    <Toolbar />

    <Drawer
      anchor="right"
      open={isCartShow}
      onClose={() => setCartShow(false)}
    >
      <CartList order={order} cbRemoveFromCart={removeFromCart}/>
    </Drawer>

    <Cart
      quantity={order.length}
      handleCartShow={handleCartShow}
    />
    {loading ? <Preloader /> : <GoodsList
      good={goods}
      cbAddToCart={addToCart}
    />}

  </Container>);
}

export {Shop};
