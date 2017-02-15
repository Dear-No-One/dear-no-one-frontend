// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   session: Ember.inject.service('session'),
//
//   actions: {
//     authenticate(login, password) {
//       // let { login, password } = this.getProperties('email', 'password');
//       this.get('session').authenticate('authenticator:jwt', login, password).catch((reason) => {
//         // this.set('errorMessage', reason.error || reason);
//         console.log(reason);
//       });
//     }
//   }
// });

import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties
        ('identification', 'password'),
        authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator,
        credentials).catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
