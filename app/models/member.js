import DS from 'ember-data';

export default DS.Model.extend({
  
  username: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  bio: DS.attr(),
  template: DS.attr('number'),
  theme: DS.attr('number'),
  profilePic: DS.attr(),
  blogPic: DS.attr(),
  facebook: DS.attr(),
  twitter: DS.attr(),
  instagram: DS.attr(),
});
