export function reducer(state, {type, payload}) {
  switch (type) {
    case "CLOSE_ALERT": {
      return {
        ...state,
        alertName: "",
      }
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        order: state.order.filter((el) => el.offerId !== payload.id)
      }
    }

    case "ADD_TO_CART": {
      const itemIndex = state.order.findIndex((orderItem) => (orderItem.offerId === payload.item.offerId))

      if (itemIndex < 0) {
        const newItem = {
          ...payload.item,
          quantity: 1,
        }

        return {
          ...state,
          order: [...state.order, newItem],
          alertName: payload.name,
        }

      } else {
        const newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });

        return {
          ...state,
          order: newOrder,
          alertName: payload.name,
        }
      }
    }

    case "INCREASE_QUANTITY": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.offerId === payload.itemId,
      );

      const newOrder = state.order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      return {
        ...state,
        order: newOrder
      }
    }

    case "DECREASE_QUANTITY": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.offerId === payload.itemId,
      );

      const newOrder = state.order.map((orderItem, index) => {
        if (index === itemIndex && orderItem.quantity - 1 > 0) {
          return {
            ...orderItem,
            quantity: orderItem.quantity - 1,
          };
        } else {
          return orderItem;
        }
      });

      return {
        ...state,
        order: newOrder
      }
    }

    case "TOGGLE_CART": {
      return {
        ...state,
        isCartShow: !state.isCartShow,
      }
    }

    case "SET_GOODS": {
      return {
        ...state,
        goods: payload || [],
        loading: false,
      }
    }

    default:
      return state;
  }


}