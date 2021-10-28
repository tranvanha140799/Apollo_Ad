export async function addAccessToken(initialConfig: any) {
  const config = initialConfig;

  //   const token = getToken();
  //   if (token) {
  //     Object.assign(config.headers, {
  //       Authorization: 'Bearer ' + token,
  //     });
  //   }
  return config;
}

export function onRejected(error: any) {
  return Promise.reject(error);
}
