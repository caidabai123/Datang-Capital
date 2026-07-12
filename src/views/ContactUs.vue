<template>
  <div class="pt-12 sm:pt-14 md:pt-16 lg:pt-20">
    <section class="bg-hks-beige py-20 md:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-overline text-warm-secondary mb-6 tracking-wider">Get In Touch</p>
          <h1 class="text-display-2 font-serif font-bold text-warm-primary text-opacity-high mb-6">
            Contact Us
          </h1>
          <p class="section-subtitle max-w-3xl mx-auto">
            Get in touch with our team for inquiries about our services, partnerships, or investment opportunities
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2">
            <div class="card">
              <h2 class="text-heading-2 font-serif font-bold text-cool-primary text-opacity-high mb-6">Send Us a Message</h2>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-cool-primary text-opacity-high font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      v-model="form.name"
                      class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-hks-red focus:ring-2 focus:ring-hks-gold/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label class="block text-cool-primary text-opacity-high font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      v-model="form.email"
                      class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-hks-red focus:ring-2 focus:ring-hks-gold/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label class="block text-cool-primary text-opacity-high font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    v-model="form.subject"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-hks-red focus:ring-2 focus:ring-hks-gold/20 transition-all duration-300"
                    placeholder="Message subject"
                  />
                </div>
                <div>
                  <label class="block text-cool-primary text-opacity-high font-medium mb-2">Message</label>
                  <textarea 
                    v-model="form.message"
                    rows="5"
                    class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-hks-red focus:ring-2 focus:ring-hks-gold/20 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button type="submit" class="btn-primary w-full rounded-xl">
                  Send Message
                </button>
                <p v-if="submitted" class="text-warm-primary text-center font-medium">Thank you for your message! We will get back to you shortly.</p>
              </form>
            </div>
          </div>

          <div class="space-y-6">
            <div class="card">
              <h3 class="text-heading-3 font-serif font-bold text-cool-primary text-opacity-high mb-4">Head Office</h3>
              <div class="space-y-4">
                <div>
                    <p class="text-cool-primary text-opacity-high font-medium">Address</p>
                    <p class="text-body-sm text-cool-secondary text-opacity-medium">Level 17, 123 Pitt St, Sydney NSW 2000, Australia</p>
                  </div>
                <div>
                    <p class="text-cool-primary text-opacity-high font-medium">Email</p>
                    <p class="text-body-sm text-cool-secondary text-opacity-medium">contact@datangcapital.com.au</p>
                  </div>
                <div>
                    <p class="text-cool-primary text-opacity-high font-medium">Phone</p>
                    <p class="text-body-sm text-cool-secondary text-opacity-medium">+61 2 8211 0688</p>
                  </div>
              </div>
            </div>

            <div class="card">
              <h3 class="text-heading-3 font-serif font-bold text-cool-primary text-opacity-high mb-4">Business Hours</h3>
              <div class="space-y-2 text-body-sm">
                <div class="flex justify-between">
                  <span class="text-cool-primary text-opacity-high">Monday - Friday</span>
                  <span class="text-cool-secondary text-opacity-medium">10:00 AM - 5:00 PM AEST</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-cool-primary text-opacity-high">Saturday & Sunday</span>
                  <span class="text-cool-secondary text-opacity-medium">By appointment</span>
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
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  if (form.name && form.email && form.message) {
    submitted.value = true
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
    setTimeout(() => {
      submitted.value = false
    }, 5000)
  }
}
</script>
