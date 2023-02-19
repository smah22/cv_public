import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'
import { reactive } from 'vue'

// Login data & functions

export const useLoginStore = defineStore('user', {
  state: () => ({
      name: '',
      password: '',
      authorized: false,
      logged: false,
      isAdmin: true,
      items: [],
      loggedUser: '',
  }),
  
  getters: {
    getName: (state) => state.name,
    getPassword: (state) => state.password,
    admin: (state) => state.isAdmin
  },
  
  actions: {
    setName(name: string) {
        this.name = name
    },
    
    setPass(pass: string) {
        this.password = pass  
    },
    
    async login() {
        // if (this.password.length < 1) {
        //     errors.data = 'Zadaj užívateľské meno a heslo'
        // }
        
        axios.get('/sanctum/csrf-cookie').then(() => {
            axios
                .post('/login', {
                    email: this.name,
                    password: this.password,
                })
                .then(() => {
                    router.push('/cv')
                    this.authorized = true
                    this.name = ''
                    this.password = ''
                })
                .catch((error) => {
                    errors.setData(error.response.data.errors)
                })
        })
    },
    
    async logout() {
        axios.post('/logout').then(() => {
            router.push('/login')
            setTimeout(() => {
                this.authorized = false
                this.logged = false
            }, 100)
        })
    },
    
    async loginCheck() {
        axios.get('api/user').then((response) => {
            if (response.data.name) {
                this.authorized = true
                this.logged = true
                this.loggedUser = response.data.name
            }
        })
    },
    
    isLogged() {
        this.logged = true
    }
  }
})

// Errors showing

export const errors = reactive( {
    data:'',
    show: <boolean>(false),
    
    setData(data: string) {
        this.data = data
        this.show = true
        
        setTimeout(() => {
            this.show = false
        }, 5000);
    }
})


// Styles data & functions

export const useStylesStore = defineStore('transition', {
    state: () => {
        return {
            gmap: false,
            header: false,
            skills: false,
            courses: false,
            other: false,
            lightBoxShowing: false,
            galleryImage: false,    
            transition: 'slide-fade',  
            selectedCert: {} as selectedCert,
            hobby: {} as selectedCert,
            hobbyShowing: true,
            pageY: <number>(20),
            menuVisibility: <boolean>(true),
            delay: <boolean>(false),
        }
    },
    
    actions: {
        // v-if Google map 
        map(state: boolean) {
            this.gmap = state
        },
        
        // v-if Header section
        headerReady() {
          this.header = true  
        },
        
        // v-if Skills section
        skillsReady() {
            this.skills = true
        },
        
        // v-if Courses section
        coursesReady() {
            this.courses = true
            this.defaultHobby()
        },
        
        // v-if Courses section
        otherReady() {
            this.other = true
        },
        
        // Lightbox
        image(boolean: boolean) {               //
            this.galleryImage = boolean         // LightBox.vue -> v-if cert
        },                                      //
        
        showLightBox() {
            this.lightBoxShowing = true
        },
        
        hideLightBox() {
            this.lightBoxShowing = false
            this.image(false)
            this.transition = 'slide-fade'
            
        },
        
        pushCert (object: selectedCert) {       //
            this.selectedCert = object          // Set selected certificate
        },                                      //
        
        showGallery(id: number) {                                                       //
            this.showLightBox()                                                         // Open lightbox 
            const findCert= <selectedCert>certData.find((cert) => cert.id === id)       // of certs
            this.pushCert(findCert)                                                     //
                                                                                        
            setTimeout(() => {                                                                  
                this.image(true)                                                            
            }, 50)
        },
        
        nextCert() {
            this.image(false)
            this.slide('left')
            const id = <number>this.selectedCert.id
            const length = <number>certData.length
        
            if (id === length) {
                const findCert= <selectedCert>certData.find((cert) => cert.id === 1)
                this.pushCert(findCert)
                setTimeout(() => {
                    this.image(true)
                }, 50)
            } else {
                const findCert = <selectedCert>certData.find((cert) => cert.id === id + 1)
                this.pushCert(findCert)
                setTimeout(() => {
                    this.image(true)
                }, 50)
            }
        },
        
        prevCert() {
            this.image(false)
            this.slide('right')
            const id = <number>this.selectedCert.id
            const length = <number>certData.length
        
            if (id === 1) {
                const findCert= <selectedCert>certData.find((cert) => cert.id === length)
                this.pushCert(findCert)
                setTimeout(() => {
                    this.image(true)
                }, 50)
            } else {
                const findCert = <selectedCert>certData.find((cert) => cert.id === id - 1)
                this.pushCert(findCert)
                setTimeout(() => {
                    this.image(true)
                }, 50)
            }
        },
 
        slide(direction: string) {                              //
            this.transition = `slide-fade-${direction}`         // Change transition style
        },                                                      // 
        
        // Hobby section
        defaultHobby() {
            const hobby = <selectedCert>hobbyData.find((hobby) => hobby.id === 1)
            this.hobby = hobby
        },
        
        nextHobby() {
            const length: number = hobbyData.length
            const actual: number = this.hobby.id
            
            if(actual === length) {
                const next = <selectedCert>hobbyData.find((hobby) => hobby.id === 1)
                this.hobby = next
                this.hobbyShowing = false
            }
            else {
                const next = <selectedCert>hobbyData.find((hobby) => hobby.id === actual + 1)
                this.hobby = next
                this.hobbyShowing = false
            }

        },
        
        // Menu visibility functions
        setPageY(data: number) {
            this.pageY = Math.round(data)
        },
        
        setMenuVisibility( state: boolean ) {
          this.menuVisibility = state  
        },
        
        position() {
            if (this.delay === true) return
            else {
                this.delay = true
                setTimeout(() => {
                    if (window.pageYOffset > this.pageY) {
                        // scroll down
                        this.setMenuVisibility(false)
                        this.setPageY(window.pageYOffset)
                    } else {
                        // scroll up
                        this.setMenuVisibility(true)
                        this.setPageY(window.pageYOffset)
                    }
        
                    this.delay = false
                }, 300)
            }
        }
        
    }
})

