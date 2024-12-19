import express from "express";
import logger from "./logger.js";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.json());     // accept any json data
const morganFormat = ":method :url :status :response-time ms";
app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );
  

let users = ["Aditya", "Ankit", "Rohit"];
let data = [];
let id=1;

app.post('/data', (req, res) => {
    logger.warn("Post request made!");  // info,error,warn,debug
    // data.push(req.body);
    let name = req.body.name;
    let price = req.body.price;
    data.push({id:id++, name:name, price:price});
    res.status(200).send(`${name} Added`);
    console.log(data);
})

app.get('/data', (req, res) => {
    res.status(200).send(data);
    console.log(data);
})

app.put('/data/:id',(req, res) => {
    let _id = req.params.id;
    let newName = req.body.name;
    let newPrice = req.body.price;

    const find = data.find(d => d.id == parseInt(_id))
    if(!find){
        return res.status(404).send("Data not found");
    }else{
        find.name = newName;
        find.price = newPrice;
        return res.status(200).send(find);
    }
})

app.delete('/data/:id',(req, res) => {
    const _id = req.params.id;
    const index = data.findIndex(d => d.id == parseInt(_id))
    if(!index){
        return res.status(404).send("Data not found");
    }
    else{
        data.splice(index, 1);
        return res.status(200).send("Data deleted");
    } 
})

app.get('/data/:id',(req, res) => {
    const _id = req.params.id;
    const find = data.find(d => d.id == parseInt(_id))
    if(!find){
        return res.status(404).send("Data not found");
    }
    else{
        return res.status(200).send(find);
    } 
})

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)    
});