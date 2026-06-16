<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <span class="text-2xl font-serif font-bold text-hks-red">Datang Capital</span>
          </router-link>
        </div>
        
        <nav class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path"
            class="text-hks-gray-dark hover:text-hks-red font-medium transition-colors duration-200"
            :class="{ 'text-hks-red': $route.name === item.name }"
          >
            {{ item.label }}
          </router-link>
        </nav>
        
        <button 
          class="md:hidden p-2 rounded-md text-hks-gray-dark hover:text-hks-red hover:bg-hks-gray-light transition-colors"
          @click="toggleMenu"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    <div 
      v-show="isMenuOpen"
      class="md:hidden bg-white border-t border-gray-200"
    >
      <nav class="px-4 py-4 space-y-3">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          class="block py-2 text-hks-gray-dark hover:text-hks-red font-medium"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navItems = [
  { name: 'Home', label: 'Home', path: '/' },
  { name: 'AboutUs', label: 'About Us', path: '/about-us' },
  { name: 'InvestmentPortfolio', label: 'Investment Portfolio', path: '/investment-portfolio' },
  { name: 'CSRProjects', label: 'CSR & Global Youth Exchange Projects', path: '/csr-projects' },
  { name: 'IndustryInsights', label: 'Industry Insights', path: '/industry-insights' },
  { name: 'ContactUs', label: 'Contact Us', path: '/contact-us' }
]
</script>
