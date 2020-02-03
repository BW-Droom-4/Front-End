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
        default:
            return state;
    }
};
