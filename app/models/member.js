import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  dateCreated: DS.attr('date'),
  bio: DS.attr(),
  profilePic: DS.attr(),
  blogUrl: DS.attr(),
  facebook: DS.attr(),
  twitter: DS.attr(),
  instagram: DS.attr(),
});
