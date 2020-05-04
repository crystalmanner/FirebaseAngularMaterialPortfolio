const projectModel = require('../../models/Projects');

module.exports = {
  getById: function (req, res, next) {
    projectModel.findById(req.params.projectId, function (err, projectInfo) {
      if (err) {
        next(err);
      } else {
        res.json(({ status: "success", message: "Project Found!!!", data: { projects: projectInfo } }));
      }
    })
  },

  getAll: function (req, res, next) {
    let projectsList = [];
    projectModel.find({}, function (err, projects) {
      if (err) {
        next(err);
      } else {
        for (let project of projects) {
          projectsList.push({
            id: project._id,
            name: project.name,
            released_on: project.released_on
          });
        }
        res.json({ status: "success", message: "Projects list found!!!", data: { projects: projectsList } });
      }
    });
  },

  updateById: function (req, res, next) {
    projectModel.findByIdAndUpdate(req.params.projectId, { name: req.body.name }, function (err, projectInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "Project updated successfully!!!", data: null });
      }
    });
  },
  deleteById: function (req, res, next) {
    projectModel.findByIdAndRemove(req.params.projectId, function (err, projectInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "Project deleted successfully!!!", data: null });
      }
    });
  },
  create: function (req, res, next) {
    projectModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
      if (err)
        next(err);
      else
        res.json({ status: "success", message: "Project added successfully!!!", data: null });

    });
  },
}