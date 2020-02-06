import {
    POST_COMPANY_MATCH,
    POST_COMPANY_MATCH_SUCCESS
} from '../actions/actions';

const initialState = [{

}];

export default (state = initialState, action) => {
    switch(action.type) {
        case POST_COMPANY_MATCH:
            return state;
        case POST_COMPANY_MATCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
