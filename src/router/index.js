import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },


      {
        path: '/categories',
        name: 'Categories',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/categories/breadcrumbs',
        children: [
          {
            path: '/categories/ajouter',
            name: 'Ajouter catégorie',
            component: () => import('@/views/categories/Ajouter.vue'),
          },
          {
            path: '/categories/modifier',
            name: 'modifier catégorie',
            component: () => import('@/views/categories/Modifier.vue'),
          },

        ],
      },
      {
        path: '/tests',
        name: 'Tests',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
  
        children: [
          {
            path: '/tests/ajouter2',
            name: 'Ajouter ',
            component: () => import('@/views/tests/Ajouter2.vue'),
          },
          {
            path: '/tests/nouvelquiz',
            name: 'nouvelquiz ',
            component: () => import('@/views/tests/NouvelQuiz.vue'),
          },
          {
            path: '/tests/modifier2',
            name: 'Modifier',
            component: () => import('@/views/tests/Modifier2.vue'),
          },
          {
            path: '/tests/modifierquiz',
            name: 'ModifierQuiz',
            component: () => import('@/views/tests/ModifierQuiz.vue'),
          },
          {
            path: '/tests/nouveloffre',
            name: 'NouvelOffre',
            component: () => import('@/views/tests/NouvelOffre.vue'),
          },
          {
            path: '/tests/quizouexercice',
            name: 'Quiz ',
            component: () => import('@/views/tests/QuizOuExercice.vue'),
          },
          {
            path: '/tests/creationquiz',
            name: 'QE ',
            component: () => import('@/views/tests/CreationQuiz.vue'),
          },
          {
            path: '/tests/ModifierOffre',
            name: 'ModifierOffre',
            component: () => import('@/views/tests/ModifierOffre.vue'),
          },
          {
            path: '/tests/ModifierOffreQuiz',
            name: 'ModifierOffreQuiz',
            component: () => import('@/views/tests/ModifierOffreQuiz.vue'),
          },
          {
            path: '/tests/creationexer',
            name: 'QE1 ',
            component: () => import('@/views/tests/CreationExer.vue'),
          },
        ],

      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/listecondidats',
            name: 'ListeCondidats',
            component: () => import('@/views/forms/ListeCondidats.vue'),
          },

          {
            path: '/forms/listerecruteurs',
            name: 'ListeRecruteurs',
            component: () => import('@/views/forms/ListeRecruteurs.vue'),
          },

          {
            path: '/forms/listeposts/:id',
            name: 'ListePosts',
            component: () => import('@/views/forms/ListePosts.vue'),
          },

        ],
      },

      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/tests',
            name: 'Catégories',
            component: () => import('@/views/icons/Tests.vue'),
          },
          {
            path: '/icons/FinTest',
            name: 'FinTest',
            component: () => import('@/views/icons/FinTest.vue'),
          },
          {
            path: '/icons/FinTestOffre',
            name: 'FinTestOffre',
            component: () => import('@/views/icons/FinTestOffre.vue'),
          },
          {
            path: '/icons/liste1',
            name: 'Liste1',
            component: () => import('@/views/icons/Liste1.vue'),
          },
          {
            path: '/icons/details',
            name: 'Détails1',
            component: () => import('@/views/icons/Details.vue'),
          },
          {
            path: '/icons/liste2',
            name: 'Liste2',
            component: () => import('@/views/icons/Liste2.vue'),
          },
          {
            path: '/icons/liste3',
            name: 'Liste3',
            component: () => import('@/views/icons/Liste3.vue'),
          },
          {
            path: '/icons/liste4',
            name: 'Liste4',
            component: () => import('@/views/icons/Liste4.vue'),
          },
          {
            path: '/icons/question',
            name: 'Question',
            component: () => import('@/views/icons/Question.vue'),
          },
          {
            path: '/icons/questionoffre',
            name: 'QuestionOffre',
            component: () => import('@/views/icons/QuestionOffre.vue'),
          },
          {
            path: '/icons/formulaire',
            name: 'Formulaire',
            component: () => import('@/views/icons/Formulaire.vue'),
          },
          {
            path: 'detailsoffre',
            name: 'detailsoffre',
            component: () => import('@/views/icons/DetailsOffre'),
          },
          {
            path: 'detailsoffrenav/:id',
            name: 'detailsoffrenav',
            component: () => import('@/views/icons/DetailsOffreNav'),
          },


        ],
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notifications/alerts',
        children: [

        ],
      },

    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [


      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      
      {
        path: 'Verification/:id',
        name: 'Verification',
        component: () => import('@/views/pages/Verification'),
      },
      
      {
        path: 'ForgetPassword/:id',
        name: 'ForgetPassword',
        component: () => import('@/views/pages/ForgetPassword'),
      },

      {
        path: 'edit',
        name: 'Edit',
        component: () => import('@/views/pages/Edit'),
      },
      {
        path: 'edit1',
        name: 'Edit1',
        component: () => import('@/views/pages/Edit1'),
      },

      {
        path: 'register2',
        name: 'Register2',
        component: () => import('@/views/pages/Register2'),
      },

      {
        path: 'register1',
        name: 'Register1',
        component: () => import('@/views/pages/Register1'),
      },
      {
        path: 'accueil',
        name: 'Accueil',
        component: () => import('@/views/pages/Accueil'),
      },
      {
        path: 'success',
        name: 'success',
        component: () => import('@/views/pages/success'),
      },
      {
        path: 'successAgain',
        name: 'successAgain',
        component: () => import('@/views/pages/successAgain'),
      },
      {
        path: 'error',
        name: 'error',
        component: () => import('@/views/pages/error'),
      },
      {
        path: 'profilcondidat',
        name: 'ProfilCondidat',
        component: () => import('@/views/pages/ProfilCondidat'),
      },
      {
        path: 'profilnavig/:id',
        name: 'Profilnavig',
        component: () => import('@/views/pages/Profilnavig'),
      },
      {
        path: 'profilnavigRecruteur/:id',
        name: 'profilnavigRecruteur',
        component: () => import('@/views/pages/profilnavigRecruteur'),
      },
      {
        path: 'person',
        name: 'Person',
        component: () => import('@/views/pages/Person'),
      },
      {
        path: 'modalite',
        name: 'Modalité',
        component: () => import('@/views/pages/Modalite'),
      },
      {
        path: 'paiement',
        name: 'Paiement',
        component: () => import('@/views/pages/Paiement'),
      },
      {
        path: 'ChoicePayement',
        name: 'ChoicePayement',
        component: () => import('@/views/pages/ChoicePayement'),
      },
      {
        path: 'ChoicePayementAgain/:id',
        name: 'ChoicePayementAgain',
        component: () => import('@/views/pages/ChoicePayementAgain'),
      },
      {
        path: 'paiement1',
        name: 'Paiement1',
        component: () => import('@/views/pages/Paiement1'),
      },
      {
        path: 'sarra',
        name: 'sarraa',
        component: () => import('@/views/pages/Sarra'),
      },
      
      
      {
        path: 'profil',
        name: 'Profil',
        component: () => import('@/views/pages/Profil'),
      },
      {
        path: 'profilrecruteur',
        name: 'ProfilRecruteur',
        component: () => import('@/views/pages/ProfilRecruteur'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
