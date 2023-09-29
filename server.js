const app = require('./server'); // Import express app
const PORT = process.env.PORT || 3000; // Set port to 3000

app.listen(PORT, () => {
    console.log(`Server is on port ${3000}`);
});
