# Study Docker

## Installation

1. Install Docker Desktop

> docker cli will be also installed

### Install and Postgres Image

1. Go to dockerhub and search `postgres` and use offical one
2. Pull the image: `docker pull postgres:<tag>`
3. Run `docker images` to check it 

## Flows

```mermaid
flowchart LR
  id1("Built code + prepared empty image")
  id2("prepared image")
  id3("AWS ECR (image storage)")
  id1 -->|build image| id2
  id2 -->|store in| id3

```

## Attributes

- Own isolated env

## Adavantages

1. E.g. To set up 10 JS applications only needs 10 times docker commands, does not need set up each by each
2. Run the same app with 2 different versions

## Before Containers vs After Containers

Before:

```mermaid
flowchart LR
  dev(*Developer* Atifacts + setting instructions) --> op(*Operations* Setting up the env to deploy those applications)

```

After:

```mermaid
flowchart LR
  container(Java App Container) -- docker command --> machine(Get done)
```

## Q/A

Q: What is a Container?

A: 

- We can start multiple container from 1 single image
- Layers of images: E.g. Linux base image alpine + application image postgres  on top of it
- A way to package application with all the necessary dependencies and configuration
- Protable artifact, easily shared and moved around 

Q: Where do cantainers live?

A: Container repository (public: Docker Hub)

Q: Docker vs Virtual Machine

A:

| Docker | Virtual Machine |
| ------ | --------------- |
| Virtualize applications layer| Virtualize both applications layer and OS Kernel |
| small size | big size |
| limit on OS | limitless on OS|

## Commands

### docker

E.g.

| Command | Description |
| ------- | ----------- | 
| `docker ps` | See all running docker containers |
| `docker ps -a` | See all containers (running and not running) |
| `docker images` | See images |
| `docker run -d <image>` | Run docker at the background (detached) |
| `docker run -p <port of host:port of container> <image>` | `-p`: bind ports |
| `docker run -p <x:x> -e <env_variable> <image_tag>` ||
| `docker start <ID or name of the container>` | Start the container |
| `docker stop <ID or name of the container>` | Stop the container |
| `docker pull <image>:<tag>` | pull image from internet |
| `docker exec -it <container_name or _id> [/bin/sh (or) psql -U <USER_NAME>]` | Go to shell in the container, `-it:` interactive TTY session |
| `docker logs <container_name or _id> -f ` | Logs in container, `if`: living logs |
| `docker build --tag <name:version> <folder>` |  |
| `docker rm <image_ID>` | Remove a running container |
| `docker rmi <image_ID>` | Remove a image |
| `docker container inspect <container_name>` | Check the network settings |
| `docker network ls` | eg. bridge |
| `docker network inspect bridge` | Check who is using bridge network |
| `docker network create <name_to_create>` | Create the own network eg to bind two standalone containers |

### docker Compose

| Command | Description |
| -------| ------------ | 
| `docker compose up` | |
| `docker compose down` | Remove all existing containers and networks |

## References

1. [TechWorld with Nana; Docker Tutorial for Beginners [FULL COURSE in 3 Hours] (2020.10)](https://youtu.be/3c-iBn73dDE)
