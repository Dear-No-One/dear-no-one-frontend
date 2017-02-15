import Ember from 'ember';

export default Ember.Controller.extend({
  showAnimatedDialog: false,
  actions: {
      openAnimatedDialog(){
          this.toggleProperty('showAnimatedDialog');
      },
      closeAnimatedDialog() {
          this.set('showAnimatedDialog', false);
      }
  }
});
