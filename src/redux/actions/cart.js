export const setCart = (obj) => ({
    type: 'ADD_PIZZA_CART',
    payload: obj,
});

export const delAllCart = () => ({
    type: 'DELETE_ALL_CART',
});

export const plusCart = (obj) => ({
    type: 'PLUS_PIZZA_CART',
    payload: obj,
});

export const minusCart = (obj) => ({
    type: 'MINUS_PIZZA_CART',
    payload: obj,
});

export const delItemCart = (obj) => ({
    type: 'DELETE_PIZZA_CART',
    payload: obj,
});
