
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateUpdatePassword = require('../validation/updatePassword');
const validateUpdateUser = require('../validation/updateUser');
const validateLoginInput = require('../validation/login');

const User = require('../models/User');

router.post('/register', function (req, res) {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    }
    else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      const newUser = new User({
        ...req.body,
        avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('There was an error', err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error('There was an error', err);
            else {
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  res.json(user)
                });
            }
          });
        }
      });
    }
  });
});

router.put('/update/:id', function (req, res) {
  const { errors, isValid } = validateUpdateUser(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email
  }).then(user => {
    console.log(user.id, req.params.id);
    if (user && user._id != req.params.id) {
      return res.status(400).json({
        email: 'Email already exists'
      });
    }
    else {
      User.findByIdAndUpdate(req.params.id, {...req.body}, function(err, result) {
        if (err)
          next(err);
        else {
          res.json({ status: "success", message: "User info updated successfully!!!", data: null });
        }
      })
    }
  });
});

router.put('/change-password/:id', function (req, res) {
  const { errors, isValid } = validateUpdatePassword(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findById(req.params.id)
  .then(user => {
    console.log(user.id, req.params.id);
    if (!user) {
      return res.status(404).json({
        email: 'User not found'
      });
    }
    else {
      bcrypt.compare(req.body.oldPassword, user.password)
        .then(isMatch => {
          if (isMatch) {
            bcrypt.genSalt(10, (err, salt) => {
              if (err) console.error('There was an error', err);
              else {
                bcrypt.hash(req.body.password, salt, (err, hash) => {
                  if (err) console.error('There was an error', err);
                  else {
                    User.findByIdAndUpdate(req.params.id, {password: hash}, function(err, result) {
                      if (err)
                        next(err);
                      else {
                        res.json({ status: "success", message: "User password updated successfully!!!", data: null });
                      }
                    })
                  }
                });
              }
            });
          } else {
            return res.status(400).json({password: "Incorrect Old password"});
          }
        });
    }
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'User not found'
        return res.status(404).json(errors);
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.firstName,
              avatar: user.avatar
            }
            jwt.sign(payload, 'secret', {
              expiresIn: 3600
            }, (err, token) => {
              if (err) console.error('There is some error in token', err);
              else {
                res.json({
                  success: true,
                  id: user._id,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  email: user.email,
                  avatar: user.avatar,
                  role: user.role,
                  phone: user.phone,
                  token: token
                });
              }
            });
          }
          else {
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
          }
        });
    });
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
  return res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;