import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import API_KEY from '../../config.js';
import { Preloader } from './Prealoader.jsx';
import { GoodsList } from './GoodsList.jsx';
import { Cart } from './Cart.jsx';
import { CartList } from './CartList.jsx';
import Drawer from '@mui/material/Drawer';
import { Alerting } from './Alert.jsx';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(function getGoods() {
    setLoading(true);
    fetch('https://fortnite-api.com/v2/shop?language=ru', {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setGoods(data.data.entries);
      });
  }, []);

  const addToCart = (item) => {
    let nameTitle = 'Other';
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.offerId === item.offerId,
    );
    const { brItems = [], tracks = [] } = item;

    if (brItems.length > 0) {
      nameTitle = brItems[0].name;
    } else if (tracks.length > 0) {
      nameTitle = tracks[0].title;
    }

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder((prev) => [...prev, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }

    setAlertName(nameTitle);
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => el.offerId !== itemId);

    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
  };

  const increaseQuantity = (itemId) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.offerId === itemId,
    );

    const newOrder = order.map((orderItem, index) => {
      if (index === itemIndex) {
        return {
          ...orderItem,
          quantity: orderItem.quantity + 1,
        };
      } else {
        return orderItem;
      }
    });

    setOrder(newOrder);
  };

  const decreaseQuantity = (itemId) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.offerId === itemId,
    );

    const newOrder = order.map((orderItem, index) => {
      if (index === itemIndex && orderItem.quantity - 1 > 0) {
        return {
          ...orderItem,
          quantity: orderItem.quantity - 1,
        };
      } else {
        return orderItem;
      }
    });

    setOrder(newOrder);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  return (
    <Container component="main" sx={{ p: 3 }} maxWidth="xl">
      <Toolbar />

      <Drawer
        anchor="right"
        open={isCartShow}
        onClose={() => setCartShow(false)}
      >
        <CartList
          order={order}
          cbRemoveFromCart={removeFromCart}
          cbincreaseQuantity={increaseQuantity}
          cbdecreaseQuantity={decreaseQuantity}
        />
      </Drawer>

      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList good={goods} cbAddToCart={addToCart} />
      )}
      {alertName && <Alerting name={alertName} closeAlert={closeAlert} />}
    </Container>
  );
}

export { Shop };
