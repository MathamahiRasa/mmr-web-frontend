import { atom, selector } from "recoil";

export const cartItemState = atom({
  key: "cartItemsState",
  default: [],
});

export const cartItemsWithQuantitySelector = selector({
  key: "cartItemsWithQuantitySelector",
  get: ({ get }) => {
    const cartItems = get(cartItemState);
    const cartItemsWithQuantity = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.price = existingItem.quantity * item.productPrice;
      } else {
        acc.push({
          ...item,
          quantity: item.quantity || 1,
          price: (item.quantity || 1) * item.productPrice,
        });
      }
      return acc;
    }, []);
    return cartItemsWithQuantity;
  },
});

export const cartTotalItemSelector = selector({
  key: "cartTotalItemSelector",
  get: ({ get }) => {
    const cartItems = get(cartItemsWithQuantitySelector);
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  },
});
