module.exports = (sequelize,DataTypes)=>{
    const Course = sequelize.define("course", {
        courseName : {
            type : DataTypes.STRING,
            allowNull: false
        },
        courseDuration : {
            type: DataTypes.STRING,
            allowNull : false
        },
        courseFee : {
            type : DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Course;
}
