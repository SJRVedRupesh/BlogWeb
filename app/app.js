const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>CI/CD Based Containerized Blog Website</title>

        <style>
            *{
                margin:0;
                padding:0;
                box-sizing:border-box;
                font-family:Arial, sans-serif;
            }

            body{
                background:#f4f6f9;
                color:#333;
            }

            nav{
                background:#222;
                color:white;
                padding:20px;
                display:flex;
                justify-content:space-between;
            }

            nav ul{
                list-style:none;
                display:flex;
                gap:20px;
            }

            nav a{
                color:white;
                text-decoration:none;
            }

            .hero{
                text-align:center;
                padding:80px 20px;
                background:white;
            }

            .section{
                width:80%;
                margin:30px auto;
                background:white;
                padding:30px;
                border-radius:10px;
                box-shadow:0 0 10px rgba(0,0,0,0.1);
            }

            .tech-list{
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(150px,1fr));
                gap:15px;
                margin-top:20px;
            }

            .tech{
                background:#e9ecef;
                padding:15px;
                text-align:center;
                border-radius:8px;
            }

            footer{
                background:#222;
                color:white;
                text-align:center;
                padding:20px;
                margin-top:30px;
            }
        </style>
    </head>

    <body>

        <nav>
            <h2>DevOps Blog</h2>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#tech">Technologies</a></li>
            </ul>
        </nav>

        <section class="hero">
            <h1>CI/CD Based Containerized Blog Website Deployment</h1>
            <br>
            <p>
                A beginner-friendly DevOps project using Docker,
                Jenkins, Docker Compose and Nginx.
            </p>
        </section>

        <section class="section" id="about">
            <h2>About Project</h2>
            <br>
            <p>
                This project demonstrates Continuous Integration
                and Continuous Deployment (CI/CD) for a Node.js
                Blog Website. The application is containerized
                using Docker and automatically deployed through
                Jenkins pipelines.
            </p>
        </section>

        <section class="section" id="tech">
            <h2>Technologies Used</h2>

            <div class="tech-list">
                <div class="tech">Node.js</div>
                <div class="tech">Express.js</div>
                <div class="tech">Docker</div>
                <div class="tech">Docker Compose</div>
                <div class="tech">Jenkins</div>
                <div class="tech">Nginx</div>
            </div>
        </section>

        <footer>
            © 2026 CI/CD Containerized Blog Website Project
        </footer>

    </body>
    </html>
    `);
});

app.listen(6000, () => {
    console.log('Server running on port 6000');
});