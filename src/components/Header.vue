<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-12 sm:h-14 md:h-16 lg:h-20">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <img src="../images/logo.png" alt="Datang Capital Logo" class="h-10 sm:h-12 md:h-16 lg:h-20 w-auto" />
            <span class="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold text-hks-red">Datang Capital</span>
          </router-link>
        </div>
        
        <nav class="hidden md:flex items-center space-x-6">
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
        
        <div class="flex items-center space-x-2">
          <button 
            @click="toggleLanguage"
            class="hidden md:block px-4 py-2 border border-hks-red text-hks-red hover:bg-hks-red hover:text-white font-medium rounded-lg transition-colors duration-200 text-sm"
          >
            {{ currentLanguage === 'en' ? '中文' : 'EN' }}
          </button>
          
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
    </div>
    
    <div 
      v-show="isMenuOpen"
      class="md:hidden fixed top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40"
    >
      <nav class="px-4 py-4 space-y-3">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path"
          class="block py-2 px-4 text-hks-gray-dark hover:text-hks-red hover:bg-hks-gray-light font-medium rounded-lg transition-colors"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
        </router-link>
        
        <button 
          @click="toggleLanguage"
          class="w-full mt-4 px-4 py-3 border border-hks-red text-hks-red hover:bg-hks-red hover:text-white font-medium rounded-lg transition-colors duration-200"
        >
          {{ currentLanguage === 'en' ? '中文' : 'EN' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const currentLanguage = ref('en')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'en' ? 'zh' : 'en'
}

const navItems = [
  { name: 'Home', label: 'Home', path: '/' },
  { name: 'AboutUs', label: 'About Us', path: '/about-us' },
  { name: 'InvestmentPortfolio', label: 'Investment Portfolio', path: '/investment-portfolio' },
  //{ name: 'CSRProjects', label: 'CSR & Global Youth Exchange Projects', path: '/csr-projects' },
  { name: 'IndustryInsights', label: 'Industry Insights', path: '/industry-insights' },
  { name: 'ContactUs', label: 'Contact Us', path: '/contact-us' }
]
</script>
