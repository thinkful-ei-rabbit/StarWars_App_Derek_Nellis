<!--
|--------------------------------------------------------------------------
| NPM -> Install, Packages and Scripts <- DON'T FORGET .gitignore!!!
|--------------------------------------------------------------------------

==> WEBPACK <==
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader file-loader

==> REACT <==
npx create-react-app .
npm install --save prop-types
npm add --dev react-test-renderer
npm add --dev enzyme
npm install react-router-dom
npm install serve -D

==> OTHER NPM <==
npm i eslint --save-dev && npx eslint && npx install-peerdeps --dev eslint-config-airbnb
npm install node-sass -S
npm install gh-pages --save-dev

==> LIBRARIES <==
npm install ->insert package here, baby<-
jquery
jquery-modal
cuid
moment
mathjs
= = = = = = = FA Webpack = = = = = =|
@fortawesome/fontawesome-free
= = = = = = = FA React = = = = = = =|
npm i @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
@fortawesome/free-solid-svg-icons
@fortawesome/free-regular-svg-icons
@fortawesome/free-brands-svg-icons
= = = = = = = = = = = = = = = = = =|

  ==> WEBPACK <==
  "scripts": {
    "test": "echo "Error: no test specified yo" && exit 1",
    "start": "webpack-dev-server",
    "build": "webpack --mode production"
  },

  ==> REACT <==
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint .",
    "deploy": "gh-pages -d build",
    "serve":"serve -s build",
    "preserve": "npm run build",
  },
-->