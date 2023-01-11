const courseController = require('../Controller/courseController');

const routes = require('express').Router();

routes.post('/addCourse', courseController.addCourse);
routes.get('/getAllCourses', courseController.getAllCourse);
routes.put('/:id', courseController.updateCourse);
routes.delete('/:id', courseController.deleteCourse);

module.exports = routes;