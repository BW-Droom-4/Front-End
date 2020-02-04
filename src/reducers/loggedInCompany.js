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
    switch(action.payload) {
        default:
            return state;
    }
};

