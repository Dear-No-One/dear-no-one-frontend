import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('form');
  this.route('dashboard');
  this.route('blogs');
  this.route('newroute');
  this.route('home');
  this.route('login');
  this.route('user');
  this.route('blog');
});

export default Router;
