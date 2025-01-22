import {createContext, useReducer} from "react";

const initialValue = {
    data: [],
    term: '',
    filter: 'all',
};

export const Context = createContext();

const reducer = (state = initialValue, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'GET_DATA':
            return {...state, data: payload};
        case 'ON_DELETE':
            const deleteArr = state.data.filter(item => item.id !== payload);
            return {...state, data: deleteArr};
        case 'ON_LIKE_AND_FAVOURITE':
            const toggleArr = state.data
                .map(item => item.id === payload.id ?
                    {...item, [payload.name]: !item[payload.name]} :
                    item
                );
            return {...state, data: toggleArr};
        case 'SEARCH':
            return {...state, term: payload};
        case 'FILTER':
            return {...state, filter: payload};
        case 'ADD_MOVIE':
            const addArr = [...state.data, payload];
            return {...state, data: addArr};
        default:
            return state;
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    return <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>;
};
export default Provider;