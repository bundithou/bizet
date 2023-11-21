<template>
  <div id="scrollspy-scrollable-parent-1" class="max-h-full overflow-y-auto scrollbar-y bg-white rounded-md pb-4 dark:bg-gray-800">
    <Header />

    <div id="scrollspy-1" class="mt-3 space-y-4">
      <div id="first">
        <Cover />
      </div>

      <div id="second">
        <WhyUs />
      </div>

      <div id="third">
        <Services />
      </div>

      <div id="fourth">
        <!-- <ContactUs /> -->
      </div>

      <div id="fifth">
        <faq />
      </div>
    </div>
  </div>
</template>


<script setup>
// components
import Header from '@/components/Header.vue'
import Cover from '@/components/Cover.vue'
import WhyUs from '@/components/WhyUs.vue'
import Services from '@/components/Services.vue'
import faq from '@/components/faq.vue'
// import ContactUs from '@/components/ContactUs.vue'
</script>
