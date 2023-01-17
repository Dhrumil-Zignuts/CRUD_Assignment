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
    res.render("course", {course: course});
}

// Get all course
const getAllCourse = async (req,res)=>{

    const courses = await Course.findAll({})
    // res.status(200).send(courses);
    res.render('course',{course : courses});

}


// Delete the Course
const deleteCourse = async (req,res)=>{

    const id = req.params.id;

    await Course.destroy({where : {id : id}}).then(()=>{
        res.status(200).send('Course is deleted..!')
    })
}
// Get One Course From ID
const getOneCourse = async (req,res)=>{
    const id = req.params.id;
    const  course = await Course.findOne({where: {id : id}})
    res.status(200).send(course);
}
// Update the Course
const updateCourse = async (req,res)=>{
    let id = req.params.id;
    console.log(req.body);
    console.log(id);
    
    const information = {
        courseName: req.body.name,
        courseDuration: req.body.duration,
        courseFee: req.body.fee
    }
    const course = await Course.update(information, {where : {id : id}})
    res.status(200).send(course);
    

}

module.exports = {
    addCourse,
    getAllCourse,
    updateCourse,
    deleteCourse,
    getOneCourse
}