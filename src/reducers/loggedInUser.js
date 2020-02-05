import {
    GET_LOGGED_IN_USER_SUCCESS
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
        default:
            return state;
    }
};
