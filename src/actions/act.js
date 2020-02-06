import authios from '../api/authios';
import { server } from '../routes';
import {
    SIGN_IN,
    SIGN_OUT,
    GET_USER_LISTINGS,
    GET_USER_LISTINGS_SUCCESS,
    GET_USER_LISTINGS_FAILURE,
    GET_JOB_LISTINGS,
    GET_JOB_LISTINGS_SUCCESS,
    GET_JOB_LISTINGS_FAILURE,
    GET_LOGGED_IN_USER,
    GET_LOGGED_IN_USER_SUCCESS,
    GET_LOGGED_IN_USER_FAILURE,
    GET_LOGGED_IN_COMPANY,
    GET_LOGGED_IN_COMPANY_SUCCESS,
    GET_LOGGED_IN_COMPANY_FAILURE,
    SAVE_USER,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE,
    SAVE_COMPANY,
    SAVE_COMPANY_SUCCESS,
    SAVE_COMPANY_FAILURE,
    POST_COMPANY_MATCH,
    POST_COMPANY_MATCH_SUCCESS
} from './actions';

export const act = (type, payload) => ({ type, payload })

// Actually gets companies, not job listings. Ha.
export const getJobListings = () => {
    return dispatch => {
        dispatch({
            type: GET_JOB_LISTINGS,
        });
        authios().get(server.base + server.ends.companies.GET())
            .then(res => {
                
                const companies = res.data;
                const companiesWithProfiles = [];

                let currentRequest = 0;
                companies.forEach(company => {
                    authios().get(server.base + server.ends.company_profile.GET(company.id))
                        .then(res => {
                            currentRequest++;
                            companiesWithProfiles.push({
                                ...company,
                                profile: res.data.profiles.length ? { ...res.data.profiles[0] } : null
                            });

                            if(currentRequest === companies.length) {
                                // this is the last request
                                dispatch({
                                    type: GET_JOB_LISTINGS_SUCCESS,
                                    payload: companiesWithProfiles
                                });
                            }
                            
                        })
                        .catch(err => console.warn(err));
                });
            })
            .catch(err => {
                console.warn(err);
                dispatch({
                    type: GET_JOB_LISTINGS_FAILURE,
                    payload: err.message
                });
            });
    };
};

export const getUserListings = () => {
    return dispatch => {
        dispatch({
            type: GET_USER_LISTINGS
        });
        authios().get(server.base + server.ends.users.GET())
            .then(res => {
                
                const users = res.data;
                const usersWithProfiles = [];

                let currentRequest = 0;
                users.forEach(user => {
                    authios().get(server.base + server.ends.user_profile.GET(user.id))
                        .then(res => {
                            currentRequest++;

                            usersWithProfiles.push({
                                ...user,
                                profile: res.data.profiles.length ? { ...res.data.profiles[0] } : null,
                                images: res.data.images,
                                interests: res.data.interests,
                                experiences: res.data.experiences
                            });
                            if(currentRequest === users.length) {
                                // this is the last request
                                dispatch({
                                    type: GET_USER_LISTINGS_SUCCESS,
                                    payload: usersWithProfiles
                                });
                            }
                         })
                         .catch(err => console.warn(err));
                });
            })
            .catch(err => {
                console.warn(err);
                dispatch({
                    type: GET_USER_LISTINGS_FAILURE,
                    payload: err.message
                });
            });
    };
};

export const matchCompany = (companyMatch, userId, loggedInCompanyId) => {
    return dispatch => {

        dispatch({
            type: POST_COMPANY_MATCH
        });
        const company = {
            user_id: userId || loggedInCompanyId,
            company_id: companyMatch.id,
            company_liked: "true",
        };
        authios().post(server.base + server.ends.company_match.POST(companyMatch.id), company)
        .then(res => {
            console.log('match res', res);
            dispatch({
                type: POST_COMPANY_MATCH_SUCCESS,
                payload: companyMatch
            })
        })
        .catch(
            err => console.warn(err)
        )
    }
};


