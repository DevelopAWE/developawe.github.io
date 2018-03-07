import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
import Wrapper from '../components/Wrapper';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wrapper',
      component: Wrapper,
    },
  ],
  mode: 'history',
});
