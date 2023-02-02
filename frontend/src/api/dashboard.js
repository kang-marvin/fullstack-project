import * as httpMethods from "./common/http_methods";
import urlUtils from "./utils/url_utils";

class dashboard {
  static getCatImages(searchParams = {page: 1}) {
    const queryString = urlUtils.toQueryString(searchParams);
    return httpMethods.get(`images/cats?${queryString}`)
  }
}

export default dashboard;
