// src/store/index.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import exampleReducer from './some/someReducer'; // Ajusta la ruta si es necesario

const combinedReducer = combineReducers({
	example: exampleReducer,
	// Agrega otros reducers aquí
});

const rootReducer = (state, action) => {
	if (action.type === HYDRATE) {
		return {
			...state, // Mantén el estado existente
			...action.payload, // Reemplaza con el nuevo estado
		};
	} else {
		return combinedReducer(state, action);
	}
};

const makeStore = () =>
	configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV !== 'production',
	});

export const wrapper = createWrapper(makeStore, { debug: false });
