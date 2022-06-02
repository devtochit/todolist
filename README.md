# Instant JS App Boilerplate
A JS app boilerplate to instantly test or prototype something
using webpack-dev-server and html-webpack-plugin with minimum configs.

in simple words if you want to quickly test some npm library or prototype a JS app instantly
with live-reloading in zero-config, this small pre-configured project can help.

## Clone the repo
clone the repo, install its dependencies and
don't forget to **rename** the `project directory` and `package.json` file
```console
$ git clone https://github.com/madmadi/instant-js-app-boilerplate
$ cd instant-js-app-boilerplate
$ npm install
```

## Start dev server
to develop and preview your app run the command below to start dev-server
with live-reladoing at `localhost:8080`
```console
$ npm run serve
```

## Other scripts
below scripts may would be helpful
```console
$ npm run lint # run eslint to lint the /src
$ npm run lint:fix # auto fix lint issues
$ npm run build # build the /src to /dist with production mode
```
Remove all hardcoded items from the tasks array.
Create a new JavaScript file for the new functionality.
Implement a function for adding a new task (add a new element to the array).
Implement a function for deleting a task (remove an element from the array).
Implement a function for editing task descriptions.
By default new tasks should have the property completed set to false and the property index set to the value of the new array length (i.e. if you're adding a 5th task to the list, the index of that task should equal to 5).
Deleting a task should update all remaining items' indexes, so they represent the current list order and are unique(i.e. if you're deleting the first task index 1 from the list, the index of the next task(2) should set to 1)..
All changes to the To Do List should be saved in local storage.