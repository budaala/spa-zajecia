import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/list-of-persons',
      name: 'ListOfPersons',
      component: () => import('../views/ListOfPersons.vue'),
      props: { title: 'List of Persons' }
    },
    {
      path: '/new-person',
      name: 'NewPerson',
      component: () => import('../views/NewPerson.vue'),
      props: { title: 'New Person' }
    }
  ]
})

export default router
