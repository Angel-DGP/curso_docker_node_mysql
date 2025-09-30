require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const jwlSecret = process.env.JWT_SECRET
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API BACKEND WORKED!');
});
console.log('JWT Secret:', jwlSecret);
console.log('Port:', port)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});