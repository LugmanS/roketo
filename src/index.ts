import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello form Roketo");
});

app.listen(PORT, () => console.log('Server started and listening at PORT:', PORT));