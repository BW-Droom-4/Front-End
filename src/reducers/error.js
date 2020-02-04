import {
    USER_SIGN_UP_FAILURE,
    COMPANY_SIGN_UP_FAILURE,
    USER_SIGN_IN_FAILURE,
    COMPANY_SIGN_IN_FAILURE,
    SIGN_OUT_FAILURE,
    GET_USER_LISTINGS_FAILURE,
    GET_JOB_LISTINGS_FAILURE
} from '../actions/actions';

const initialState = '';

export default (state = initialState, action) => {
    switch(action.type) {
        case USER_SIGN_UP_FAILURE:
        case COMPANY_SIGN_UP_FAILURE:
        case USER_SIGN_IN_FAILURE:
        case COMPANY_SIGN_IN_FAILURE:
        case SIGN_OUT_FAILURE:
        case GET_USER_LISTINGS_FAILURE:
        case GET_JOB_LISTINGS_FAILURE:
            return action.payload;
        default:
            return initialState; // <-- returns initialState instead of state because otherwise it would never get set back to an empty string
    }
};
