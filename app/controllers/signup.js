import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitSignUp() {
      console.log(this.username);
     var signup = this.get('store').createRecord('member', {
          username: this.username,
          email: this.email,
          password: this.password,
          bio: this.bio,
          template: this.template,
          theme: this.theme,
          profilePic: this.profilePic,
          blogPic: this.blogPic,
          facebook: this.facebook,
          twitter: this.twitter,
          instagram: this.instagram


      });
      signup.save();
    },
  }
});
