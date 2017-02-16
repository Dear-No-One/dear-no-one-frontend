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
      console.log(this.postTitle, this.postBody);
     var post = this.get('store').createRecord('blog', {
          title: this.postTitle,
          body: this.postBody
      });
      post.save();
    }
  }

});
