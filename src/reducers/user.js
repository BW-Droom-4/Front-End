import { combineReducers } from 'redux';

const initialState = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
    created_at: '',
    updated_at: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
