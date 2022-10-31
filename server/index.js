const express = require("express");
const app = express();
const port = 5000;
const {MongoClient} = require('mongodb');
var cors = require('cors')

app.use(cors())

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb://mongo:27017/todo";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
app.get("/", (req, res) => {
    res.send("Hello There! It's todo APP");
    main();
});

app.post("/set",(req,res) => {
    console.log(req);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
