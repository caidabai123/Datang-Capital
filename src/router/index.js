import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import InvestmentPortfolio from '../views/InvestmentPortfolio.vue'
import CSRProjects from '../views/CSRProjects.vue'
import IndustryInsights from '../views/IndustryInsights.vue'
import ContactUs from '../views/ContactUs.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Disclaimer from '../views/Disclaimer.vue'

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
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
