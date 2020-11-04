import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "Users" */ '../layouts/Main.vue'),
    children: [
      {
        path: '/user/:id',
        component: () => import(/* webpackChunkName: "Profile" */ '../views/Profile.vue'),
      },
      {
        path: '',
        name: 'user-list',
        component: () => import(/* webpackChunkName: "Users" */ '../views/Users.vue'),
      },
    ],
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
