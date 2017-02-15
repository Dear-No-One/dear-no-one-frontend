import Ember from 'ember';
export default Ember.Service.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service('session'),
  id: Ember.computed('session.data.authenticated', function() {
    const session = this.get('session');
    const data = session.get('data.authenticated.member.id');
    return data;
  }),
  currentUser() {
    return Ember.RSVP.hash({
      member: this.get('store').findRecord('member', this.get('id')),
    });
  },
//   accessToken: null,
//
// authenticate(email, password) {
//   return Ember.$.ajax({
//     method: "POST",
//     url: "http://localhost:3000/api/token",
//     data: { email: email, password: password }
//   }).then((result) => {
//     console.log(result)
//     this.set('accessToken', result.access_token);
//   });
// },
//
// invalidate() {
//   this.set('accessToken', null);
// },
//
// isAuthenticated: Ember.computed.bool('accessToken')
});
