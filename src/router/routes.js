export default [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/',
    name: 'about',
    component: () => import('./views/About.vue')
  }
];
