import Ember from 'ember';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
         blogs: this.get('store').findAll('blog'),
         members: this.get('store').findAll('member'),
         logged: this.get('store').peekAll('logged')
        //  member: this.get('store').findAll('member')
     });
      // return this.get('store').findAll('blog');
  }
});
