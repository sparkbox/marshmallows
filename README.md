# Marshmallows

Easily add basic auth to any express app.

1. Install in your project: `npm i marshmallows --save`.
2. Require into your app. `const auth = require('marshmallows');`
3. Use for _every_ request in your app via. `app.use(auth, express.static('./dist'));`
4. Add `ENV` variables `USER` and `PASS` for credentials.
5. Run your app with `NODE_ENV=production`.
