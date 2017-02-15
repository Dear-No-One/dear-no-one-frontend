import Ember from 'ember';

export default Ember.Controller.extend({
  showAnimatedDialog: false,
  actions: {
      openAnimatedDialog(){
        this.set('showAnimatedDialog', true);
      },
      closeAnimatedDialog() {
        this.set('showAnimatedDialog', false);
      },
      logForm() {
        console.log(this.postBody);
      }
  }
});
