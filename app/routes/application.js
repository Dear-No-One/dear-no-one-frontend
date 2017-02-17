import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(ApplicationRouteMixin, {
    model(){
        return this.get('store').peekAll('logged');
    },
  actions: {
  invalidateSession: function() {
    // console.log('ok');
      this.get('session').invalidate();
  }
}
});
