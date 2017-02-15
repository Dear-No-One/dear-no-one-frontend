import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

    actions: {
      authenticate() {
        console.log('help');
        const { login, password } = this.getProperties('login', 'password');
        this.sendAction('authenticate', login, password)
      }
    }
});
