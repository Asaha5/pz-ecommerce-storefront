FROM node:14-alpine

# Create app directory
WORKDIR /app

# Installing dependencies
COPY package*.json /app/
RUN yarn install

# Copying source files
COPY . /app

# Building app
RUN npm run build
EXPOSE $PORT

# Running the app
CMD ["yarn", "run", "start"]