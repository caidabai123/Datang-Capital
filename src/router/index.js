import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import InvestmentPortfolio from '../views/InvestmentPortfolio.vue'
import CSRProjects from '../views/CSRProjects.vue'
import IndustryInsights from '../views/IndustryInsights.vue'
import ContactUs from '../views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/investment-portfolio',
    name: 'InvestmentPortfolio',
    component: InvestmentPortfolio
  },
  {
    path: '/csr-projects',
    name: 'CSRProjects',
    component: CSRProjects
  },
  {
    path: '/industry-insights',
    name: 'IndustryInsights',
    component: IndustryInsights
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
