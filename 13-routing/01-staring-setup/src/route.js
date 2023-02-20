import { createRouter, createWebHistory } from 'vue-router';

import UsersList from './components/users/UsersList.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    { path: '/users', name: 'users', components: { default: UsersList, footer: UserFooter } },
    {
      path: '/teams', name: 'teams', components: { default: TeamsList, footer: TeamFooter },
      children: [{
        path: ':id', name: 'teamMembers', component: TeamMembers, props: true,
        meta: { isAuth: true },
        beforeEnter(to, from, next) {
          console.log('Route guard');
          console.log(to, from);
          next();
        },
      }]
    },
    // { path: '/teams/:id', component: TeamMembers, props: true },
    { path: '/:notFound(.*)', redirect: '/teams' }
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0
    }
  }
});

route.beforeEach(function (to, from, next) {
  console.log('Global before guard');
  console.log(to, from);
  // if (to.name === 'teamMembers') {
  //   next();
  // } else {
  //   next({ name: 'teamMembers', params: { id: 't2' } });
  // }
  if (to.meta) {
    console.log('need auth');
  }
  next();
});

route.afterEach(function (to, from) {
  console.log('Global after guard');
  // 已经经过校验，记录日志
  console.log(to, from);
});

export default route;