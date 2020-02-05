import {
    GET_USER_LISTINGS_SUCCESS 
} from '../actions/actions';

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_LISTINGS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};


