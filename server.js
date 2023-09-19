
// server
 const express = require('express');
 const app = express();
 const port = 3000;

 const path = require('path');

 const publicFold = path.join(__dirname, 'public');
 app.use(express.static(publicFold)); // to serve static files from the "public" directory

 app.get('/',(req, res) => {
          res.sendFile(path.join(__dirname, "index.html"));
 });
 
 app.listen(port, () =>{
          console.log('Server is starting at port 3000')
 });