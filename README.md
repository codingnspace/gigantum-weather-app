# DC Metro or Bike Commute App

### Getting started
This project requires [Node.js](https://nodejs.org/en/)

1. Install dependencies: `npm install`
2. `npm start`
3. Navigate to [localhost:3000](http://localhost:3000/)

### NPM scripts
`npm start`
> Starts the babel-cli, watches your html and sass files for changes, and starts an express dev server with hot module replacement enabled.

`npm run dist`
> Generates an optimized build in the dist directory. It uses webpack to transpile, bundle, and minify the src as well as many other things, like inline css and inject hash numbers into html for optimal performance and automated cache-busting. For more info, see [Building - Webpack](#building---webpack).
There is an error in the macaddress node module. Add a var to index.js line 34. addressess = {}; => var addressess = {};

`npm test`
> Runs `jest`. Jest configurations are in the `package.json`. It will run in verbose mode with code coverage. You can run `npm test -- -u` if you need to update your snapshots.

`npm run lint`
> Runs `eslint src/js/**/*.js`. This just lints all your src files, including react components.

### Tooling

#### CSS Preprocessing - Sass
This uses a sass loader in webpack so you can just import your scss in your components. Webpack will inject these as style tags in dev mode so you get live reload of css. In production, it will inline `critical.scss` and append `app.scss` into your html for you.

#### Image importing - Webpack loaders
You can also import images directly in your components using Webpack's various loaders if you would like. You can do so the same way you would import any other file, like so.

`import logoImg from 'images/logo.svg';`

and reference in JSX: `<img src={logoImg}/>`

#### ES6 - Babel
This uses Babel for transpiling the build, it also uses `React`, `es2015`, and `stage-0` presets so I can play with the latest ES6 features.  It will strip the Flow types from the code when it compiles to AMD so that there is no issue at runtime in the browser.

#### Building - Webpack
Webpack and dojo used to not play nice together, but then I saw [https://github.com/lobsteropteryx/esri-webpack](https://github.com/lobsteropteryx/esri-webpack) which cleverly handled the esri dependencies as externals and built to AMD.  Now we have Webpack and dojo working together.  This also uses hot module replacement with gulp/browser-sync so if you edit your components, it can swap them out on the fly without reloading the whole page.

#### Testing - Jest (with Enzyme)
There are some sample tests under the `__tests__` directory. One of them uses react's test renderer to take snapshot's. It is just en example of how to set it up but snapshot's can be very useful and I highly recommend [reading more here](https://facebook.github.io/jest/docs/tutorial-react.html#content) about testing components. There is also an example using Enzyme to shallow render components. Enzyme provides a simple API for manipulating and making assertions on our rendered components.

See [Resources](#resources)


### Performance considerations
1. You should prerender your components by using the `prerender.js` script in the `scripts` folder. You can configure it there. This will prerender your react component and inject it into your html. Once react loads, it will mount to it and start from there.
2. Async assets when possible. The ArcGIS Javascript API is loaded with an async tag. It also will defer loading Esri's CSS until after the above the fold content loads to prevent blocking the rendering of `index.html`.
3. Inject `critical.css` into `index.html` so that above the fold content does not need another trip to the server to render properly, thus avoiding that annoying flash of un-styled content that some pages have. This is automatically handled by webpack already for you.

### Security
This has the ability to run in HTTPS since it uses protocol agnostic resources. It also has a Content Security Policy with the following configurations for local resources, which can be tweaked or removed from the app by modifying it in the head section of `src/index.html`.

```
script-src 'self' <domain> 'unsafe-inline' 'unsafe-eval';
style-src 'self' <domain> 'unsafe-inline';
```

### HTTP/2 & HTTPS
There are currently multiple options for HTTPS but only one for an HTTP/2 setup. The easiest way to run https is to run `npm run secure`.  It will load a browser sync server using https but will show as unsecure unless you have signed certs for localhost. The other option is to use [Caddy](https://caddyserver.com/).  It is really easy to install and configure.  This will run an HTTP/2 and HTTPS-enabled server for you once you generate some local self-signed certs.  Here is how to set that up.

1. [Download Caddy](https://caddyserver.com/docs/getting-started), you can also install with `brew install caddy` if you have homebrew installed. You will need atleast version `0.9`.
2. Run `sudo caddy` to start the caddy server, it is configured in the `Caddyfile`. Caddy is configured to use self-signed certs for local development, browsers will flag self-signed certs as untrusted but they are ok for local development.
3. [**Optional**] -Another option for self-signed certs is to set them up yourself. You can run the command `openssl req -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout cert.key -out cert.crt`, this will prompt you for a few questions and then generate the certs for you, this does require `openssl` to be installed and then you need to configure tls in the Caddfile like so: `tls cert.crt cert.key`. This is the same as step 2 except that you will not need to allow access each time you restart caddy.

Now your running HTTP/2 with automatic HTTPS enabled!! This does not do hot module replacement or live reload or anything like that, however, after you generate a build with `npm run dist`, you can run Caddy and test your app out on HTTP/2 and HTTPS.

#### Resources
* [React](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Flow](http://flowtype.org/)
* [React-Redux](http://redux.js.org/docs/basics/UsageWithReact.html)
* [Redux-Thunk](https://github.com/gaearon/redux-thunk)
* [Webpack](https://webpack.github.io/)
* [Jest](https://facebook.github.io/jest/)
* [Enzyme](http://airbnb.io/enzyme/)
* [ArcGIS JavaScript API](https://js.arcgis.com)
* [Content-Security-Policy Spec](https://www.w3.org/TR/CSP/)
* [Tutorial on Content-Security-Policy Meta tags](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
