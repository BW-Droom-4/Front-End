export default {
    base : 'https://droom-4.herokuapp.com/api',
    ends : {
      signup : {
        POST : () => `/auth/register`,
      },
      signin : {
        POST : () => `/auth/login`,
      },
      users : {
        GET : () => `/users`,
      },
      user : {
        GET : (id) => `/users/${id}`,
        PUT : id => `/users/${id}`
      },
      user_profile : {
        GET : (id) => `/users/${id}/profile`,
        POST : () => `/users/profile`,
        PUT: id => `/users/${id}/profile`
      },
      user_images : {
        POST : id => `/users/${id}/upload`
      },
      company_signup : {
        POST : () => `/auth/companies/register`
      },
      company_signin : {
        POST : () => `/auth/companies/login`,
      },
      companies : {
        GET : () => `/companies`, ///get all companies
      },
      company_profile : {
        GET : (id) => `/companies/${id}/profile` /// get profile page by company id
      },
      company : {
        GET : (id) => `/companies/${id}`, ///get company by id
      },
    },
  }


  ///TODO ADD THE REST OF THE ENDPOINTS
  
  