import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: {},      // { [cardId]: { id, name, price, qty } }
    totalQty: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const { id, name, price, qty = 1 } = action.payload;

            if (state.items[id]) {
                state.items[id].qty += qty;
            } else {
                state.items[id] = { id, name, price, qty };
            }

            state.totalQty += qty;
            state.totalPrice += price * qty;
        },

        // dispatch(addToCart({ id: card.id, name: card.name, price: card.price })  -  Adds one
        // dispatch(addToCart({ id: card.id, name: card.name, price: card.price, qty: 10 })

        removeFromCart: (state, action) => {
            const id = action.payload;
            const item = state.items[id];

            if (!item) return;

            state.totalQty -= item.qty;
            state.totalPrice -= item.price * item.qty;
            delete state.items[id];
        },
        // dispatch(removeFromCart( card.id ));

        incrementQty: (state, action) => {
            const id = action.payload;
            const item = state.items[id];

            if (!item) return;

            item.qty += 1;
            state.totalQty += 1;
            state.totalPrice += item.price;
        },
        // dispatch(incrementQty( card.id ));

        decrementQty: (state, action) => {
            const id = action.payload;
            const item = state.items[id];

            if (!item) return;

            item.qty -= 1;
            state.totalQty -= 1;
            state.totalPrice -= item.price;

            if (item.qty === 0) {
                delete state.items[id];
            }
        },

        // dispatch(decrementQty( card.id ));

        clearCart: () => { return initialState }
        // dispatch(clearCart())
    },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart, } = cartSlice.actions;

export default cartSlice.reducer;
