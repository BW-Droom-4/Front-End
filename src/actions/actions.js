import act from './act'



//////THIS IS A TEMPLATE TODO ADD OUR REDUCERS

/***************************************
  MAIN
***************************************/

/*******************
  client
*******************/

/// TABS ///

// export const ADD_GRAPH   = 'ADD_GRAPH'
// export const OPEN_GRAPH  = 'OPEN_GRAPH'
// export const CLOSE_GRAPH = 'CLOSE_GRAPH'
// export const EDIT_GRAPH  = 'EDIT_GRAPH' // needed?
// export const RESET_GRAPH = 'RESET_GRAPH' // needed?

// export const REORDER_SAVED_GRAPHS  = 'REORDER_SAVED_GRAPHS'
// export const REORDER_OPENED_GRAPHS = 'REORDER_OPENED_GRAPHS'

// /// CURRENT GRAPH ///

// export const EDIT_GRAPH_TITLE = 'EDIT_GRAPH_TITLE'
// export const EDIT_GRAPH_NOTES = 'EDIT_GRAPH_NOTES'
// export const EDIT_GRAPH_THEME = 'EDIT_GRAPH_THEME'
// export const EDIT_GRAPH_SCALE = 'EDIT_GRAPH_SCALE'

// export const ADD_GRAPH_ARM    = 'ADD_GRAPH_ARM'
// export const EDIT_GRAPH_ARM   = 'EDIT_GRAPH_ARM'
// export const DELETE_GRAPH_ARM = 'DELETE_GRAPH_ARM'

// export const ADD_GRAPH_DATASET    = 'ADD_GRAPH_DATASET'
// export const EDIT_GRAPH_DATASET   = 'EDIT_GRAPH_DATASET'
// export const DELETE_GRAPH_DATASET = 'DELETE_GRAPH_DATASET'

// export const EDIT_GRAPH_DATAPOINT = 'EDIT_GRAPH_DATAPOINT';


// export const REORDER_GRAPH_ARMS     = 'REORDER_GRAPH_ARMS'
// export const REORDER_GRAPH_DATASETS = 'REORDER_GRAPH_DATASETS'

/*******************
  server
*******************/

/// AUTH - USER ///

export const USER_SIGN_UP         = 'USER_SIGN_UP'
export const USER_SIGN_UP_TRY     = 'USER_SIGN_UP_TRY'
export const USER_SIGN_UP_SUCCESS = 'USER_SIGN_UP_SUCCESS'
export const USER_SIGN_UP_FAILURE = 'USER_SIGN_UP_FAILURE'

export const COMPANY_SIGN_UP         = 'COMPANY_SIGN_UP'
export const COMPANY_SIGN_UP_TRY     = 'COMPANY_SIGN_UP_TRY'
export const COMPANY_SIGN_UP_SUCCESS = 'COMPANY_SIGN_UP_SUCCESS'
export const COMPANY_SIGN_UP_FAILURE = 'COMPANY_SIGN_UP_FAILURE'

/// AUTH - COMPANY ///

export const USER_SIGN_IN         = 'USER_SIGN_IN'
export const USER_SIGN_IN_TRY     = 'USER_SIGN_IN_TRY'
export const USER_SIGN_IN_SUCCESS = 'USER_SIGN_IN_SUCCESS'
export const USER_SIGN_IN_FAILURE = 'USER_SIGN_IN_FAILURE'

export const COMPANY_SIGN_IN         = 'COMPANY_SIGN_IN'
export const COMPANY_SIGN_IN_TRY     = 'COMPANY_SIGN_IN_TRY'
export const COMPANY_SIGN_IN_SUCCESS = 'COMPANY_SIGN_IN_SUCCESS'
export const COMPANY_SIGN_IN_FAILURE = 'COMPANY_SIGN_IN_FAILURE'

export const SIGN_OUT         = 'SIGN_OUT'
export const SIGN_OUT_TRY     = 'SIGN_OUT_TRY'
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE'

/// USER
export const GET_LOGGED_IN_USER = 'GET_LOGGED_IN_USER';
export const GET_LOGGED_IN_USER_SUCCESS = 'GET_LOGGED_IN_USER_SUCCESS';
export const GET_LOGGED_IN_USER_FAILURE = 'GET_LOGGED_IN_USER_FAILURE';

