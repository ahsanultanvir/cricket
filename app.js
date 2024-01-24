const express = require('express');
const cricketDB = require('./config/database');
const team = require('./teams/router');
const player = require('./players/router');
const match = require('./matches/router');

const app = express();

app.get('/', (req, res)=>{
    res.send('Responsing');
});

app.use(express.json());

app.use('/team', team);
app.use('/player', player);
// app.use('/match', match);


const PORT = process.env.PORT || 3000;

app.listen(PORT, async()=>{
    console.log(`Server is listening on port ${PORT}`);
    try {
        await cricketDB.authenticate();
        console.log("Connection has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
});