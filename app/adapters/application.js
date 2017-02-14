import DS from 'ember-data';
    import CONFIG from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: CONFIG.APP.apiEndpoint,
  authManager: Ember.inject.service(),
  headers: Ember.computed('authManager.accessToken', function() {
   return {
     "Authorization": `Bearer ${this.get("authManager.accessToken")}`
   };
 })
  // host: 'http://localhost:3000'
});
