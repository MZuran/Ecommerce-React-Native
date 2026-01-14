import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // [{ id, name, price, qty }]
    totalQty: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const { id, name, price, qty = 1, maxStock } = action.payload;

            const existingItem = state.items.find(item => item.id === id);
            let copyAmount = qty

            if (existingItem && existingItem.qty + copyAmount > maxStock) {
                copyAmount = maxStock - existingItem.qty
            }

            if (!existingItem && copyAmount > maxStock) {
                copyAmount = maxStock
            }

            if (existingItem) {

                existingItem.qty += copyAmount;

            } else {

                state.items.push({ id, name, price, qty: copyAmount });

            }

            state.totalQty += copyAmount;
            state.totalPrice += price * copyAmount;
        },

        // dispatch(addToCart({ id, name, price, maxStock }))
        // dispatch(addToCart({ id, name, price, qty: 10, maxStock }))

        removeFromCart: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex(item => item.id === id);

            if (index === -1) return;

            const item = state.items[index];

            state.totalQty -= item.qty;
            state.totalPrice -= item.price * item.qty;

            state.items.splice(index, 1);
        },

        // dispatch(removeFromCart(id))

        incrementQty: (state, action) => {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);

            if (!item) return;

            item.qty += 1;
            state.totalQty += 1;
            state.totalPrice += item.price;
        },

        // dispatch(incrementQty(id))

        decrementQty: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex(item => item.id === id);

            if (index === -1) return;

            const item = state.items[index];

            item.qty -= 1;
            state.totalQty -= 1;
            state.totalPrice -= item.price;

            if (item.qty === 0) {
                state.items.splice(index, 1);
            }
        },

        // dispatch(decrementQty(id))

        clearCart: () => initialState,
        // dispatch(clearCart())
    },
});

export const {
    addToCart,
    removeFromCart,
    incrementQty,
    decrementQty,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
