<template>
  <div id="scrollspy-scrollable-parent-1" class="max-h-full overflow-y-auto scrollbar-y bg-white rounded-md pb-4 dark:bg-gray-800">
    <Header v-bind="props" />

    <div id="scrollspy-1" class="mt-3 space-y-4">
      <div id="first">
        <Cover v-bind="coverProps" />
      </div>

      <div id="second">
        <Feature />
      </div>

      <div id="third">
        <Services />
      </div>

      <div id="fourth">
        <ContactUs />
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
import Feature from '@/components/Feature.vue'
import Services from '@/components/Services.vue'
import faq from '@/components/faq.vue'
import ContactUs from '@/components/ContactUs.vue'

// contents
import th from '@/assets/locales/th.json'
import en from '@/assets/locales/en.json'

// property
const props = defineProps({
  lang: String
})

// cover page text setup
const msg = props.lang === "th" ? th : en
const coverProps = {
  announcement: msg.announcement,
  title: msg.title,
  description: msg.description.join("\n"),
  schedule: msg.schedule
}
</script>
