import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import patientRoutes from '@/modules/patient/router'

const Home = {template : '<div>Home</div>'}
const About = {template : '<div>About</div>'}

Vue.use(Router)

const baseRoutes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{path: '/home', component: Home, name:'Home'},
	{path: '/about', component: About, name:'About'}
]

const routes = baseRoutes.concat(patientRoutes)


export default new Router({
  routes : routes, mode: 'history'
})
