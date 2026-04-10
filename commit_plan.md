# Git Commit Execution Plan

All application files have been built locally and we are now tracking them into version control progressively to span multiple days.


- [x] **Stage 1 (Initial Setup):** Commit the initial project structure, `commit_plan.md`, and `executable_commands.md`.
  - *Command to be run: `git add <files> && git commit -m "Initial setup and assignment documentation"`*

- [x] **Stage 2 (Frontend):** Commit the entire `todo-frontend/` directory showing React UI work.
  - *Command to be run: `git add todo-frontend/ && git commit -m "Implemented React frontend UI and CSS styling"`*

- [x] **Stage 3 (Backend):** Commit the entire `todo-backend/` directory marking the completion of API integration.
  - *Command to be run: `git add todo-backend/ && git commit -m "Added Node.js Express Backend and MongoDB connection logic"`*

- [x] **Stage 4 (Dockerization):** Commit the multi-stage `Dockerfile` and `docker-compose.yml`.
  - *Command to be run: `git add Dockerfile docker-compose.yml && git commit -m "Added Docker support: multi-stage Dockerfile and docker-compose"`*

- [x] **Stage 5 (Orchestration):** Commit the `k8s/` folder showing the final deployment mapping.
  - *Command to be run: `git add k8s/ && git commit -m "Added Kubernetes deployment and service manifests"`*
