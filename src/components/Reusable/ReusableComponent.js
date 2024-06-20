import { useRecoilState } from "recoil";
import { cartItemState } from "../atoms/Atoms";

export const useCartHandler = () => {
  const [cartItems, setCartItems] = useRecoilState(cartItemState);

  const handleCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updateCartItems = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: parseFloat(
                (item.quantity + 1) * product.productPrice
              ).toFixed(2),
            }
          : item
      );
      setCartItems(updateCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
          price: parseFloat(product.productPrice).toFixed(2),
        },
      ]);
    }
  };

  const handleChange = (product, event) => {
    var existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updateCartItems = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: event.target.value,
              price: event.target.value * product.productPrice,
            }
          : item
      );
      setCartItems(updateCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: event.target.value,
          price: event.target.value * product.productPrice,
        },
      ]);
    }
  };

  const handleIncreaseQuantity = (product) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
            price: parseFloat(
              (item.quantity + 1) * product.productPrice
            ).toFixed(2),
          }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (product) => {
    const updatedCartItems = cartItems
      .map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,
              price: parseFloat(
                (item.quantity - 1) * product.productPrice
              ).toFixed(2),
            }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedCartItems);
  };

  const deleteCartItem = (product) => {
    const deleteCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(deleteCartItems);
  };

  return {
    cartItems,
    handleCart,
    handleChange,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    deleteCartItem,
  };
};
