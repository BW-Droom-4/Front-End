export default {
    ends : {
      root    : () => `/`,
      home    : () => `/home`,
      dash    : (id) => `/dash/${id}`,
      signup  : () => `/auth/sign-up`,
      signin  : () => `/auth/sign-in`,
      signout : () => `/auth/sign-out`,
      users   : () => `/users`,
      user    : (id) => `/users/${id}`,
      companies: () => `/companies`,
      company  : (id) => `/companies/${id}`,
    },
  }
  