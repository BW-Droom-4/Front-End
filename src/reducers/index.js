import { combineReducers } from 'redux';
import loggedInUser from './loggedInUser';
import loggedInCompany from './loggedInCompany';

export default combineReducers({
    loggedInUser,
    loggedInCompany
});