export const saveUser = userWithProfile => {
    return dispatch => {
        dispatch({
            type: SAVE_USER
        });
        const user = {
            id: userWithProfile.id,
            firstname: userWithProfile.firstname,
            lastname: userWithProfile.lastname,
            email: userWithProfile.email,
            role: userWithProfile.role,
            created_at: userWithProfile.created_at,
            updated_at: userWithProfile.updated_at
        };

        // save the USER
        authios().put(server.base + server.ends.user.PUT(userWithProfile.id), user)
            .then(res => {

                const profile = {
                    user_id: user.id,
                    occupation_title: userWithProfile.occupation_title,
                    about_user: userWithProfile.about_user,
                    years_of_experience: userWithProfile.years_of_experience
                };

                if(userWithProfile.profileId > -1) {

                    // PUT the PROFILE
                    
                    authios().put(server.base + server.ends.user_profile.PUT(user.id, userWithProfile.profileId), profile)
                        .then(res => {
                            dispatch({
                                type: SAVE_USER_SUCCESS,
                                payload: userWithProfile
                            });
                        })
                        .catch(err => {
                            console.warn(err);
                            dispatch({
                                type: SAVE_USER_FAILURE,
                                payload: err.message
                            });
                        });
                }
                else {
                    // POST the PROFILE

                    authios().post(server.base + server.ends.user_profile.POST(user.id), profile)
                        .then(res => {
                            dispatch({
                                type: SAVE_USER_SUCCESS,
                                payload: userWithProfile
                            });
                        })
                        .catch(err => {
                            console.warn(err);
                            dispatch({
                                type: SAVE_USER_FAILURE,
                                payload: err.message
                            });
                        });
                }
            })
            .catch(err => {
                console.warn(err);
                dispatch({
                    type: SAVE_USER_FAILURE,
                    payload: err.message
                });
            });
    };
};

export const saveCompany = companyWithProfile => {

};

export const getLoggedInUser = id => {
    return dispatch => {
        dispatch({
            type: GET_LOGGED_IN_USER
        })

        authios().get(server.base + server.ends.user_profile.GET(id))
            .then(res => {
                const { data } = res;
                // comes back in indexed object, need to get props off first property
                const user = { 
                    ...data["0"],
                    role: '',
                    created_at: '',
                    updated_at: ''
                };
                if(data.profiles.length) {
                    user.profileId = data.profiles[0].id;
                    user.occupation_title = data.profiles[0].occupation_title;
                    user.about_user = data.profiles[0].about_user;
                    user.years_of_experience = data.profiles[0].years_of_experience;
                }
                else {
                    user.profileId = -1;
                    user.occupation_title = '';
                    user.about_user = '';
                    user.years_of_experience = '';
                }
                if(data.images.length) {
                    user.imageId = data.images[0].id;
                    user.image = data.images[0].user_image
                }
                else {
                    user.imageId = -1;
                    user.image = '';
                }
                dispatch({
                    type: GET_LOGGED_IN_USER_SUCCESS,
                    payload: user
                });  
            })
            .catch(err => dispatch({
                type: GET_LOGGED_IN_USER_FAILURE,
                payload: err.message
            }));
    };
};



export const getLoggedInCompany = id => {
    return dispatch => {
        dispatch({
            type: GET_LOGGED_IN_COMPANY
        });

        authios().get(server.base + server.ends.company.GET(id))
            .then(res => {
                const { data } = res;
                const company = {
                    ...data["0"],
                    joblistings: data.joblistings
                };

                if(data.images.length) {
                    company.imageId = data.images[0].id;
                    company.image = data.images[0].company_image
                }

                dispatch({
                    type: GET_LOGGED_IN_COMPANY_SUCCESS,
                    payload: company
                });  
            })
            .catch(err => dispatch({
                type: GET_LOGGED_IN_COMPANY_FAILURE,
                payload: err.message
            }));
    };
};

export const signInUser = () => {
    return {
        type: SIGN_IN
    };
};

export const signOutUser = () => {
    return {
        type: SIGN_OUT
    };
};

export default act
