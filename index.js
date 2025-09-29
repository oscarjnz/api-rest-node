import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('Tacking info from login page');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});