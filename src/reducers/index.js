import { combineReducers } from 'redux';
import loggedInUser from './loggedInUser';
import loggedInCompany from './loggedInCompany';
import userListings from './userListings';
import jobListings from './jobListings';
import loading from './loading';
import error from './error';

export default combineReducers({
    loggedInUser,
    loggedInCompany,
    userListings,
    jobListings,
    loading,
    error
});

