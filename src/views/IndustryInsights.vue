<template>
  <div class="pt-12 sm:pt-14 md:pt-16 lg:pt-20">
    <section class="bg-hks-beige py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="section-title text-center">Industry Insights</h1>
        <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          Expert analysis and thought leadership on global youth mobility, education, and cross-border services
        </p>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="article in articles" :key="article.id" class="card hover:-translate-y-2 transition-transform duration-300">
            <div class="w-full h-56 bg-hks-gray-light rounded-t-lg flex items-center justify-center overflow-visible">
              <svg class="h-20 w-20 text-hks-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="p-6">
              <span class="text-xs font-semibold text-hks-red uppercase tracking-wide">{{ article.category }}</span>
              <h3 class="text-xl font-serif font-bold text-hks-gray-dark mt-2 mb-3">{{ article.title }}</h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ article.excerpt }}</p>
              <div class="flex items-center justify-between">
                <span class="text-gray-400 text-sm">{{ article.date }}</span>
                <a href="#" class="text-hks-red hover:text-hks-red-dark font-semibold text-sm">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-hks-gray-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="section-title">Latest Reports</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="report in reports" :key="report.id" class="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-sm">
            <div class="w-14 h-14 bg-hks-red rounded-lg flex items-center justify-center flex-shrink-0 overflow-visible">
              <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-hks-gray-dark mb-1">{{ report.title }}</h3>
              <p class="text-gray-500 text-sm mb-2">{{ report.date }}</p>
              <a href="#" class="text-hks-red hover:text-hks-red-dark text-sm font-medium">Download PDF →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-hks-red rounded-lg p-8 md:p-12 text-white">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-2xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p class="text-white/80 mb-6">
                Get the latest industry insights, research reports, and updates on global youth mobility delivered straight to your inbox.
              </p>
              <form @submit.prevent="handleNewsletter" class="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  v-model="email"
                  placeholder="Enter your email address" 
                  class="flex-1 px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none"
                />
                <button type="submit" class="bg-white text-hks-red font-semibold py-3 px-8 rounded-lg hover:bg-hks-gold-light transition-colors">
                  Subscribe
                </button>
              </form>
              <p v-if="subscribed" class="text-hks-gold mt-4 text-sm">Thank you for subscribing!</p>
            </div>
            <div class="hidden md:block">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/20 rounded-lg p-4 text-center">
                  <div class="text-3xl font-bold">10K+</div>
                  <div class="text-white/80 text-sm">Subscribers</div>
                </div>
                <div class="bg-white/20 rounded-lg p-4 text-center">
                  <div class="text-3xl font-bold">50+</div>
                  <div class="text-white/80 text-sm">Insights Published</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

const articles = [
  {
    id: 1,
    category: 'Trends',
    title: 'Global Youth Mobility Trends 2024',
    excerpt: 'An in-depth analysis of the latest trends in international student mobility and cross-border education patterns.',
    date: 'June 2024'
  },
  {
    id: 2,
    category: 'Policy',
    title: 'Visa Policy Changes Across Major Destinations',
    excerpt: 'Understanding the recent visa policy updates and their impact on international students and professionals.',
    date: 'May 2024'
  },
  {
    id: 3,
    category: 'Research',
    title: 'The Future of Work: Global Talent Migration',
    excerpt: 'Exploring how AI and digital transformation are reshaping international career opportunities for young professionals.',
    date: 'April 2024'
  }
]

const reports = [
  {
    id: 1,
    title: 'Global Youth Mobility Report 2024',
    date: 'Published: June 2024',
    url: '#'
  },
  {
    id: 2,
    title: 'International Education Market Analysis',
    date: 'Published: May 2024',
    url: '#'
  },
  {
    id: 3,
    title: 'AI in Cross-Border Services',
    date: 'Published: April 2024',
    url: '#'
  },
  {
    id: 4,
    title: 'CSR Impact Report 2023',
    date: 'Published: March 2024',
    url: '#'
  }
]

const handleNewsletter = () => {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => {
      subscribed.value = false
    }, 3000)
  }
}
</script>
