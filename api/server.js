const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "/dist")));
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "/dist", "index.html"))
);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));