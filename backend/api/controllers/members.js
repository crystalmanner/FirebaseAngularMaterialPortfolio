const memberModel = require('../../models/Member');

module.exports = {
  
  getById: function (req, res, next) {
    memberModel.findById(req.params.id, function (err, info) {
      if (err) {
        next(err);
      } else {
        res.json(({ status: "success", message: "Item Found!!!", data: { items: info } }));
      }
    })
  },

  getAll: function (req, res, next) {
    let itemsList = [];
    memberModel.find({}, function (err, items) {
      if (err) {
        next(err);
      } else {
        for (let item of items) {
          itemsList.push({
            id: item._id,
            name: item.name,
            released_on: item.released_on
          });
        }
        res.json({ status: "success", message: "Items list found!!!", data: { items: itemsList } });
      }
    });
  },

  updateById: function (req, res, next) {
    memberModel.findByIdAndUpdate(req.params.id, { name: req.body.name }, function (err, info) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "Item updated successfully!!!", data: null });
      }
    });
  },
  deleteById: function (req, res, next) {
    memberModel.findByIdAndRemove(req.params.id, function (err, info) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "Item deleted successfully!!!", data: null });
      }
    });
  },
  create: function (req, res, next) {
    memberModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
      if (err)
        next(err);
      else
        res.json({ status: "success", message: "Item added successfully!!!", data: null });
    });
  },
}