# We use node 10 - OLD ( its ok for DEMO )
FROM node:10.24

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies and mssql-tools for sqlcmd
COPY package.json .
COPY package-lock.json .
RUN npm install --only=production

# Bundle app source
COPY . .
EXPOSE 3000

# Change permission to make extra script exec
RUN chmod +x ./runme.sh

# Use entrypoint to trigger script
ENTRYPOINT /bin/bash ./entrypoint.sh