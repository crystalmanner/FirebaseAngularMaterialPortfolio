const model = require("../../models/User");

module.exports = {
  getById: function(req, res, next) {
    model.findById(req.params.id, function(err, userInfo) {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "User Found!!!",
          data: userInfo
        });
      }
    });
  },
  getAll: function(req, res, next) {
    let usersList = [];
    model.find({}, function(err, users) {
      if (err) {
        next(err);
      } else {
        for (let user of users) {
          usersList.push({
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            role: user.role,
            avatar: user.avatar,
            password: user.password
          });
        }
        res.json({
          status: "success",
          message: "User list found!!!",
          data: usersList
        });
      }
    });
  },

  updateById: function(req, res, next) {
    model.findByIdAndUpdate(req.params.id, req.body, function(err, userInfo) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "User updated successfully!!!",
          data: { user: userInfo }
        });
      }
    });
  },
  deleteById: function(req, res, next) {
    model.findByIdAndRemove(req.params.id, function(err, userInfo) {
      if (err) next(err);
      else {
        res.json({
          status: "success",
          message: "User deleted successfully!!!",
          data: null
        });
      }
    });
  },
  create: function(req, res, next) {
    model.create(new model({ ...req.body }), function(err, result) {
      if (err) next(err);
      else
        res.json({
          status: "success",
          message: "User added successfully!!!",
          data: null
        });
    });
  }
};
