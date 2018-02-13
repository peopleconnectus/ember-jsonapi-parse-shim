'use strict';

const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-jsonapi-parse-shim',

  included() {
    this._super.included.apply(this, arguments);

    this.import({
      development: 'vendor/jsonapi-parse/jsonapi.js',
      production: 'vendor/jsonapi-parse/jsonapi.min.js'
    });
    this.import('vendor/shims/jsonapi-parse.js');
  },

  treeForVendor(tree) {
    return mergeTrees([
      tree,
      new Funnel(path.dirname(require.resolve('jsonapi-parse')), {
        destDir: 'jsonapi-parse'
      })
    ]);
  }
};
