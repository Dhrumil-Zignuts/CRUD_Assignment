const db = require('../Models/indexModel');

const Course = db.courses;


// Add Courses
const addCourse = async (req,res)=>{
    console.log(req.body);
    const information = {
        courseName: req.body.name,
        courseDuration: req.body.duration,
        courseFee: req.body.fee
    }

    const course = await Course.create(information)
    res.status(200).send(course)
}
// Get all course

const getAllCourse = async (req,res)=>{

    const courses = await Course.findAll({})
    res.status(200).send(courses);

}


// Delete the Course
const deleteCourse = async (req,res)=>{

    const id = req.params.id;

    await Course.destroy({where : {id : id}}).then(()=>{
        res.status(200).send('Course is deleted..!')
    })
}


// Update the Course
const updateCourse = async (req,res)=>{
    
    let id = req.params.id;
    // const me = await Course.findOne({where : {courseName :"Node JS" }})
    // await me.set({
    //     courseName : "Sciense",
    //     duration : "2 Hours",
    //     fee: 2000
    // })
    // await me.save();
    const course = await Course.update(req.body, {where : {id : id}})
    res.status(200).send(course);

}

module.exports = {
    addCourse,
    getAllCourse,
    updateCourse,
    deleteCourse
}