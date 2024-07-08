// server.js

// module type import ----> add type: module in package.json
import express from 'express';
import dotenv from 'dotenv';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready!');
});

app.get('/api/jokes',(req, res) => {
    const jokes = [
        {
            id: 1,
            value: 'Why did the chicken cross the road? To get to the other side!'
        },
        {
            id: 2,
            value: 'Why did the chicken cross the road? To get to the other side!'
        },
        {
            id: 3,
            value: 'Why did the chicken cross the road? To get to the other side!'
        }
    ]

    res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))