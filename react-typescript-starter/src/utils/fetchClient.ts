// tslint:disable
// add "import 'whatwg-fetch'" at entry file to use fetch API
// https://github.com/github/fetch
import localStorage from './localStorage';
import { LocalStorage as LocalStorageConst } from '../constants';

const API_ROOT = process.env.REACT_APP_API_ROOT || '';

const defaultOptions = {
  mode: 'cors',
  cache: 'default',
};

const getDefaultHeader = () => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  headers.set(
    'Authorization',
    `Bearer ${localStorage.get(LocalStorageConst.USER_AUTH_TOKEN)}`
  );
  // headers.set('x-auth-token', `${localStorage.get(LocalStorageConst.USER_AUTH_TOKEN)}`)
  return headers;
};

const mergeOptions = (options: {}): {} => Object.assign({}, defaultOptions, options);

const withRootURL = (url: string) => `${API_ROOT}${url}`;

// https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
const handleError = (res: Response) => {
  if (!res.ok) {
    throw Error(`${res.status}: ${res.statusText}`);
  } else {
    return res;
  }
};

export default {
  get: (url: string, options: {}) =>
    fetch(
      withRootURL(url),
      mergeOptions({
        method: 'GET',
        headers: getDefaultHeader(),
        ...options,
      })
    )
      .then(handleError)
      .then(res => res.json()),

  post: (url: string, body: {}, options: {}) =>
    fetch(
      withRootURL(url),
      mergeOptions({
        method: 'POST',
        headers: getDefaultHeader(),
        body: JSON.stringify(body),
        ...options,
      })
    )
      .then(handleError)
      .then(res => res.json()),

  put: (url: string, body: {}, options: {}) =>
    fetch(
      withRootURL(url),
      mergeOptions({
        method: 'PUT',
        headers: getDefaultHeader(),
        body: JSON.stringify(body),
        ...options,
      })
    )
      .then(handleError)
      .then(res => res.json()),

  delete: (url: string, options: {}) =>
    fetch(
      withRootURL(url),
      mergeOptions({
        method: 'DELETE',
        headers: getDefaultHeader(),
        ...options,
      })
    )
      .then(handleError)
      .then(res => res.json()),
};
