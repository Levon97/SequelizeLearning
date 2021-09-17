const dbConfigs = require("./configs")
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfigs.DB, dbConfigs.USER, dbConfigs.PASSWORD, {
    host: dbConfigs.HOST,
    dialect: dbConfigs.dialect,

})
const User = require("./models/model")(sequelize,DataTypes);
async function connection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
connection(); 
(async () => {
  await sequelize.sync({ force: true });
  await User.create({name: 'gago'})
})();
