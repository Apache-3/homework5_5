import axios from "axios"

const initialState = {
    data: [],
    count: 0
}

export const PhoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_PHONE':
            return {...state, data: action.payload}
        case 'INCREASE_COUNT':
            return {...state, count: state.count + 1}
        default:
            return state
    }
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await axios.get('https://dummyjson.com/products?limit=20')
        dispatch({
            type: 'BUY_PHONE',
            payload: response.data.products
        })
    }
}

export const increaseCounter = () => {
    return {type: 'INCREASE_COUNT'}
}