import * as Vue from 'Vue';
import * as VueRouter from 'vue-router';

import PageOne from './page-one.vue';
import PageTwo from './page-two.vue';
import PageThree from './page-three.vue';

import App from './app.vue';

import 'bootstrap';
import './index.scss';

const root = Vue.createApp({})

const routes = [
  { path: '/page-one', component: PageOne },
  { path: '/page-two', component: PageTwo },
  { path: '/page-three', component: PageThree },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

root.use(router)

root.component('app', App)

// root.component('page-one', PageOne)
// root.component('page-two', PageTwo)
// root.component('page-three', PageThree)

const vm = root.mount('#app')
