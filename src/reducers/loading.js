import { 
    GET_JOB_LISTINGS,
    GET_JOB_LISTINGS_SUCCESS,
    GET_JOB_LISTINGS_FAILURE,
    GET_USER_LISTINGS,
    GET_USER_LISTINGS_SUCCESS,
    GET_USER_LISTINGS_FAILURE
 } from '../actions/actions';

const initialState = false;

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_JOB_LISTINGS:
        case GET_USER_LISTINGS:
            return true;
        case GET_JOB_LISTINGS_SUCCESS:
        case GET_JOB_LISTINGS_FAILURE:
        case GET_USER_LISTINGS_SUCCESS:
        case GET_USER_LISTINGS_FAILURE:
            return false;
        default:
            return state;
    }
};
