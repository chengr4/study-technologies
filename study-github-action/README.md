# Github Action

## What is Github Actions?

- Platform to automate developer workflows

Workfow Example:

Users report bugs => Assign issues => Fix issue => Merged code => Test => Build => Deployment

## How Github Actions automate workflows?

- When something happens IN or TO the repository, automatic ACTIONS are executed in response

1. Listen to Event: PR created, Issues created, PR merged, Contributer joined
2. Trigger WorkFlow: Sort, Label, Assign it, Reproduce

## CI/CD with GitHub Action

Commit code => Test => Build => Push => Deploy

### Sytax of Workflow File

```yml
name: (optional) The name of Workflow

# Events to trigger the workflow
# When branch master is pushed or pull requested, trigger the the following workflow
on:
  push:
    branch: [ master ]
  pull_request:
    branch: [ master ]
    
# Triggered Workflow
#
jobs:
  build: this can be arbitrary (name it yourself)
  
    runs-on:
      steps: 
      - uses: actions/checkout@v2
```

`uses`: Selects an action

`run`: Runs a command-line command

## Runner

In order to run the jobs, we must specify a runner for each of them

- Is a erver that listens for available jobs
- It runs 1 job at a time
- Github hosted or self hosted
- Report progress, logs and result to Github

```yml
jobs:
  build:
  runs-on: ubuntu-latest # the runner
```

## Job

- Is a set of **steps** executed on the same runner

## References

1. [TechWorld with Nana; GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker (2020.10)](https://youtu.be/R8_veQiYBjI)
2. https://github.com/actions
