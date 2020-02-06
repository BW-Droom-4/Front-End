import {
    SIGN_IN,
    SIGN_OUT,
    GET_LOGGED_IN_USER_SUCCESS,
    GET_LOGGED_IN_COMPANY_SUCCESS
} from '../actions/actions';

const initialState = false;

const loggedIn = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN:
        case GET_LOGGED_IN_USER_SUCCESS:
        case GET_LOGGED_IN_COMPANY_SUCCESS:
            return true;
        case SIGN_OUT:
            return false;
        default:
            return state;
    }
};

export default loggedIn;
