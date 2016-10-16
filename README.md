# A2dyn

> a project to dynamically load an angular2 module and components from a remote web server using only strings
> * angular2 module with multiple angular2 components living on a remote server
> * config is a json object.
> * config identifies the url to the module
> * config identifies the desired component
> * compiles the module on the fly using angular2 compiler

[![Join the chat at https://gitter.im/misc-tech/a2dyn](https://badges.gitter.im/misc-tech/a2dyn.svg)](https://gitter.im/misc-tech/a2dyn?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

needs docs to explain, but the magic happens [here](https://github.com/datumgeek/a2dyn/blob/master/src/app/compose/compose.component.ts#L22-L45)

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

the remote components are loaded using the amd (requirejs) implementation provided by the dojo library included
when including the esri javascript api from the ESRI CDN.

this loader is used to load the bundles created by webpack and also the module that is to be loaded dynamically.

i wanted the remote module and components to be able to use the libraries already loaded via webpack, so i created an
export mechanism that publishes `@angular/core` and other angular libraries.

***model injection*** allows the initial state for the component to be passed in.  eventually, we'll also save this state when shutting the app down, so we can rehydrate it later if desired.

![image](https://cloud.githubusercontent.com/assets/22680176/19414755/e5fe6a9e-9314-11e6-8855-8266f449af69.png)

> * 1: for this prototype, the SessionService is used to obtain the list of components to display.
> * 2: the ***module*** is the angular2 module that defines the components.  ***the module and its components can live on any server***
> * 3: the ***model*** is injected into the component if it has a ***setDynState*** function defined

![image](https://cloud.githubusercontent.com/assets/22680176/19414940/a849fbbc-931b-11e6-9e3f-42708d43c439.png)

> the above is the CustomerListComponent
> * 1: the ***html template*** binds to ***dynState property*** using the ***elvis operator*** (so it doesn't throw an exception if it isn't defined)
> * 2: the dynState property is defined
> * 3: the setDynState function is defined - this receives the state when the component is instantiated

And voila :tophat: :rabbit2:
==============

![image](https://cloud.githubusercontent.com/assets/22680176/19414947/1b971000-931c-11e6-921b-7fc2d7c14597.png)

works with multiple components
--------------

> * first and third are the same (CustomerListComponent), but passed in a different state (which contains the message)
> * second is a different one (CustomerDetailComponent), which defines its template in an external html file (this must be specified with an absolute (not relative) url

the config:

![image](https://cloud.githubusercontent.com/assets/22680176/19414956/542a5800-931c-11e6-8993-9fdf17f21857.png)

and the resulting display:

![image](https://cloud.githubusercontent.com/assets/22680176/19414961/8cb1c8ac-931c-11e6-8f2f-16cc569addac.png)

> the tricky bit is creating the ***app-compose*** component.
> * using it is really easy.
> * the ***shell*** below, loops through the views in the json object and instantiates a compose object for each

![image](https://cloud.githubusercontent.com/assets/22680176/19414971/d2af9244-931c-11e6-9cb1-25b4a56f20e3.png)

## additional notes

to test the static content, browse to [http://localhost:9000/src/views/myPage/myPage.html](http://localhost:9000/src/views/myPage/myPage.html)


## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
