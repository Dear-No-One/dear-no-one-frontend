// app/authenticators/jwt.js
import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

const { RSVP: { Promise }, $: { ajax }, run } = Ember;
export default Base.extend({
  tokenEndpoint: `http://localhost:3000/api/token`,
  restore(data) {
    return new Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(creds) {
    const { email, password } = creds;
    const data = JSON.stringify({
        email,
        password
    });
    console.log(data);
    const requestOptions = {
      url: this.tokenEndpoint,
      type: 'POST',
      data,
      contentType: 'application/json',
      dataType: 'json'
    };
    return new Promise((resolve, reject) => {
      ajax(requestOptions).then((response) => {
        // console.log(response);
        // const { jwt } = response;
        // Wrapping aync operation in Ember.run
        // console.log(jwt);
        run(() => {
        console.log(resolve({token:response}))

          resolve({
            token: response

          });
        });
      }, (error) => {
        // Wrapping aync operation in Ember.run
        run(() => {
          reject(error);
        });
      });
    });
  },
  invalidate(data) {
    return Promise.resolve(data);
  }
});
