---
title: "YAK - Yet Another Kafka"
date: 2025-01-01
github: "https://github.com/hariomkhonde108/yak"
draft: false
tags: ["Python", "FastAPI", "Redis", "Distributed Systems"]
---

YAK is a fault-tolerant, distributed microservice message broker engineered with a zero data loss guarantee.

### Consensus & Replication
The broker utilizes Redis-based atomic leader election and synchronous replication across nodes. To maintain strict consistency, I implemented a High Water Mark (HWM) consensus protocol. This ensures messages are only committed after follower acknowledgment, entirely preventing inconsistent reads during leader failures.

### Failover Recovery
The custom producer-consumer clients feature automatic leader discovery and seamless failover. In testing, the system demonstrated full recovery at scale even after catastrophic leader crashes.