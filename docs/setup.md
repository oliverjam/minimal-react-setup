# eslint-config-react-minimal

A very minimal set of rules to help you get started writing React.

## Usage

ESLint requires anything this config depends on to be installed by the end-user (sorry).

```shell
npm install -D eslint babel-eslint eslint-plugin-import eslint-plugin-react eslint-config-react-minimal`
```

Then create an `.eslintrc` file containing:

```json
{
  "extends": ["eslint:recommended", "react-minimal"]
}
```

This will enable the (optional) recommended default ESLint rules, plus the React specific rules from this config.

### What am I installing?

1. [ESLint](https://eslint.org/docs/) itself
1. [babel-eslint](https://github.com/babel/babel-eslint): lets ESLint understand any valid Babel syntax (e.g. JSX/ES6+)
1. [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import): Ensures your imports/exports are valid and won't result in errors
1. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): provides all the React specific rules
1. eslint-config-react-minimal: this config, which handles all the set-up for the previous packages automatically

## Philosophy

eslint-plugin-react has a _ton_ of rules, some of which are either questionably useful or designed to help enforce certain patterns in large projects.

If you're just starting out in React all you really need are simple rules to help correct typos, ensure your imports are correct and remind you of certain React conventions.

This config is an alternative to figuring out which of the 50+ eslint-plugin-react rules to disable 🙃.

## Config

There are a few bits of config you need to remember setting up ESLint, so these are set for you.

### Environments

ESLint doesn't know where your code is going to run, so it can't make assumptions about what may be available in the environment. This config configures browser, ES6 and Jest environments. This means the linter won't complain that `fetch` or `test` are undefined, since it knows they're available on the global scope.

## Rules

Look in [`index.js`](./index.js) for a full list of all the enabled rules. There are comments linking to the documentation for each rule if you're curious what they do.

Here are a few examples of problems this config will highlight:

### Bad imports

If you haven't used ES Modules much before you might confuse default/named imports/exports, or forget to export stuff from a file you're importing. You'll get a linter error for lots of these mistakes. For example:

```js
// src/button.js
export default function Button({ children }) {
  return <button>{children}</button>;
}

// src/index.js
import { Button } from './button';
// error as Button was _default_ exported
// but is being _named_ imported
```

### Missing React import

It can be easy to forget to import React into any file that renders components.

This is because Babel turns JSX like `<Button>Submit</Button>` into function calls like `React.createElement(Button, {}, 'Submit')`.

The transpiled version makes it obvious that you need React in scope, but if you forget the linter will warn you.

### Forgetting to return in `render()`

It's common to forget to actually return any elements from your class component's render method, so you'll get a linter warning if you do that as well (since React will error if you don't return anything).
