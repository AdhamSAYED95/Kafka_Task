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
