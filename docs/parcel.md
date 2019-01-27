# What Parcel does

We want to be able to write modular code using the [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) `import`/`export` syntax. We also want to be able to write modern ES6+ and custom React syntax (JSX).

Since browsers don't understand these things we need something to process our source files, transpile them with Babel and then bundle them together into files the browser understands.

Parcel automatically uses the [`@babel/preset-env`](https://babeljs.io/env/) and [`@babel/preset-react`](https://babeljs.io/docs/plugins/preset-react/) presets to transpile ES6+ and JSX. We've also added the `babel-plugin-transform-class-properties`(https://babeljs.io/docs/plugins/transform-class-properties/) plugin so we can write our class state without needing a constructor function.

Although Parcel defaults to using `@babel/preset-env` and `@babel/preset-react` Jest doesn't, which is why we had to install and specify them.

Your dev script (`parcel src/index.html`) will tell Parcel to use the `index.html` file as an 'entrypoint'.

This means Parcel will start there, find your JS file linked in a script tag, then follow the trail of `import`s until it has built up a 'tree' of your entire app.

Then it smushes all the files together in a smart way until it's left with a single JS file.

It copies your `index.html` file into a `dist` folder, along with the newly bundled JS file (which it also links in the new `index.html` for you).

If you import CSS or SVGs (or other resources Parcel understands) they'll get picked up too. The CSS will all be smushed together into one file and copied into the `dist` folder. Any SVG files will be copied across as they are (although they will get a hashed filename for caching purposes).

Try adding `--no-minify` to your build script before you run it. You can then open up the `dist` folder and look around. The JS Parcel produces will be weird (it has to use lots of IIFEs and closures to ensure modules are isolated correctly inside one big file) but it should be readable.
