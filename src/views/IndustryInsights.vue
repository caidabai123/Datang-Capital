<template>
  <div class="pt-12 sm:pt-14 md:pt-16 lg:pt-20">
    <section class="bg-hks-beige py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-overline text-warm-secondary mb-6 tracking-wider">Expert Analysis</p>
          <h1 class="text-display-2 font-serif font-bold text-warm-primary text-opacity-high mb-6">
            Industry Insights
          </h1>
          <p class="section-subtitle max-w-3xl mx-auto">
            Expert analysis and thought leadership on global youth mobility, education, and cross-border services
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div v-for="article in articles" :key="article.id" class="card hover:-translate-y-2 transition-transform duration-300">
            <div class="w-full h-56 rounded-t-lg overflow-hidden">
              <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <span class="text-body-xs font-semibold text-warm-primary uppercase tracking-wide">{{ article.category }}</span>
              <h3 class="text-heading-3 font-serif font-bold text-cool-primary text-opacity-high mt-3 mb-3">{{ article.title }}</h3>
              <p class="text-body-base text-cool-secondary text-opacity-medium mb-4 line-clamp-3">{{ article.excerpt }}</p>
              <div class="flex items-center justify-between">
                <span class="text-body-xs text-cool-muted">{{ article.date }}</span>
                <a href="#" class="text-warm-primary hover:text-hks-red-dark font-semibold text-body-sm">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-hks-gray-light">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="text-overline text-warm-secondary mb-4 tracking-wider">Research</p>
          <h2 class="section-title">Latest Reports</h2>
          <p class="section-subtitle max-w-2xl mx-auto">
            In-depth research and analysis on global youth mobility trends
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="report in reports" :key="report.id" class="bg-white rounded-xl p-6 flex items-center space-x-4 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="w-14 h-14 bg-hks-red rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-heading-4 font-semibold text-cool-primary text-opacity-high mb-1">{{ report.title }}</h3>
              <p class="text-body-xs text-cool-secondary text-opacity-medium mb-2">{{ report.date }}</p>
              <a href="#" class="text-warm-primary hover:text-hks-red-dark text-body-sm font-medium">Download PDF →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-hks-red rounded-2xl p-8 md:p-12 text-white">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 class="text-heading-2 font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p class="text-white/80 text-body-base mb-6">
                Get the latest industry insights, research reports, and updates on global youth mobility delivered straight to your inbox.
              </p>
              <form @submit.prevent="handleNewsletter" class="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  v-model="email"
                  placeholder="Enter your email address" 
                  class="flex-1 px-5 py-3 rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-hks-gold"
                />
                <button type="submit" class="bg-white text-hks-red font-semibold py-3 px-8 rounded-xl hover:bg-hks-gold-light transition-colors">
                  Subscribe
                </button>
              </form>
              <p v-if="subscribed" class="text-hks-gold mt-4 text-body-sm">Thank you for subscribing!</p>
            </div>
            <div class="hidden md:block">
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-white/20 rounded-xl p-5 text-center">
                  <div class="text-4xl font-bold">10K+</div>
                  <div class="text-white/80 text-body-sm">Subscribers</div>
                </div>
                <div class="bg-white/20 rounded-xl p-5 text-center">
                  <div class="text-4xl font-bold">50+</div>
                  <div class="text-white/80 text-body-sm">Insights Published</div>
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
    date: 'June 2024',
    image: 'https://picsum.photos/id/1073/800/600'
  },
  {
    id: 2,
    category: 'Policy',
    title: 'Visa Policy Changes Across Major Destinations',
    excerpt: 'Understanding the recent visa policy updates and their impact on international students and professionals.',
    date: 'May 2024',
    image: 'https://picsum.photos/id/1077/800/600'
  },
  {
    id: 3,
    category: 'Research',
    title: 'The Future of Work: Global Talent Migration',
    excerpt: 'Exploring how AI and digital transformation are reshaping international career opportunities for young professionals.',
    date: 'April 2024',
    image: 'https://picsum.photos/id/1074/800/600'
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
