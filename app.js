const express = require('express');

const app = express();


app.get("/", (req, res)=>{
  // console.log(req);
  // res.send("Hello, world!");
  res.json({
    message: "This is a Rabin page"
  })
})

app.get('/about',(req, res) => {
  res.json({
    message: "This is a about page"
  })
})

app.listen(3000, ()=>{
  console.log('listening on port 3000');
});