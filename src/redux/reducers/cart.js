const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {

    if (action.type === 'ADD_PIZZA_CART') {
        return {
            ...state,
            items: {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            },
            totalPrice: state.totalPrice + action.payload.price,
            totalCount: ++state.totalCount,
        };
    }

    if (action.type === 'DELETE_ALL_CART') {
        return {
            items: {},
            totalPrice: 0,
            totalCount: 0,
        };

    }

    if (action.type === 'PLUS_PIZZA_CART') {
        return {
            ...state,
            items: {
                ...state.items,
                [action.payload.id]: [...state.items[action.payload.id], state.items[action.payload.id][0]],
            },
            totalPrice: +[state.totalPrice] + +[action.payload.price],
            totalCount: +[state.totalCount] + 1,
        };
    }

    if (action.type === 'MINUS_PIZZA_CART') {

        return {
            ...state,
            items: {
                ...state.items,
                [action.payload.id]: state.items[action.payload.id].slice(0, -1)

            },
            totalPrice: +[state.totalPrice] - +[action.payload.price],
            totalCount: +[state.totalCount] - 1
        };
    }

    if (action.type === 'DELETE_PIZZA_CART') {
        const item = {
            ...state.items,
        };
        delete item[action.payload.id];
        return {
            ...state,
            items: item,
            totalPrice: +[state.totalPrice] - +[action.payload.countPizzasPrice],
            totalCount: +[state.totalCount] - +[action.payload.countPizzas],
        };
    }

    return state;
}

export default cart;