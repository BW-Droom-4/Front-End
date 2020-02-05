import { 
    GET_JOB_LISTINGS,
    GET_JOB_LISTINGS_SUCCESS,
    GET_JOB_LISTINGS_FAILURE,
    GET_USER_LISTINGS,
    GET_USER_LISTINGS_SUCCESS,
    GET_USER_LISTINGS_FAILURE,
    GET_LOGGED_IN_COMPANY,
    GET_LOGGED_IN_COMPANY_SUCCESS,
    GET_LOGGED_IN_COMPANY_FAILURE,
    GET_LOGGED_IN_USER,
    GET_LOGGED_IN_USER_SUCCESS,
    GET_LOGGED_IN_USER_FAILURE,
    SAVE_USER,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE,
    SAVE_COMPANY,
    SAVE_COMPANY_SUCCESS,
    SAVE_COMPANY_FAILURE
 } from '../actions/actions';

const initialState = false;

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_JOB_LISTINGS:
        case GET_USER_LISTINGS:
        case GET_LOGGED_IN_COMPANY:
        case GET_LOGGED_IN_USER:
        case SAVE_USER:
        case SAVE_COMPANY:
            return true;
        case GET_JOB_LISTINGS_SUCCESS:
        case GET_JOB_LISTINGS_FAILURE:
        case GET_USER_LISTINGS_SUCCESS:
        case GET_USER_LISTINGS_FAILURE:
        case GET_LOGGED_IN_COMPANY_SUCCESS:
        case GET_LOGGED_IN_COMPANY_FAILURE:
        case GET_LOGGED_IN_USER_SUCCESS:
        case GET_LOGGED_IN_USER_FAILURE:
        case SAVE_USER_SUCCESS:
        case SAVE_USER_FAILURE:
        case SAVE_COMPANY_SUCCESS:
        case SAVE_COMPANY_FAILURE:
            return false;
        default:
            return state;
    }
};
