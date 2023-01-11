const dbConfig = require('../Config/dbConfig');

const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host : dbConfig.HOST,
        dialect : dbConfig.dialect
    }
)

sequelize.authenticate((err)=>{
    if (err) throw err;
    console.log('Data Base is Connected');
})


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.courses = require('./coursesModel')(sequelize,DataTypes);

// db.sequelize.sync({force: false}, (err)=>{
//     if(err) throw err;
//     console.log('Re-sync is Done..!');
// })
db.sequelize.sync({force: false}).then(()=>{
    console.log("Data is Connected");
})

module.exports = db;