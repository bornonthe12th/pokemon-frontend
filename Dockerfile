# Use a node runtime as the base image
FROM node:19.7-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the dependencies using npm
RUN npm install

# Copy the rest of the app files into the container
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]