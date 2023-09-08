# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set a working directory within the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your NestJS application will run on
EXPOSE 3000

# Define the command to start your NestJS application
CMD ["npm", "start"]
