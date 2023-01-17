// General api to access data
import ApiConstants from './ApiConstants';
export default async function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && {token: token}),
    },
    method: method,
    ...(params && {body: JSON.stringify(params)}),
  };

  try {
    const resp = await fetch(path, options);
    const json = await resp.json();

    return json;
  } catch (error) {
    console.log('--error--', error);
    return error;
  }
}
