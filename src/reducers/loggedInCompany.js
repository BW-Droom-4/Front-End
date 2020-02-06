import {
    GET_LOGGED_IN_COMPANY_SUCCESS,
    SIGN_OUT,
    SAVE_COMPANY_JOB_LISTING_SUCCESS,
    DELETE_COMPANY_JOB_LISTING_SUCCESS
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
        case SAVE_COMPANY_JOB_LISTING_SUCCESS:
            if(!action.payload.id || action.payload.id === 0) {
                // add a new listing
                return {
                    ...state,
                    joblistings: [ ...state.joblistings, action.payload ]
                };
            }
            else {
                // update a listing that exists
                return {
                    ...state,
                    joblistings: state.joblistings.map(listing => {
                        if(listing.id === action.payload.id) {
                            return action.payload;
                        }
                        return listing;
                    })
                };
            }
        case DELETE_COMPANY_JOB_LISTING_SUCCESS:
            return {
                ...state,
                joblistings: state.joblistings.filter(listing => listing.id !== action.payload)
            };
        default:
            return state;
    }
};

