// import
import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// make app.js global:
window.app = {}
app.store = Store; // when access anywhere - it is now global 
app.router = Router; 

// it's better to wait for the event for manipulation 
window.addEventListener("DOMContentLoaded", async () => {
   loadData();  // call the API - load data
   app.router.init(); // initilize the router 
});

