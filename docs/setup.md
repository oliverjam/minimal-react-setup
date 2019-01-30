# Parcel Setup for React

This is a guide for setting up a React app to be bundled with [Parcel](https://parceljs.org/) 📦. We'll also configure ESLint and Jest.

If you want a more detailed explanation of what Parcel does then have a look at the [Parcel document](./parcel.md).

### Install

1.  `npm init -y` to initialise your repo
2.  `npm i -D parcel-bundler @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties` to install dev dependencies
3.  `npm i react react-dom` to install dependencies
4.  Create `.babelrc` file containing:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

Parcel will automatically use Babel to transpile all ES6 and React syntax out of the box, but we want to use a new feature (class properties), so we need to tell Parcel to use an extra plugin.

5.  Create an `index.html` file containing:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="index.js"></script>
  </body>
</html>
```

Parcel will use this as an 'entrypoint' to your app. It'll find the `index.js` script in there and follow all the `import`s to bundle everything. Then it'll replace the `index.js` with the final JS bundle when it outputs the `dist` folder.

6.  Create `index.js` with your react setup:

```js
import React from "react";
import { render } from "react-dom";

const App = () => <h1>Hello World</h1>;

render(<App />, document.getElementById("root"));
```

7. Setup your build scripts in `package.json`:

```json
{
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

8. Run `npm run dev` to start the development server.

### Test Setup

We need a few extra things to get Jest working with our ES6+ and React code.

1.  `npm i -D jest` to install testing dependencies
2.  Add `"test": "jest --watch"` to your npm scripts in `package.json`

Jest will read the `.babelrc` file to know what presets/plugins it should use.

#### File imports

Parcel allows us to [import non-JS files](https://parceljs.org/assets.html) like CSS or images. Unfortunately Jest doesn't use Parcel, so we need to help it understand these imports.

Create a directory called `__mocks__`, with two files inside:

`fileMock.js`:

```js
export default "whatever-string";
```

`styleMock.js`:

```js
export default {};
```

Finally we need to tell Jest to use these mocks for the file types we are importing. Add this to the top level of your `package.json`:

```json
"jest": {
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
  }
}
```

### Linting Setup

**Note:** make sure you don't have ESLint installed globally (`npm rm -g eslint`), otherwise you can get really weird errors. If you still get errors after uninstalling try restarting your editor.

1.  `npm install -D eslint babel-eslint eslint-plugin-import eslint-plugin-react eslint-config-react-minimal` to install dev dependencies
2.  create `.eslintrc` file with:

```json
{
  "extends": ["eslint:recommended", "react-minimal"]
}
```

I've packaged up all the necessary config into [eslint-config-react-minimal](https://github.com/oliverjam/eslint-config-react-minimal). Check out the readme if you want more information.

### .gitignore

Run `npx gitignore node` to generate a JS-focused `.gitignore` file. You may want to add the `dist/` directory to it, as Parcel will re-generate this on every build from your source files.
