// 1. Import express
const express = require('express');
const app = express();

// 2. Set the port number
const PORT = 3000;

// 3. Set view engine to EJS
app.set('view engine', 'ejs');

// 4. Serve static files from 'public' folder
app.use(express.static('public'));

// 5. Dynamic Data (You can customize this later)
const data = {
    name: "Karan",
    title: "Web Developer",
    about: "I love building modern and responsive websites.",
    email: "karanveera772004@email.com",
    projects: [
        { name: "Fake News Detection", description: "Detects fake news using deep learning." },
        { name: "Student Performance Prediction", description: "Predicts student results using machine learning." },
    ],
    github: "https://github.com/Vortex1234-cpu",
    linkedin: "https://linkedin.com/in/www.linkedin.com/in/karan-v-937b2129b",

};

// 6. Define the homepage route
app.get('/', (req, res) => {
    res.render('index', { data });
});

// 7. Start the server
app.listen(PORT, () => {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
});


app.use(express.static('public'));
