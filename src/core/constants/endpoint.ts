export const CONTEXT = {
  API: 'api',
  STATIC: 'static',
  ADMIN: 'admin',
};

export const CONTROLLERS = {
  AUTH: 'auth',
  TEST: 'test',
  STAFF: 'staff',
  COMMODITY: 'commodity',
  CUSTOMERCARE: 'customer-care',
};

export const ENDPOINTS = {
  PUBLIC: `${CONTEXT.API}/${CONTROLLERS.TEST}`,
  LOGIN: `${CONTEXT.API}/${CONTROLLERS.AUTH}/signin`,
  SIGNUP: `${CONTEXT.API}/${CONTROLLERS.AUTH}/signup`,
};
