import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Order from './components/OrderView.vue'
import HelloWorld from './components/HelloWorld.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    { path: '/', component: HelloWorld },
    { path: '/order/:orderNo', component: Order },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})
  
const app = createApp(App)
app.use(router)
app.mount('#app')
