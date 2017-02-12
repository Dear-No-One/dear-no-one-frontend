import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return [{
          title: 'Emo Bunny',
          body: 'I cut my little bunny paws with razor blades',
          post_url: '?????',
          date_posted: '?',

      }, {
          title: 'Coding for dorks',
          body: 'come learn to code with all your dork friends',
          post_url: '?????',
          date_posted: '?',

      }, {
          title: 'Money',
          body: 'I need money',
          post_url: '?????',
          date_posted: '?',
        
    }];
  }
});
