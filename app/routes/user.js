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
// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   ajax: Ember.inject.service(),
//   model() {
//     return this.get('ajax').request('/user');
//   }
// });
