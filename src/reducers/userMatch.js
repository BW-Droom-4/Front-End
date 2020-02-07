import {
    POST_USER_MATCH,
    POST_USER_MATCH_SUCCESS
} from '../actions/actions';

const initialState = [{

}];

export default (state = initialState, action) => {
    switch(action.type) {
        case POST_USER_MATCH:
            return state;
        case POST_USER_MATCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
