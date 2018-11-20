
# gulp-inject-envs
[![package version](https://img.shields.io/npm/v/gulp-inject-envs.svg?style=flat-square)](https://npmjs.org/package/gulp-inject-envs)
[![package downloads](https://img.shields.io/npm/dm/gulp-inject-envs.svg?style=flat-square)](https://npmjs.org/package/gulp-inject-envs)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/gulp-inject-envs.svg?style=flat-square)](https://npmjs.org/package/gulp-inject-envs)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Gulp plugin to inject environment variables

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## About

Inject variables with configurable prefix. Based on [gulp-inject-env-variables](https://github.com/AlmaasAre/gulp-inject-env-variables).

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install gulp-inject-envs
$ # OR
$ yarn add gulp-inject-envs
```

## Usage

```js
const injectEnvs = require('gulp-inject-envs')
const env = { foo: 'bar', ping: 'pong' }

gulp.src('**/*.js')
  .pipe(injectEnvs(env)) // set custom prefix with second argument e.g. {prefix: 'CUSTOM___' }
  .pipe(gulp.dest('/'))

```

And in code: 

```js
const foo = 'ENV::foo'
console.log(foo) // bar
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    
