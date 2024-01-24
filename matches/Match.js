const { DataTypes } = require("sequelize");
const cricketDB = require("../config/database");
const Team = require("../teams/Team");

const Match = cricketDB.define(
	"Match",
	{
		id:{
		    type: DataTypes.INTEGER,
		    primaryKey: true
		},
		team1_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        team2_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        winner_team_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        won_by_runs:{
            type: DataTypes.INTEGER
        },
        won_by_wickets:{
            type: DataTypes.INTEGER
        }
	},
	{
		timestamps: true,
		// freezeTableName: true,
	}
);

(async () => {
	Match.hasMany(Team);
	Team.belongsTo(Match);
	await Match.sync({ alter: true });
})();

module.exports = Match;
