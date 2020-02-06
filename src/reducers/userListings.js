import {
    GET_USER_LISTINGS_SUCCESS 
} from '../actions/actions';

import authios from '../api/authios';
import server from '../routes/server'

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_LISTINGS_SUCCESS:

        let filtered = [];
            let userListingArray =action.payload.map((elm)=>{
                authios().get(server.base + server.ends.company_match.GET(elm.id)).then(
                    res => {
                        if(!res.data[0].company_liked){
                            return filtered.push(elm)
                        }
                        console.log(res.data[0].company_liked)
                    }
                    
                    ).catch(
                      err => console.log(err)
                    )
                    
                return elm})
            console.log(filtered,'filtered out liked users')
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
};


