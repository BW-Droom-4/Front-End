import {
    GET_LOGGED_IN_COMPANY_SUCCESS,
    SIGN_OUT
} from '../actions/actions';

const initialState = {
    id: 0,
    companyName: '',
    email: '',
    role: '',
    created_at: '',
    updated_at: '',
    images: [],
    profiles: [],
    job_listings: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGGED_IN_COMPANY_SUCCESS:
            return action.payload;
        case SIGN_OUT:
            return initialState;
        default:
            return state;
    }
};

