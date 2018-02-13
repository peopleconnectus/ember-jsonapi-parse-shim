(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['jsonapi'],
      __esModule: true,
    };
  }

  define('jsonapi-parse', [], vendorModule);
})();
