import Ember from 'ember';

import DS from 'ember-data';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  showAnimatedDialog: false,
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    openAnimatedDialog() {
      this.set('showAnimatedDialog', true);
    },
    closeAnimatedDialog() {
      this.set('showAnimatedDialog', false);
    },
    logForm() {
        var logged = this.get('model');
        var firstLog = logged.get('firstObject');
        var loggedId = firstLog.get('id');
        var self = this;
    //   console.log(this.postTitle, this.postBody, this.store, loggedId);
     var post = this.get('store').createRecord('blog', {
          title: this.postTitle,
          body: this.postBody,
          memberId: loggedId
      });
      post.save().then(() => {
          this.set('showAnimatedDialog', false);
          self.refresh();
      });

    },
    // submitSignUp() {
    //   console.log(this.username);
    //  var signup = this.get('store').createRecord('member', {
    //       username: this.username,
    //       email: this.email,
    //       password: this.password,
    //       bio: this.bio,
    //       template: this.template,
    //       theme: this.theme,
    //       profilePic: this.profilePic,
    //       blogPic: this.blogPic,
    //       facebook: this.facebook,
    //       twitter: this.twitter,
    //       instagram: this.instagram
    //
    //
    //   });
    //   signup.save(signup).then((response) =>{
    //     this.transitionTo('dashboard');
    //     console.log(record.get('id'));
    //   });
    // },

  }

});
