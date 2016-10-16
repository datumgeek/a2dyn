# A2dyn

> a project to dynamically load angular2 module and components from a remote web server using only strings
> * angular2 module with multiple angular2 components living on a remote server
> * config is a json object.
> * config identifies the url to the module
> * config identifies the desired component
> * compiles the module on the fly using angular2 compiler

[![Join the chat at https://gitter.im/misc-tech/a2dyn](https://badges.gitter.im/misc-tech/a2dyn.svg)](https://gitter.im/misc-tech/a2dyn?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

At the point where i needed to load external content, i stopped using the angular-cli because i needed to modify the webpack.config.js so i could load the bundles with requirejs (actualy dojo's implementation)

## Getting Started

```bash
npm install -g webpack
npm install

# run each of the following in its own bash shell
#    or tack an & to the end to run it in the background
#    if you run it in the background, use kill -9 8888
#    (where 8888 is the process number returned when you ran the command)

webpack
webpack-dev-server
tsc --watch
```

the above is admittedly a bit hackish - but it will work so you can save files and then refresh the browser.

## a bit of explanation

![image](https://cloud.githubusercontent.com/assets/22680176/19414755/e5fe6a9e-9314-11e6-8855-8266f449af69.png)


## additional notes

to test the static content, browse to [http://localhost:9000/src/views/myPage/myPage.html](http://localhost:9000/src/views/myPage/myPage.html)


## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
