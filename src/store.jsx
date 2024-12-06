import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';

// STORE
export default configureStore({
    reducer: {
        pizza: pizzaReducer
    }

});

