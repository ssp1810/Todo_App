// App configerations

export const SERVER = {
  PROTOCOL: process.env.REACT_APP_SERVER_PROTOCOL,
  SERVER_URL: process.env.REACT_APP_SERVER_URL, // REST API IP HOST
  PORT: process.env.REACT_APP_SERVER_PORT, // REST API IP PORT
  API_PREFIX: process.env.REACT_APP_API_PREFIX
};

export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  PUT: "PUT",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS",
};

export let MASTER_DATA_SERVER = {
  SERVER_URL: process.env.REACT_APP_SERVER_URL, // REST API IP HOST
  PORT: process.env.REACT_APP_SERVER_PORT, // REST API IP PORT
  MASTER_ROUTE: process.env.REACT_APP_API_MASTER_ROUTE,
  PROTOCOL: process.env.REACT_APP_SERVER_PROTOCOL,
  PREFIX: process.env.REACT_APP_API_PREFIX,
};

export const BASE_URL = `${SERVER.PROTOCOL}://${SERVER.SERVER_URL}:${SERVER.PORT}/`;

/* Cache setting details */
export const CACHE_SETTINGS = {
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
};

/* Core setting details */
export const CORS_SETTINGS = {
  mode: "cors", // no-cors, cors, *same-origin
  credentials: "same-origin", // include, *same-origin, omit
}

/* Header details with Auth token  */
export let HEADER_JSON = {
  Accept: "application/json",
  source: "workflow",
  req: "list",
};

/* Type of credentials include */
const CREDENTIALS_INCLUDE = "include";
export const STANDARD_METHOD_OPTIONS = {
  credentials: CREDENTIALS_INCLUDE,
};











// old code

// LOGIN: process.env.REACT_APP_LOGIN_ROUTE,
// INVOICE: "Invoice",
// BULKUPLOAD: "BulkUpload",
// SERVICE_INVOICE: "service-invoice",
// PAYMENT: "sap-payment",
// QUERY_REPORT:"QueryReport"

export let CUSTOM_URL = `${MASTER_DATA_SERVER.PROTOCOL}://${MASTER_DATA_SERVER.SERVER_URL}:${MASTER_DATA_SERVER.PORT}/`;

export const apiCall = {
  screenRootOptionCall: "?set=appmeta",
  login: "login",
}

export let localStorageVariableName = {
  authToken: process.env.REACT_APP_AUTH_TOKEN_NAME,
  guestAuthToken: process.env.REACT_APP_AUTH_TOKEN_NAME,
  sapCode: "vendor-sap-code",
  userName: "user-name",
  isLdapUser: "is-ldap-user",
  vendorName: "vendor-name",
  csrfToken: process.env.REACT_APP_CSRF_COOKIE_NAME,
  isLoggedIn: 'isLoggedIn'
};
