# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml (if available) first to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Install project dependencies
RUN pnpm install

# Copy the rest of your project files
COPY . .

# Expose the port your app runs on (replace 3000 with your app's port if different)
EXPOSE 5173

# Command to run your application
CMD ["pnpm", "run", "dev"]
