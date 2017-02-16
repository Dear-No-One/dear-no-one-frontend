import Ember from 'ember';

export default Ember.Component.extend({
    showAnimatedDialog: false,
    actions: {
        openAnimatedDialog(){
            this.toggleProperty('showAnimatedDialog');
            console.log(this.showAnimatedDialog);
        },
        closeAnimatedDialog() {
            console.log(this.showAnimatedDialog);
            // this.get('showAnimatedDialog');
            this.sendAction('showAnimatedDialog');

            console.log(this.showAnimatedDialog);
        }
    }

});
