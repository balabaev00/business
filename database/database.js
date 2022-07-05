require('dotenv').config()

const {Sequelize, DataTypes} = require('sequelize');


const sequelize = new Sequelize({
  dialect: process.env.DB_TYPE,
  logging: process.env.DB_LOG ? console.log : false,
  host: process.env.DB_HOSTNAME,
  username: process.env.MYSQL_USERNAME,
  password: `${process.env.MYSQL_ROOT_PASSWORD}`,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  timezone: '+00:00',
  define: {
    timestamps: false
  }
});

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('../user/user.model.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

module.exports = db