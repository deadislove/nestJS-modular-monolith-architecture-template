# -------- Stage 1: Build environment --------
FROM node:22.14 AS builder

# Install build tools required for native modules (e.g., sqlite3, mysql, mysql2)
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all dependencies including native modules
RUN npm install

# RUN npm install sqlite3 --save

# Copy the entire application code into the container
COPY . .

# Build the application (e.g., NestJS -> dist folder)
RUN npm run build

# -------- Stage 2: Clean production image --------
FROM node:22.14

# Set working directory in the final production image
WORKDIR /usr/src/app

# Copy built application and installed modules from the builder stage
COPY --from=builder /usr/src/app .

# Set environment variables (can be overridden at runtime)
ENV PORT=3000
ENV DB_TYPE=sqlite
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USERNAME=''
ENV DB_PASSWORD=''
ENV DB_NAME=''

# Expose the port your app runs on
EXPOSE 3000

# Define the default command to run your application
CMD ["npm", "run", "start:prod"]