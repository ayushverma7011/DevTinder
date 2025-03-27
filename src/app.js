const express = require('express');

const app= express();

app.use((req, res) =>{
    res.send("Namaste from the Dashboard! I am Admin of the server");
});

app.listen(7777, () =>{
    console.log("Server is successfully started on port number 7777");
});