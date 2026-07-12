<template>
  <footer class="bg-hks-gray-dark text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-2xl font-serif font-bold text-hks-gold mb-4">Datang Capital Pty Ltd</h3>
          <p class="text-gray-300 mb-4 leading-relaxed">
            Founded with the core goal of boosting global youth cross-border communication, we build full-spectrum service systems to satisfy global talent exchange demands.
          </p>
          
        </div>
        
        <div>
          <h4 class="text-lg font-semibold text-hks-gold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-hks-gold transition-colors">Home</router-link></li>
            <li><router-link to="/about-us" class="text-gray-300 hover:text-hks-gold transition-colors">About Us</router-link></li>
            <li><router-link to="/investment-portfolio" class="text-gray-300 hover:text-hks-gold transition-colors">Investment Portfolio</router-link></li>
            <li><router-link to="/csr-projects" class="text-gray-300 hover:text-hks-gold transition-colors">CSR Projects</router-link></li>
            <li><router-link to="/contact-us" class="text-gray-300 hover:text-hks-gold transition-colors">Contact Us</router-link></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold text-hks-gold mb-4">Contact Information</h4>
          <ul class="space-y-3 text-gray-300">
            <li>Level 17, 123 Pitt St, Sydney NSW 2000, Australia</li>
            <li>contact@datangcapital.com.au</li>
            <li>+61 2 8211 0688</li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400">&copy; 2020 Datang Capital Pty Ltd. All rights reserved.</p>
          <div class="flex space-x-6">
            <router-link to="/privacy-policy" class="text-gray-400 hover:text-hks-gold transition-colors text-sm">Privacy Policy</router-link>
            <router-link to="/disclaimer" class="text-gray-400 hover:text-hks-gold transition-colors text-sm">Disclaimer</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
