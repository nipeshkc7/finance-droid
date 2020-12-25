const serverless = require('serverless-http');
const express = require('express');
const quote = require('@stonksjs/quote');

const app = express();

app.get('/', (req, res) => {
  res.send('service is alive');
});

app.get('/get-stock-price', async(req, res) => {
  const symbol = req.query.symbol;

  if(!symbol){
    return res.status(400).end('No symbol specified');
  }

  try{
    const data = await quote(symbol);
    res.json(data);
  } catch(err){
    res.end(`Error finding the stock. Please try a different symbol ! ERR: ${err.message}`);
  }
});

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
  console.log(`App listening on port: ${port}`);
})

module.exports.handler = serverless(app);