export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_FAILURE = 'SAVE_USER_FAILURE';

/// COMPANY
export const GET_LOGGED_IN_COMPANY = 'GET_LOGGED_IN_COMPANY';
export const GET_LOGGED_IN_COMPANY_SUCCESS = 'GET_LOGGED_IN_COMPANY_SUCCESS';
export const GET_LOGGED_IN_COMPANY_FAILURE = 'GET_LOGGED_IN_COMPANY_FAILURE';

export const SAVE_COMPANY = 'SAVE_COMPANY';
export const SAVE_COMPANY_SUCCESS = 'SAVE_COMPANY_SUCCESS';
export const SAVE_COMPANY_FAILURE = 'SAVE_COMPANY_FAILURE';

/// USER LISTINGS ///

export const GET_USER_LISTINGS = 'GET_USER_LISTINGS';
export const GET_USER_LISTINGS_SUCCESS = 'GET_USER_LISTINGS_SUCCESS';
export const GET_USER_LISTINGS_FAILURE = 'GET_USER_LISTINGS_FAILURE';

/// JOB LISTINGS ///

export const GET_JOB_LISTINGS = 'GET_JOB_LISTINGS';
export const GET_JOB_LISTINGS_SUCCESS = 'GET_JOB_LISTINGS_SUCCESS';
export const GET_JOB_LISTINGS_FAILURE = 'GET_JOB_LISTINGS_FAILURE';

// /// ALL USERS -- stretch ///

// export const GET_USERS         = 'GET_USERS'
// export const GET_USERS_TRY     = 'GET_USERS_TRY'
// export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
// export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

// /// ALL GRAPHS -- stretch ///

// export const GET_GRAPHS         = 'GET_GRAPHS'
// export const GET_GRAPHS_TRY     = 'GET_GRAPHS_TRY'
// export const GET_GRAPHS_SUCCESS = 'GET_GRAPHS_SUCCESS'
// export const GET_GRAPHS_FAILURE = 'GET_GRAPHS_FAILURE'

// /// USER ///

// export const GET_USER         = 'GET_USER'
// export const GET_USER_TRY     = 'GET_USER_TRY'
// export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
// export const GET_USER_FAILURE = 'GET_USER_FAILURE'

// /// USER GRAPHS ///

// export const GET_USER_GRAPHS         = 'GET_USER_GRAPHS'
// export const GET_USER_GRAPHS_TRY     = 'GET_USER_GRAPHS_TRY'
// export const GET_USER_GRAPHS_SUCCESS = 'GET_USER_GRAPHS_SUCCESS'
// export const GET_USER_GRAPHS_FAILURE = 'GET_USER_GRAPHS_FAILURE'

// /// GRAPH ///

// export const POST_GRAPH         = 'POST_GRAPH'
// export const POST_GRAPH_TRY     = 'POST_GRAPH_TRY'
// export const POST_GRAPH_SUCCESS = 'POST_GRAPH_SUCCESS'
// export const POST_GRAPH_FAILURE = 'POST_GRAPH_FAILURE'

// export const GET_GRAPH         = 'GET_GRAPH'
// export const GET_GRAPH_TRY     = 'GET_GRAPH_TRY'
// export const GET_GRAPH_SUCCESS = 'GET_GRAPH_SUCCESS'
// export const GET_GRAPH_FAILURE = 'GET_GRAPH_FAILURE'

// export const PUT_GRAPH         = 'PUT_GRAPH'
// export const PUT_GRAPH_TRY     = 'PUT_GRAPH_TRY'
// export const PUT_GRAPH_SUCCESS = 'PUT_GRAPH_SUCCESS'
// export const PUT_GRAPH_FAILURE = 'PUT_GRAPH_FAILURE'

// export const DELETE_GRAPH         = 'DELETE_GRAPH'
// export const DELETE_GRAPH_TRY     = 'DELETE_GRAPH_TRY'
// export const DELETE_GRAPH_SUCCESS = 'DELETE_GRAPH_SUCCESS'
// export const DELETE_GRAPH_FAILURE = 'DELETE_GRAPH_FAILURE'

/**************************************/
