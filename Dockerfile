# Use official Node.js image as base
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy only the package.json and package-lock.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the Next.js app (assumes build script is in package.json)
RUN npm run build

# Expose port 3000 for the app (default Next.js port)
EXPOSE 3000

# Set the environment variable for production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "run", "start"]