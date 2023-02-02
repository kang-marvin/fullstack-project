const DEVELOPMENT_BACKEND = 'http://0.0.0.0:3010/api/v1';

export const APIBaseUrl = path => {
  switch (process.env.REACT_APP_NODE_ENV) {
    case "development":
      return `${DEVELOPMENT_BACKEND}/${path}`;
    default:
      return `${DEVELOPMENT_BACKEND}/${path}`;
  }
}
