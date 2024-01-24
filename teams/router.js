const express = require("express");
const router = express.Router();
const Team = require("./Team");
const Player = require("../players/Player");

router.get("/", async (req, res) => {
	// res.send('Responsing team');
	await Team.findAll()
		.then((teams) => {
			res.status(200).send(teams);
		})
		.catch((err) => console.log(err));
});

router.get("/:id", async (req, res) => {
	// res.send('Responsing team');
	await Player.findAll({
		where:{
			TeamId: req.params.id
		}
	})
		.then((players) => {
			res.status(200).send({players: players, total_players: players.length});
		})
		.catch((err) => console.log(err));
});

router.post("/add", async (req, res) => {
	const data = req.body;
	const {id, name} = data;
	await Team.create({
		id,
		name,
	})
		.then((team) => {
			res.status(200).send(team);
		})
		.catch((err) => console.log(err));
    // res.send(req.body);
});




module.exports = router;
