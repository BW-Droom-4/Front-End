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
        PUT : (id) => `/users/${id}`
      },
      user_profile : {
        GET : (id) => `/users/${id}/profile`,
        POST : (id) => `/users/${id}/profile`,
        PUT: (user_id, interest_id) => `/users/${user_id}/profile/${interest_id}`
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
      company_job_listings : {
        POST : company_id => `/companies/${company_id}/joblisting`,
        PUT : (company_id, job_listing_id) => `/companies/${company_id}/joblisting/${job_listing_id}`,
        DELETE : (company_id, job_listing_id) => `/companies/${company_id}/joblisting/${job_listing_id}`
      },
      company_match : {
        GET : (id) => `/companies/${id}/match`,
        POST : (id) => `/companies/${id}/match`
      },
      user_match : {
        GET : (id) => `/users/${id}/match`,
        POST : (id) => `/users/${id}/match`
      }
    },
  }


  ///TODO ADD THE REST OF THE ENDPOINTS
  
  