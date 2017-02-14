import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  date_created: DS.attr('date'),
  is_active: DS.attr('boolean'),
  bio: DS.attr(),
  profile_pic: DS.attr(),
  blog_url: DS.attr(),
  facebook: DS.attr(),
  twitter: DS.attr(),
  instagram: DS.attr(),
});
