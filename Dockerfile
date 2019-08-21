FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install request
RUN npm install express
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

ARG Host="provide a name through env"

ENV HOST $Host

EXPOSE 8080
CMD ["node" ,"node.js"]
