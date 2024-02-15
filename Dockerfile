# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the port that Storybook runs on
EXPOSE 6006

# Start Storybook when the container launches
CMD ["npm", "run", "storybook"]
