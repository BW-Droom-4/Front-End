import { 
    GET_JOB_LISTINGS_SUCCESS,
} from '../actions/actions';

const initialState = [];

/*
    Each array item will look like:
    {
        id: 0,
        company_id: 0,
        job_title: '',
        expiry_date: '',
        job_detail: '',
        matching_skill: '',
        created_at: '',
        updated_at: ''
    }
*/

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_JOB_LISTINGS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};
