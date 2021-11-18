import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@splidejs/splide/dist/css/splide.min.css';



Array.prototype.last = function() {
    return this[this.length - 1];
}


createApp(App).use(router).mount('#app')
