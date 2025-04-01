# User Activity Logging System

A scalable event-driven microservice architecture using Kafka for real-time message processing and MongoDB for persistent storage, with REST API for log retrieval.

## 📋 Overview

- **Producer Service**: Receives user activity data via API and publishes messages to Kafka
- **Consumer Service**: Consumes messages from Kafka and stores them in MongoDB
- **API Endpoints**: Retrieve stored logs with pagination and filtering capabilities

![System Architecture](https://via.placeholder.com/800x400.png?text=Kafka+%2B+MongoDB+Architecture)

## ✨ Features

- **Real-time Processing**: Kafka-based message queue for async processing
- **Persistent Storage**: MongoDB integration for reliable data storage
- **REST API**: 
  - Pagination support
  - Filtering by username, activity type
  - Sorting by timestamp
- **Dockerized Services**: Easy container deployment
- **Scalable Design**: Ready for Kubernetes deployment

## 🛠 Technologies

- **NestJS** - Backend framework
- **Apache Kafka** - Message broker
- **MongoDB** - Database storage
- **Docker** - Containerization
- **Kubernetes** - Orchestration (optional)
- **AWS/GCP** - Cloud deployment (optional)

## 📦 Prerequisites

- Node.js v18+
- Docker & Docker Compose
- Kafka (included in Docker setup)
- MongoDB Atlas account or local MongoDB
- NestJS CLI (`npm i -g @nestjs/cli`)

## 🚀 Installation

```bash
# Clone repository
git clone https://github.com/yourusername/user-activity-system.git
cd user-activity-system

# Install dependencies
cd producer && npm install
cd ../consumer && npm install
```

## ⚙ Configuration

Create .env files in both producer and consumer directories:


# producer/.env

```env
KAFKA_BROKER=kafka:9092
PORT=3000
```
# consumer/.env

```env
KAFKA_BROKER=kafka:9092
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.u7zw4ny.mongodb.net/logs
PORT=3001
```

## 🏃 Running Locally

```bash
# Start Kafka and dependencies
docker-compose up -d
```

## 📡 API Documentation

# Post http://localhost:3000/user-activity

- Send a user log through kafka

# Example Body:

```json
{
    "userName" : "ahmed",
    "activityType" : "logout"
}
```


# GET http://localhost:3001/user-activity/logs

- Retrieve paginated and filtered logs
- 
# Query Parameters:

page - Page number (default: 1)

limit - Items per page (default: 10)

userName - Filter by username

activityType - Filter by activity type

sort - Sort direction (asc or desc)

# Example Request:

```bash
GET /logs?page=2&limit=5&userName=john&sort=desc
```

# Example Response:

```json
{
  "data": [
    {
      "userName": "john",
      "activityType": "login",
      "processedAt": "2024-03-20T12:34:56.789Z"
    }
  ],
  "pagination": {
    "page": 2,
    "limit": 5,
    "totalItems": 23,
    "totalPages": 5,
    "hasNextPage": true
  }
}
```

