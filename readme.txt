
In windows once mongo has been installed it is possible to customize the meteor database
to work in the mongo environment

SET MONGO_URL=mongodb://localhost:27017/name_of_the_db
meteor


In Linux it is easier

MONGO_URL=mongodb://localhost:27017/meteorprojectname meteor run



To run this application go to the reactive folder and type:

meteor --port $IP:$PORT

This will run the app and you will be told the url

the MONGO_URL can also be:
mongodb://diegomary:atreius@ds061371.mlab.com:61371/diegomary88

It is then possible to run the following:

meteor npm install --save babel-runtime

then

MONGO_URL="mongodb://diegomary:atreius@ds061371.mlab.com:61371/diegomary88" meteor --port $IP:$PORT 

in such case we use the mongolab instance and we free the application from the burden of having Mongo in local



