const express = require('express');

const app= express();

// app.use("/", (req, res) =>{
//     res.send("Namaste from the Dashboard! I am Admin of the server");
// });
// app.use("/hello/2", (req, res) => {
//     res.send("ndbb jbccbdswcbcbcvbd");
// });
// app.use("/hello", (req, res) => {
//     res.send("Hello hello hello");
// });

app.get("/user", (req, res) => {
    res.send("firstname: Ayush,  lastname: Verma ");
});

app.post("/user", (req, res) => {
    res.send("Data has been added successfully");
});
app.delete("/user", (req, res) => {
    res.send("Data has been deleted successfully");
});

app.patch("/user", (req, res) => {
    res.send("Data has been updated successfully");
});

app.put("/user", (req, res) => {
    res.send("Data has been replaced successfully");
});

app.head("/user", (req, res) => {
    res.send("Data has been checked successfully");
});

app.listen(7777, () =>{
    console.log("Server is successfully started on port number 7777");
});