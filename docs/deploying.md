# Deploying Your React App

This app is frontend only, so you can deploy on any static host (like [Netlify](https://netlify.com)).

If you're making an SPA with client-side routing you need to set up your hosting correctly. This will ensure that all routes point to your `index.html`, allowing your JS to render the correct view.

Without this your host may return a 404 when trying to directly access a different route e.g. `www.mysite/endpoint` (since `endpoint.html` won't exist).

## Building for production

Add the following build script to your `package.json`:
`"build": parcel build index.html --public-url ./`

More info in the [Parcel docs](https://parceljs.org/production.html)

## Netlify Instructions

* [Netlify steps for continuous deployment](https://www.netlify.com/docs/continuous-deployment/)
* [Netlify setup for client side routing](https://www.netlify.com/docs/redirects/#history-pushstate-and-single-page-apps) (don't worry about this if you only have a single route)
* If you get build errors using Parcel with Netlify it may be because they build using an older Node version by default (v6!). You can tell them to use whatever version you're using by setting an environment variable called `NODE_ENV` in the 'Deploy Settings' (scroll down to 'Build environment variables').
