# Weather Service

### Live example

you can see an example of this live hosted with heroku at https://polar-sea-8595.herokuapp.com/

### Installation

This service uses gulp for the build pipeline. You will need gulp installed globally to run it 

```
npm install -g gulp
```
with gulp installed, you should just be able to:
```
npm install
gulp
```
and that will install bower, run tests, lint code and run the app through nodemon

### Features

 * use path /weather/:location/:time to obtain weather data for given location
 * uses forecast.io for weather data
 * uses google geocoding for location
 * uses bootstrap for basic styling
 * returns json if you pass json over get ( /weather/sydney?json )

### Todo

 * improve view engine
 * bundle frontend code 
 * integration and acceptance tests
 * cache responses from services and retry on error
