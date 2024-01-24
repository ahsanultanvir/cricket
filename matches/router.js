const express = require("express");
const router = express.Router();
const Team = require("../teams/Team");
const Player = require("../players/Player");
const Match = require("./Match");

router.get("/", async (req, res) => {
	//  res.send('Responsing Matches');
	await Match.findAll()
		.then((match) => {
			res.status(200).send(match);
		})
		.catch((err) => console.log(err));
});

router.get("/:id", async (req, res) => {
	await Match.findAll({
		where:{
			id: req.params.id
		}
	})
		.then((match) => {
			res.status(200).send(match);
		})
		.catch((err) => console.log(err));
});

// router.post("/add", async (req, res) => {
// 	const data = req.body;
// 	const {id, name} = data;
// 	await Team.create({
// 		id,
// 		name,
// 	})
// 		.then((team) => {
// 			res.status(200).send(team);
// 		})
// 		.catch((err) => console.log(err));
//     // res.send(req.body);
// });


module.exports = router;
