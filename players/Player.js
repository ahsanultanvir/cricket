const { DataTypes } = require("sequelize");
const cricketDB = require("../config/database");
const Team = require("../teams/Team");

const Player = cricketDB.define(
	"Player",
	{
		id:{
		    type: DataTypes.INTEGER,
		    primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: true,
		// freezeTableName: true,
	}
);

(async () => {
	Team.hasMany(Player);
	Player.belongsTo(Team);
	await Player.sync({ alter: true });
})();

module.exports = Player;
