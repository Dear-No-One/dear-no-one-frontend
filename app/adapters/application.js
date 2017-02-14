import DS from 'ember-data';
import CONFIG from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: CONFIG.apiEndpoint
});
