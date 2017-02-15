import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    logForm() {
      console.log(this.postBody);
    }
  }
});
