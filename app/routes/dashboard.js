import Ember from 'ember';
// import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
    model() {
    //     return Ember.RSVP.hash({
    //      blogs: this.get('store').findAll('blog'),
    //      members: this.get('store').find('member', )
    //  });
      return this.get('store').findAll('blog');
  }
});
