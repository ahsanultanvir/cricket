const express = require("express");
const router = express.Router();
const Player = require("./Player");

router.get("/", async (req, res) => {
	// res.send('Responsing player');
	await Player.findAll()
		.then((teams) => {
			res.status(200).send(teams);
		})
		.catch((err) => console.log(err));
});

router.post("/add", async (req, res) => {
	const data = req.body;
	const {name, id, TeamId} = data;
	await Player.create({
		name,
		id,
		TeamId
	})
		.then((team) => {
			res.status(200).send(team);
		})
		.catch((err) => console.log(err));
    // res.send(req.body);
});

router.put("/update/:id", async (req, res) => {
	const player = await Player.findByPk(req.params.id);
	if(player){
		const data = req.body;
		for(key in data){
			// console.log(`${key}: ${data[key]}`);
			player[key] = data[key];
		}
		await player.save();
		res.status(200).send(player);
	}else{
		res.send('Not found the player');
	}
    // res.send(req.body);
});


router.delete("/delete/:id", async (req, res) => {
	const player = await Player.findByPk(req.params.id);
	if(player){
		await player.destroy();
		res.status(200).send(player);
	}else{
		res.send('Not found the player');
	}
    // res.send(req.body);
});


module.exports = router;
