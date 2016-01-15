# gulp-browserify2

After the enormous success and deprecation of [gulp-browserify](https://github.com/deepak1556/gulp-browserify) here comes gulp-browserify2!

It basically is a gulp-task-wrapper around the [gulp with browserify recipe](https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md).

Currently supported features:

* Streaming (creates a vinyl compatible stream)
* Multiple entry points
* Transforms
* Works fine with source maps

## Install

```bash
npm install --save-dev gulp-browserify2
```


## Getting started

It works with a fine gulpesque API:

```javascript
var browserify = require('gulp-browserify2');

gulp.src('/js/index.js')
  .pipe(browserify({
    fileName: 'bundle.js',
    transform: require('6to5ify'),
    options: {
      debug: false
    }
  })
  .pipe(uglify())
  // ...
  .pipe(gulp.dest('dist/js/'));

```

Mutliple entry points:

```javascript
gulp.src(['/js/index.js', '/js/index2.js'])
  .pipe(browserify()
  .pipe(gulp.dest('dist/js/'));

```

## API

### Options

This task accepts the following options:

#### fileName (default: 'bundle.js')
The filename for the output file.


#### transform (default: null)
This options defines one or more browserify-specific transform modules. Can be an array pipeline or a single value which holds the required transformation modules.

Example:

```javascript
// ...
.pipe(browserify({
  fileName: 'bundle.js',
  transform: [require('6to5ify'), require('coffeeify')] // yeah this example is kind of silly
}))
// ...
```

It is also possible to pass transform plugin options:

```javascript
// ...
.pipe(browserify({
  fileName: 'bundle.js',
  transform: {
    tr: require('6to5ify'),
    options: {
      blacklist: ['generators']
    }
  }
}))
// ...
```

#### options (default: {})
Possibility to pass [browserify options](https://github.com/substack/node-browserify#var-b--browserifyfiles-or-opts). See example in 'Getting started'.


## To-Do and contributing

Some other browserify features are yet to implement (like plugins). If you're missing features or found a bug please open pull-requests or issues on github.

## License

MIT
