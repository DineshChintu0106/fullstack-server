const express = require('express')
// const {PORT}  = require('dotenv')
const cors = require('cors')
const app = express();
const PORT = 4000

app.use(cors())

app.get('/',(request,response) => {
    const data = [{name:'dinesh',age:23}]
    response.json(data)
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT} `)
})