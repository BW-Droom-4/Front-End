import authios from '../api/authios';
import { server } from '../routes';
import {
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
    GET_LOGGED_IN_COMPANY_FAILURE
} from './actions';

export const act = (type, payload) => ({ type, payload })

export const getJobListings = () => {
    console.log(server);
    return dispatch => {
        dispatch({
            type: GET_JOB_LISTINGS,
        });
        authios().get(server.base + server.ends.companies.GET())
            .then(res => {
                console.log('/companies', res);
                dispatch({
                    type: GET_JOB_LISTINGS_SUCCESS,
                    payload: res.data
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
                console.log('/users', res);
                dispatch({
                    type: GET_USER_LISTINGS_SUCCESS,
                    payload: res.data
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

export const getLoggedInUser = id => {
    return dispatch => {
        dispatch({
            type: GET_LOGGED_IN_USER
        })

        authios().get(server.base + server.ends.user_profile.GET(id))
            .then(res => {
                const { data } = res;
                // comes back in indexed object, need to get props off first property
                const user = { ...data["0"] };
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
        })

        authios().get(server.base + server.ends.company.GET(id))
            .then(res => {
                dispatch({
                    type: GET_LOGGED_IN_COMPANY_SUCCESS,
                    payload: res.data
                });  
            })
            .catch(err => dispatch({
                type: GET_LOGGED_IN_COMPANY_FAILURE,
                payload: err.message
            }));
    };
};

export const signOutUser = () => {
    return {
        type: SIGN_OUT
    };
};

export default act
