import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
    state: () => {
        return {
            visibility: <boolean>(true),
            position: <number>(40),
            scrollDown: <boolean>(false),
        }
    },
    
    actions: {
        scroll() {
            let actualPosition = <number>Math.round(window.pageYOffset)
        
            if (actualPosition > this.position && this.scrollDown !== true) {
                this.visibility = false
                this.scrollDown = true
                this.position = actualPosition 
            }
            if (actualPosition < this.position && this.scrollDown === true ) {
                this.visibility = true
                this.scrollDown = false
                this.position = 40
            }
            
            if(this.scrollDown === true && this.visibility === true) this.visibility = false

        },
        
        showMneu() {
            this.visibility = true
        }
    }
    
  })