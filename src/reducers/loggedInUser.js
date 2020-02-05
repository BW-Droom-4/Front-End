import {
    GET_LOGGED_IN_USER_SUCCESS,
    SIGN_OUT,
    SAVE_USER_SUCCESS
} from '../actions/actions';

const initialState = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    profileId: -1,
    created_at: '',
    updated_at: '',
    occupation_title: '',
    about_user: '',
    years_of_experience: '',
    imageId: -1,
    image: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGGED_IN_USER_SUCCESS:
        case SAVE_USER_SUCCESS:
            return action.payload;
        case SIGN_OUT:
            return initialState;
        default:
            return state;
    }
};
