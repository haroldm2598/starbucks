import { configureStore } from '@reduxjs/toolkit';
import starbsReducer from './reducer/starbuckSlice';

export const store = configureStore({
	reducer: { starbsTemplate: starbsReducer }
});
