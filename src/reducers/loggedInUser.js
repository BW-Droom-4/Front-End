import {
    GET_LOGGED_IN_USER_SUCCESS,
    SIGN_OUT
} from '../actions/actions';

const initialState = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    created_at: '',
    updated_at: '',
    images: [],
    profiles: [],
    experiences: [],
    interests: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGGED_IN_USER_SUCCESS:
            return action.payload;
        case SIGN_OUT:
            return initialState;
        default:
            return state;
    }
};
