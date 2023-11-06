# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose a port if your app listens on a specific port
EXPOSE 3000

# Define the command to start your app
CMD ["npm", "run", "dev"]

