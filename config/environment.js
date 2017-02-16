/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'nav-splash',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:custom',
    authenticationRoute: '/login',
    routeAfterAuthentication: '/dashboard',
    routeIfAlreadyAuthenticated: '/dashboard'
  };

    ENV.host = 'https://dear-no-one.herokuapp.com/'

  return ENV;
};
