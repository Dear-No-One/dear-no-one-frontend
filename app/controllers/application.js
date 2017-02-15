import Ember from 'ember';

export default Ember.Controller.extend({
  showAnimatedDialog: false,
  actions: {
      openAnimatedDialog(){
        this.set('showAnimatedDialog', true);
      },
      closeAnimatedDialog() {
        console.log(this.showAnimatedDialog);
          this.set('showAnimatedDialog', false);
      }
  }
});
