import Ember from 'ember';

// export default Ember.Route.extend({
//     model() {
//       return this.get('store').findAll('user');
//   }
// });
export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
          users: this.get('store').findAll('user'),
          userOne: this.get('store').find('user', 1)
      });
  }
});

//applicaion is talking to form/model through .query
//nested routes takes care of passed data without more calls

// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   ajax: Ember.inject.service(),
//   model() {
//     return this.get('ajax').request('/user');
//   }
// });
