'use strict';
const auth = require('basic-auth');

function processIsConfigured(proc) {
  return !!proc.env.NODE_ENV &&
    proc.env.NODE_ENV !== 'development' &&
    !!proc.env.USER &&
    !!proc.env.PASS;
}

/**
 * auth
 *
 * Basic authentication implementation
 *
 * @param {object} req Request
 * @param {object} res Response
 * @param {function} next Callback
 *
 * Requires USER, PASS, and NODE_ENV environment variables.
 */
function authHandler(req, res, next) {
  if (processIsConfigured(process)) {
    const user = auth(req);

    if (user && user.name.toLowerCase() === process.env.USER.toLowerCase() && user.pass === process.env.PASS) {
      return next();
    }

    res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.sendStatus(401);
  }
  return next();
}

module.exports = authHandler;
