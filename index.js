import express from "express";
const app = express();

app.use((req, res, next) => {
    // res.json({ message: "Hello from Express!" });
    console.log(req.method)
    next();
});

app.get('/', (req, res) => {
    res.json({ message: 'Taking info from login page' });
});

import notFound from "./src/middlewares/not-found.js";
app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});