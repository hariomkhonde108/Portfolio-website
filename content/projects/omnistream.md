---
title: "OmniStream"
date: 2026-01-01
live: "https://omnistream-flame.vercel.app/"
draft: false
tags: ["Golang", "Kafka", "PostgreSQL", "Docker", "Llama 3"]
---

OmniStream is a distributed real-time collaboration platform built with Go and React. It enables low-latency video conferencing, asynchronous file sharing, and utilizes secure JWT-based room authentication.

### Multi-Service Architecture
The entire application is containerized using Docker Compose, combining PostgreSQL, MinIO, and Apache Kafka for reliable, persistent, and reproducible deployments. The scalable storage architecture utilizes PostgreSQL and MinIO, alongside LiveKit webhooks, to manage room lifecycles and secure file delivery. 

### Real-Time AI Integration
To elevate the collaboration experience, I integrated Whisper and Llama 3 into the pipeline. This integration automatically transcribes meeting audio and generates AI-powered summaries and actionable insights in real time.