# Use an official Node.js image from the Docker Hub, matching your Node.js version
FROM node:20.10.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm i axios

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use a lightweight web server to serve the static files
# Here, we're using `serve`, but you can also use `nginx` or another server.
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build"]
