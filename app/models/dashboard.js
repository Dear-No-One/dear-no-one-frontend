import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  post_url: DS.attr(),
  date_posted: DS.attr()
});
