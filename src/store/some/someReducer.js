// src/store/reducers/exampleReducer.js
const initialState = {
	data: null,
};

const exampleReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_DATA':
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default exampleReducer;

export const setData = (data) => ({
	type: 'SET_DATA',
	payload: data,
});
