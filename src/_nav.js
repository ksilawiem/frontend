export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',

  },

  {
    component: 'CNavTitle',
    name: 'Theme',
  },


  {
    component: 'CNavTitle',
    name: 'Components',
  },
  {
    component: 'CNavGroup',
    name: 'Categories',
    to: '/categories',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Ajouter une catégorie ',
        to: '/categories/ajouter',
      },
      {
        component: 'CNavItem',
        name: 'Modifier une catégorie ',
        to: '/categories/modifier',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Tests',
    to: '/tests',
    icon: 'cil-cursor',
    items: [

      {
        component: 'CNavItem',
        name: 'Ajouter un test ',
        to: '/tests/ajouter2',
      },
      {
        component: 'CNavItem',
        name: 'Modifier un test ',
        to: '/tests/modifier2',
      }, {
        component: 'CNavItem',
        name: 'Quiz  ou  Exercice ',
        to: '/tests/quizouexercice',
      },
      {
        component: 'CNavItem',
        name: 'Quiz     ',
        to: '/tests/creationquiz',
      },
      {
        component: 'CNavItem',
        name: 'Exercice     ',
        to: '/tests/creationexer',
      },

    ],
  },
  {
    component: 'CNavGroup',
    name: 'Forms',
    to: '/forms',
    icon: 'cil-notes',
    items: [

      {
        component: 'CNavItem',
        name: 'Liste des Condidatures ',
        to: '/forms/listeCondidats',
      },
      {
        component: 'CNavItem',
        name: 'Liste des Recruteurs ',
        to: '/forms/listerecruteurs',
      },





    ],
  },

  {
    component: 'CNavGroup',
    name: 'Test',
    to: '/icons',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Catégories ',
        to: '/icons/tests',
      },
      {
        component: 'CNavItem',
        name: 'Liste1  ',
        to: '/icons/liste1',
      },
      {
        component: 'CNavItem',
        name: 'Détails1 ',
        to: '/icons/details',
      },
      {
        component: 'CNavItem',
        name: 'Liste2  ',
        to: '/icons/liste2',
      },
      {
        component: 'CNavItem',
        name: 'Liste3  ',
        to: '/icons/liste3',
      },
      {
        component: 'CNavItem',
        name: 'Liste4  ',
        to: '/icons/liste4',
      },
      {
        component: 'CNavItem',
        name: 'Question  ',
        to: '/icons/question',
      },
      {
        component: 'CNavItem',
        name: 'Formulaire ',
        to: '/icons/formulaire',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Notifications',
    to: '/notifications',
    icon: 'cil-bell',
    items: [


    ],
  },

  {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: 'Pages',
    to: '/pages',
    icon: 'cil-star',
    items: [
      {
        component: 'CNavItem',
        name: 'Login',
        to: '/pages/login',
      },

      {
        component: 'CNavItem',
        name: 'Register2',
        to: '/pages/register2',
      },
      {
        component: 'CNavItem',
        name: 'Register1',
        to: '/pages/register1',
      },

      {
        component: 'CNavItem',
        name: 'Person',
        to: '/pages/person',
      },
      {
        component: 'CNavItem',
        name: 'Modalite',
        to: '/pages/modalite',
      },


      {
        component: 'CNavItem',
        name: 'Paiement',
        to: '/pages/paiement',
      },
      {
        component: 'CNavItem',
        name: 'Paiement1',
        to: '/pages/paiement1',
      },
      {
        component: 'CNavItem',
        name: 'sarra',
        to: '/pages/sarra',
      },
      

      {
        component: 'CNavItem',
        name: 'ProfilCandidat',
        to: '/pages/profilcandidat',
      },
      {
        component: 'CNavItem',
        name: 'Profil',
        to: '/pages/profil',
      },
      {
        component: 'CNavItem',
        name: 'ProfilRecruteur',
        to: '/pages/profilrecruteur',
      },


    ],
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
