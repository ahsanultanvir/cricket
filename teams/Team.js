const {DataTypes} = require('sequelize');
const cricketDB = require('../config/database');

const Team = cricketDB.define('Team',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    // freezeTableName: true
});

(async ()=>{
    await Team.sync({alter: true});
})();

module.exports = Team;