import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress/nprogress';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((routeTo, routeFrom) => {
  // If this isn't an initial page load.
  if (routeFrom.name !== null) {
    // Start the route progress bar.
    NProgress.start();
  }
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
