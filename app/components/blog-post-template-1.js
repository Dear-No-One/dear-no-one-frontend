import Ember from 'ember';

export default Ember.Component.extend({
    isTrue: false,
    actions: {
  switchTheme() {
      console.log('anything');
    this.setProperties('isTrue');
    console.log(this);
  }
}
});
