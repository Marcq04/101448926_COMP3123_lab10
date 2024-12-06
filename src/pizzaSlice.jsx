// pizzaSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

// STATE
const initialState = {
    pizzas: {
        Cheese: 0,
        Pepperoni: 0,
        Hawaiian: 0,
    },
    glutenFree: false,
    error: null,
};

// REDUCER
export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        toggleGlutenFree: (state) => {
            state.glutenFree = !state.glutenFree;
        },
        addPizza: (state, action) => {
            const pizzaType = action.payload;
            if (state.pizzas[pizzaType] !== undefined) {
                state.pizzas[pizzaType] += 1;
            }
        },
    },
})

export const { toggleGlutenFree, addPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
