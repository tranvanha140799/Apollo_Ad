const STATUS = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
};

export function onFullfilled(response: any) {
  return Promise.resolve(response);
}

export function onRejected(error: any) {
  if (error) {
    const { response } = error;
    // if (
    //   response.status === STATUS.UNAUTHORIZED ||
    //   response.status === STATUS.FORBIDDEN
    // ) {
    //   //redirect logout
    // }

    return Promise.reject(response && response.data);
  }
  return Promise.reject();
}
