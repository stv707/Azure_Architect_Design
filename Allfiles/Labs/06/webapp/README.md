# wwi-webapp Docker Setup

# Step 1 

Make sure you have cloned this repo

# Step 2 

`cd src/config/`

# Step 3 

`vim dbconfig.json` 

>> Change the user, password, server and port ( whichever needed )
>> server should be pointing to an actual SQL server that has WideWorldImporters DB ( can use IP Address )

>> Once you done the changes, return to root directory  `cd ../../` 

# Step 4 

Run the docker build script to build docker image locally 

`chmod +x docker_build.sh   && ./docker_build.sh <Docker_HUB_ID>` 

# Step 5

Verify the image is build 

`docker images` 

# Step 6 

Run the docker image with a container 

`docker run -d -p 80:3000 --name wwiwebapp <docker_id>/webapp:latest `

Make sure its up and Running

`docker ps` 


# Step 7 

Access the port 80 via a browser 


# Step 8 

We can upload the docker image to Docker HUB 

>> The App is hard coded with Server Address and Password, in Production, developers should use variable to pass this information to container

`docker login`

`docker push <DOCKER_HUB-ID>/webapp:latest` 

