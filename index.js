const express = require('express')
const { MongoClient } = require('mongodb');
// const {PORT}  = require('dotenv')
const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json())


const url = "mongodb+srv://restaurantbooking:root@cluster0.cbkcrne.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });




app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/api', async (req, res) => {
    try {
        const collection = client.db('Restaurants').collection('RestaurantsList');
        const allData = await collection.find({}).toArray();

        res.send(allData);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Error retrieving data' });
    }
});

app.post('/RestuarantList', async(req,res) =>{
    try{
        const collection = client.db('Restaurants').collection('Barbeque Nation');
        const restList = await collection.insertOne({"Name":"Helapuri Restuarant",
        "Food items":[{"item":"Veg Fried rice","Favourites":false}, {"item":"Chicken Fried rice","Favourites":false}, {"item":"Chilli Chicken","Favourites":false}, {"item":"Chicken Manchurian","Favourites":false}],
        "Availability":true}
        )
        res.send(restList)
        console.log(restList)
    }
    catch(error){
        console.log(error);
    }
});

app.put('/updateList', async(req,res) =>{
    try{
        const collection = client.db('Restaurants').collection('RestaurantsList');
        const restList = await collection.updateMany({
            "Name":"Cascades"},
            {$set :{"Food items":[{"item":"Veg Fried rice","Favourites":false}, {"item":"Chicken Fried rice","Favourites":false}, {"item":"Chilli Chicken","Favourites":false}, {"item":"Chicken Manchurian","Favourites":false}] }}
        )
        res.send(restList)
        console.log(restList)
    }
    catch(error){
        console.log(error);
    }
});

app.delete('/deleteList', async (req, res) => {
    try {
        const collection = client.db('Restaurants').collection('RestaurantsList');
        const allData = await collection.deleteMany({
            "name":"Alpha"
        });

        res.send(allData);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Error retrieving data' });
    }
});

app.listen(4000, async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully!');
        console.log("http://localhost:4000")
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})