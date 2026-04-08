# Stage 1: Build the Vite React Frontend
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY todo-frontend/package*.json ./
RUN npm install
COPY todo-frontend/ ./
RUN npm run build

# Stage 2: Serve the Frontend via Node.js Express Backend
FROM node:20-alpine
WORKDIR /app/backend
COPY todo-backend/package*.json ./
# Install only production dependencies
RUN npm install --production
COPY todo-backend/ ./
# Copy compiled frontend from Stage 1 into backend's generic public folder
COPY --from=frontend-build /app/frontend/dist ./public

EXPOSE 5000
CMD ["node", "server.js"]
