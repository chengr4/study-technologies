# Study Docker

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

- A way to package application with all the necessary dependencies and configuration
- Protable artifact, easily shared and moved around 

Q: Where do cantainers live?

A: Container repository (public: Docker Hub)
