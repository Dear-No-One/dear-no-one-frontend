import Ember from 'ember';

export default Ember.Component.extend({
    showAnimatedDialog: false,
    actions: {
        openAnimatedDialog(){
            this.toggleProperty('showAnimatedDialog');
        },
        closeAnimatedDialog() {
            this.toggleProperty('showAnimatedDialog');
        }
    }
});
