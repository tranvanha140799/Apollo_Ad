export default (req: any, res: any) => {
  res.setHeader('Set-Cookie', 'accessToken=; Max-Age=0; SameSite=Strict; HttpOnly; Path=/');
  res.status(200).end();
};
