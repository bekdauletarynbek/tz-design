import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


Array.prototype.last = function() {
    return this[this.length - 1];
}


createApp(App).use(router).mount('#app')
