module.exports = {
  secret: "e-school-secret-key",
  jwtExpiration: 14400, // 4hr
  jwtRefreshExpiration: 86400, // 24hrs

  /* for test */
  // jwtExpiration: 60, // 1 minute
  // jwtRefreshExpiration: 120, // 2 minutes
};
