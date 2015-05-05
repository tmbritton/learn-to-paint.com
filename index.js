var Metalsmith  = require('metalsmith'),
    markdown    = require('metalsmith-markdown'),
    templates   = require('metalsmith-templates'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    Handlebars  = require('handlebars'),
    fs          = require('fs');

var filelogger = function(files, metalsmith, done) {
  console.log('plugin');
  console.log(files);
  done();
};

Metalsmith(__dirname)
  .use(filelogger)
  .use(markdown())
  .use(collections())
  .use(permalinks())
  .use(templates({
    "engine": "handlebars",
    "directory": "./templates",
    "partials": {
      "header": "partials/header",
      "footer": "partials/footer"
    }
  }))
  .destination('./_site')
  .build(function(err,files){
    if (err){ console.log(err); }
  });