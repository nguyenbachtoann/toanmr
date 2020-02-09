import { isNullOrUndefined } from './common-services';


const Get = async function (api, query = '') {
  if (isNullOrUndefined(api)) {
    return;
  }
  const setting = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };
  const response = await fetch(api, setting).catch(() => {
    return null;
  });
 
  if (response.status >= 400 || response.status === 204) {
    return null;
  }
  const data = await response.json();
  return data;
};

const Post = async function (api, query) {
  if (isNullOrUndefined(api)) {
    return;
  }

  const setting = {
    headers: {
      'content-type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(query),
  };
  const response = await fetch(api, setting).catch(() => {
    return null;
  });
  if (response.status >= 400 || response.status === 204) {
    return null;
  }
  // const data = await response.json();
  return response;
};

const Put = async function (api, query) {
  if (isNullOrUndefined(api)) {
    return;
  }
  const setting = {
    headers: {
      'content-type': 'application/json',
    },
    method: 'put',
    body: JSON.stringify(query),
  };
  const response = await fetch(api, setting).catch(() => {
    return null;
  });
 
  //const data = await response.json();
  if (response.status >= 400 || response.status === 204) {
    return null;
  }
  return response;
};

const Delete = async function (api, query) {
  if (isNullOrUndefined(api)) {
    return;
  }
  const setting = {
    method: 'delete',
  };
  const response = await fetch(api, setting).catch(() => {
    return null;
  });
  if (response.status >= 400 || response.status === 204) {
    return null;
  }
  return response;
};
const ApiServices = {
  Get,
  Post,
  Put,
  Delete,
};

export default ApiServices;
