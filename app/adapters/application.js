import DS from 'ember-data';
import CONFIG from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'
// import ActiveModelAdapter from 'active-model-adapter'
import Ember from "ember";

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:custom',
  // authorizer: 'authorizer:application',
  namespace: 'api',
  // host: CONFIG.APP.apiEndpoint,
  session: Ember.inject.service(),
 //  headers: Ember.computed('session.accessToken', function() {
 //   return {
 //     "Authorization": `Bearer ${this.get("session.accessToken")}`
 //   };
 // })
  host: 'http://localhost:3000'
});
