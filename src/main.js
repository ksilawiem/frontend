import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//import Vue from "vue"
//import VueSimpleAlert from "vue-simple-alert";

//import { library } from '@fortawesome/fontawesome-svg-core'

//import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.component("font-awesome-icon", FontAwesomeIcon)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)
//library.add(faHatWizard)
//Vue.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
//Vue.use(VueSimpleAlert);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret)

