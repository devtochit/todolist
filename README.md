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