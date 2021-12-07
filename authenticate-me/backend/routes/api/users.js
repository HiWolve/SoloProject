const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();


// Sign up
router.post(
  '/',
  asyncHandler(async (req, res) => {
    const { email, password, username, firstName, lastName, city, state } = req.body;
    const user = await User.signup({ email, username, password, firstName, lastName, city, state   });

    await setTokenCookie(res, user);

    return res.json({
      user
    });
  })
);



module.exports = router;
