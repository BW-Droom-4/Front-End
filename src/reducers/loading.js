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
    GET_LOGGED_IN_USER_FAILURE
 } from '../actions/actions';

const initialState = false;

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_JOB_LISTINGS:
        case GET_USER_LISTINGS:
        case GET_LOGGED_IN_COMPANY:
        case GET_LOGGED_IN_USER:
            return true;
        case GET_JOB_LISTINGS_SUCCESS:
        case GET_JOB_LISTINGS_FAILURE:
        case GET_USER_LISTINGS_SUCCESS:
        case GET_USER_LISTINGS_FAILURE:
        case GET_LOGGED_IN_COMPANY_SUCCESS:
        case GET_LOGGED_IN_COMPANY_FAILURE:
        case GET_LOGGED_IN_USER_SUCCESS:
        case GET_LOGGED_IN_USER_FAILURE:
            return false;
        default:
            return state;
    }
};
