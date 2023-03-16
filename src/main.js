import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faClock, faLocationDot, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faFacebook, faLinkedinIn, faEnvelope, faPhone, faClock, faLocationDot, faChevronRight)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
