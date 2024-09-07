import { combineReducers } from '@reduxjs/toolkit';

// Importa reducers aquí
import someReducer from './some/someReducer';

const rootReducer = combineReducers({
	some: someReducer,
	// Agrega otros reducers aquí
});

export default rootReducer;
