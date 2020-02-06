import {
    SIGN_IN,
    SIGN_OUT
} from '../actions/actions';

const initialState = false;

const loggedIn = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN:
            return true;
        case SIGN_OUT:
            return false;
        default:
            return state;
    }
};

export default loggedIn;
