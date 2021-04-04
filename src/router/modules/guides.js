export default [
  {
    path: '/guides',
    component: () => import (/* webpackChunkName: "guides" */ '@/views/Guides/Guides.vue'),

    children: [
      {
        path: '',
        name: 'CloseBuy',
        component: () => import (/* webpackChunkName: "closeBuy" */ '@/views/Guides/CloseBuy.vue'),
        meta: {
          title: 'Seja bem vindo'
        }
      }
    ]
  }
]