interface selectedCert {
    id: number,
    image: string,
    alt: string,
    show?: boolean,
}


// Objects data
     
export const linkData = [
    {
        id: 1,
        href: 'mailto:smehylmartin@gmail.com',
        text: 'smehylmartin@gmail.com',
        icon: 'fa-envelope',
        delay: 50,
    },
    {
        id: 2,
        href: 'tel:+421902628619',
        text: '+421 902 628 619',
        icon: 'fa-mobile-screen-button',
        delay: 100,
    },
    {
        id: 3,
        href: 'map',
        text: 'Lietavská Svinná, Žilina',
        icon: 'fa-map-location',
        delay: 150,
    },
    {
        id: 4,
        href: 'https://www.linkedin.com/in/martin-smehyl/',
        text: 'Martin Šmehýl',
        icon: 'fa-brands fa-linkedin',
        target: '_blank',
        delay: 200,
    },
    {
        id: 5,
        href: 'https://github.com/smah22/cv',
        text: 'GitHub',
        icon: 'fa-brands fa-github',
        target: '_blank',
        delay: 250,
    },
]

export const skillsData = [
    {
        id: 1,
        image: 'vue_logo.webp',
        alt: 'Vue.js',
        delay: 50,
    },
    {
        id: 2,
        image: 'js_logo.webp',
        alt: 'Javascript',
        delay: 100,
    },
    {
        id: 3,
        image: 'ts_logo.webp',
        alt: 'Typescript',
        delay: 150,
    },
    {
        id: 4,
        image: 'sass_logo.webp',
        alt: 'Sass',
        delay: 200,
    },
    {
        id: 5,
        image: 'git_logo.webp',
        alt: 'Git',
        delay: 250,
    },
    {
        id: 6,
        image: 'html_css_logo.webp',
        alt: 'HTML & CSS',
        delay: 300,
    },
]

export const certData = [
    {
        id: 1,
        image: 'cert_vue.webp',
        alt: 'Vue.js',
        show: false,
    },
    {
        id: 2,
        image: 'cert_js.webp',
        alt: 'Javascript a ES6',
        show: false,
    },
    {
        id: 3,
        image: 'cert_sass.webp',
        alt: 'Sass',
        show: false,
    },
    {
        id: 4,
        image: 'cert_oop.webp',
        alt: 'Základy OOP',
        show: false,
    },
    {
        id: 5,
        image: 'cert_git.webp',
        alt: 'Git',
        show: false,
    },
    {
        id: 6,
        image: 'cert_webrebel.webp',
        alt: 'HTML & CSS & JS',
        show: false,
    },
]

export const hobbyData = reactive([
    {
        id: 1,
        image: 'martinske_hole.webp',
        alt: 'Martinské hole',
        show: true
    },
    {
        id: 2,
        image: 'lietavska_svinna.webp',
        alt: 'Lietavská Svinná',
        show: false
    },
    {
        id: 3,
        image: 'hoblik.webp',
        alt: 'Výhľad na Hoblík',
        show: false
    },
])

