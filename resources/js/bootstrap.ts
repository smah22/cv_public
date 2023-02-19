import 'bootstrap';

import axios from 'axios';
window.axios = axios;

axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Fontawesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faKey, faMobileScreenButton, faMapLocation, faCode, faChevronRight, faChevronLeft, faXmark, faForwardStep, faIdCard, faEarthEurope, faUser, faSchool, faFile, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope, faKey, faMobileScreenButton, faMapLocation, faLinkedin, faGithub, faCode, faChevronRight, faChevronLeft, faXmark, faForwardStep, faIdCard, faEarthEurope, faUser, faSchool, faFile, faBars)
dom.watch()
// Fontawesone end
