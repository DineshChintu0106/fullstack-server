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

        res.json(allData);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Error retrieving data' });
    }
});

app.listen(4000, async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB successfully!');
        console.log("server started")
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
})