require('./bootstrap');

//Require Vue
window.Vue = require('vue').default;

//Register Vue components
Vue.component('example', require('./components/Example.vue').default);

//Inicialize Vue
const app = new Vue({
    el: '#app',
});