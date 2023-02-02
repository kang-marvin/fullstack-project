import * as httpMethods from "./common/httpMethods";
import urlUtils from "../utils/urlUtils";

class dashboard {
  static getCatImages(searchParams = {page: 1}) {
    const queryString = urlUtils.toQueryString(searchParams);
    return httpMethods.get(`images/cats?${queryString}`)
  }
}

export default dashboard;
