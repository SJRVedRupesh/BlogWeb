# CI/CD Based Containerized Blog Website Deployment using Docker and Jenkins

## Technologies Used

- Node.js
- Express.js
- Docker
- Docker Compose
- Jenkins
- Nginx

---

## Project Structure

blog-project/

├── app/
│ ├── app.js
│ ├── package.json
│ └── Dockerfile
│
├── nginx/
│ └── default.conf
│
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── Jenkinsfile
└── README.md

---

## Containers

### Blog App Container
Runs the Node.js application on port 6000.

### Jenkins Container
Provides CI/CD automation and runs on port 8080.

### Nginx Container
Acts as a reverse proxy and exposes port 80.

---

## Ports

### Port 6000
Node.js application.

### Port 8080
Jenkins dashboard.

### Port 80
Nginx web server.

---

## Build Containers

docker compose -f docker-compose.dev.yml build

docker compose -f docker-compose.prod.yml build

---

## Start Containers

docker compose -f docker-compose.dev.yml up -d

docker compose -f docker-compose.prod.yml up -d

---

## Stop Containers

docker compose -f docker-compose.dev.yml down

docker compose -f docker-compose.prod.yml down

---

## View Logs

docker logs blog-app

docker logs jenkins

docker logs nginx