# Start Project
This is a start setup to begin a project without the need to worry to much about dependecies.

Initial setup includes:
* Bootstrap
* FontAwesome
* A bunch of metas
* ES6 support


## Instructions

### To use the project you need Gulp and Babel;

* [Gulp](http://gulpjs.com/)
```
npm install -g gulp
```
* [Babel](https://babeljs.io/)
```
npm install -g babel-cli
```

### Install dependencies
```
npm install
```

That will create a `node_modules` folder that includes all the dependencies.
This folder is ignored with `.gitignore` and will not be included in the versioning.



## Run the project

### To run the project just do this:
```
npm start
```
Now you have your project running on: [localhost:8080](http://localhost:8080/)


### To get out, do that: CTRL+C or CMD+C



## Observations

To add Javascript plugins, is necessary to add on gulpfile the path. Thats needed because of the load order.



# Tests

## Instructions

* Run:
```
npm test
```

* open [localhost:9876](http://localhost:9876/)

* Have fun
