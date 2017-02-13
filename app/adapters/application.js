import DS from 'ember-data';
import CONFIG from '../config/environment'

export default DS.JSONAPIAdapter.extend({
  namespace: 'api',
  host: CONFIG.apiEndpoint
});
