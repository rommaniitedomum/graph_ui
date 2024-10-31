const PORT = 3000;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!");
});



app.use(require("./routes/salesMapRoute"));
app.use(require("./routes/visitorsRoute"));
app.use(require("./routes/customersRoute"));


app.listen(PORT, () => console.log('서버이즈 러닝 '));

