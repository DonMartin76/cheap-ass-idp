'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/authorize', function (req, res, next) {
  res.render('authorize', { title: 'Express' });
});

router.post('/authorize', function (req, res, next) {
  // Check username and password here, then create a 'code' to return
  // Associate the code with the user's profile in your backend storage,
  // e.g. redis or similar. For super super cheap IdP's, you can use
  // node memory storage, BUT you must not scale up this thing then.
  res.redirect('http://localhost:8000/auth/cheapass/callback?code=abcdef');
});

router.post('/token', function (req, res, next) {
  // Verify code here and get back the profile from your backend storage.
  const token = {
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    sub: 'this-goes-into-x-authenticated-user-id',
    given_name: 'Herbert',
    family_name: 'Feuerstein',
    email: 'this@is.mandatory.com'
  };
  res.status(200).json({
    access_token: jwt.sign(token, 'not-important-not-used'),
    expires_in: 3600,
    scope: ''
  });
});

module.exports = router;
