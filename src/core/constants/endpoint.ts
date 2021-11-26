export const CONTEXT = {
  API: 'api',
  STATIC: 'static',
  ADMIN: 'admin',
};

export const CONTROLLERS = {
  SLK: 'slk',
  CONGVIEC: 'congviec',
  SANPHAM: 'Products',
};

export const ENDPOINTS = {
  PUBLIC: `${CONTEXT.API}/${CONTROLLERS.SLK}`,
  SLK: `${CONTEXT.API}/${CONTROLLERS.SLK}`,
  CONGVIEC: `${CONTEXT.API}/${CONTROLLERS.CONGVIEC}`,
  SANPHAM: `${CONTEXT.API}/${CONTROLLERS.SANPHAM}`,
  SLK_ALL: `${CONTEXT.API}/${CONTROLLERS.SLK}/all`,
  SANPHAM_NDK: `${CONTEXT.API}/${CONTROLLERS.SANPHAM}/ndk`,
};
