# Use to image for node js
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies using yarn
RUN yarn install

# Copy app source code
COPY . .

# Copy the .env.docker file to .env
COPY .env.docker .env

# Build the app
RUN yarn build

# Expose port and start application
EXPOSE 5001

CMD ["yarn", "start"]
