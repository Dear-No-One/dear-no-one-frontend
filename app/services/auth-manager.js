import Ember from 'ember';

export default Ember.Service.extend({
  accessToken: null,

authenticate(email, password) {
  return Ember.$.ajax({
    method: "POST",
    url: "http://localhost:3000/api/token",
    data: { email: email, password: password }
  }).then((result) => {
    console.log(result)
    this.set('accessToken', result.access_token);
  });
},

invalidate() {
  this.set('accessToken', null);
},

isAuthenticated: Ember.computed.bool('accessToken')
});
