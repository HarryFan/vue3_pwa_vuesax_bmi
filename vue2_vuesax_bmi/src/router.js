import Vue from 'vue';
import Router from 'vue-router';
import BmiCalculator from './components/BmiCalcultor.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bmi-calculator',
      component: BmiCalculator,
    },
  ],
});
