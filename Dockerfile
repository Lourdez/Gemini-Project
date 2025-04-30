# Step 1: Build the Vite React App using Node.js
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Vite app for production
RUN npm run build

# Step 2: Use Nginx to Serve the Built Files
FROM nginx:alpine

# Remove default Nginx HTML directory
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files from the build stage to Nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]