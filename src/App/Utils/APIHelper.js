import getCookie from "swfrontend/COMS/Utils/cookies";
import { openNotification } from "swfrontend/COMS/NotificationMessageMapping";
import { STANDARD_METHOD_OPTIONS, CACHE_SETTINGS, CORS_SETTINGS, HEADER_JSON } from "swfrontend/COMS/Utils/ApiCommunicaton";


export default class ApiHelper {
  baseUrl = null;

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  apiCall = (url, method, values) => {
    if (values && values.constructor.name !== "FormData") {
      values = JSON.stringify(values);
      HEADER_JSON["Content-Type"] = "application/json";
    } else {
      delete HEADER_JSON["Content-Type"];
    }
    return fetch(this.baseUrl + url, {
      ...STANDARD_METHOD_OPTIONS,
      ...CACHE_SETTINGS,
      ...CORS_SETTINGS,
      method,
      headers: {
        ...HEADER_JSON,
        Authorization: JSON.parse(
          localStorage.getItem(
            `${process.env.REACT_APP_TOKEN_PREFIX}-auth-token`
          )
        ),
        "X-CSRFToken": getCookie(
          `${process.env.REACT_APP_TOKEN_PREFIX}-csrftoken`
        ),
      },
      body: values != null ? values : null,
    }).then((res) => {
      if (res.status === 401) {
        localStorage.clear();
        openNotification(
          "error",
          "LOGIN EXPIRED",
          "Your session has expired. Please login again"
        );
        setTimeout(() => {
          window.location =
            process.env.REACT_APP_PROJECT_ROUTE !== "/null"
              ? process.env.REACT_APP_PROJECT_ROUTE
              : "/";
        }, 2500);
      } else if (res.status === 403) {
        openNotification(
          "error",
          "Authorization",
          "You do not have permission to perform this action."
        );
      }
      return res;
    });
  };
}
