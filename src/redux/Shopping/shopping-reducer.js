import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Pizza",
      description:
        "Hot pizza wit cheese, cheese and cheese",
      price: 150.0,
      image:
          "https://images.unsplash.com/photo-1618417789450-7c6a5fa113e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 2,
      title: "Blueberry Pastry",
      description:
        "Blue, sweet...ummm ok let me eat",
      price: 20.0,
      image:
        "https://images.unsplash.com/photo-1617980695459-c3f033df383d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 3,
      title: "Donuts",
      description:
        "Round sweet soft and delicicous",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1618411640018-972400a01458?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 4,
      title: "Tomato soup",
      description:
        "Hot boul of soup with croutons",
      price: 50.0,
      image:
        "https://images.unsplash.com/photo-1607800910317-b92a6c395a1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      title: "Majesty Burger",
      description:
        "Huge burger great taste",
      price: 75.0,
      image:
        "https://images.unsplash.com/photo-1590742309630-e9f9b66da3f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 6,
      title: "Garlic Bread",
      description:
        "Great partner of hot soup",
      price: 15.0,
      image:
        "https://images.unsplash.com/photo-1617713807246-9b9e55ef560e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 7,
      title: "Red Velvet cake",
      description:
        "Served for special occasions",
      price: 300.0,
      image:
        "https://images.unsplash.com/photo-1617303462864-58d23bab4ca7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80",
    },
    {
      id: 8,
      title: "Cookies",
      description:
        "Choco chips and butterscotch available",
      price: 5.0,
      image:
        "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=360&q=80",
    },
    {
      id: 9,
      title: "Strawberry cake",
      description:
        "For special days or to make it special",
      price: 200.0,
      image:
        "https://images.unsplash.com/photo-1616690599988-f0cf77748e84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
      id: 10,
      title: "Oreo cake",
      description:
        "Medium sized cake large sized taste",
      price: 150.0,
      image:
        "https://images.unsplash.com/photo-1616690710400-a16d146927c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
    },
  ],
  cart: [],
  currentItem: null,
};  

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
