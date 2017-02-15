import Base from 'ember-simple-auth/authenticators/base';
// import config from '../../config/enviornment.js'
export default Base.extend({
  tokenEndPoint: 'http://localhost:3000/api/token',

  restore(data) {
  },

  authenticate(/*args*/) {
    console.log('something');
    return Promise.resolve();
  },

  invalidate(data) {
  }
});
