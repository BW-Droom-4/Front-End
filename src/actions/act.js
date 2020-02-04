import authios from '../api/authios';
import { server } from '../routes';
import {
    GET_USER_LISTINGS,
    GET_USER_LISTINGS_SUCCESS,
    GET_USER_LISTINGS_FAILURE,
    GET_JOB_LISTINGS,
    GET_JOB_LISTINGS_SUCCESS,
    GET_JOB_LISTINGS_FAILURE,
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

export default act
