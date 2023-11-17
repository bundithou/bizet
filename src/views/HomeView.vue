<template>
  <main>
    <ScrollSpy v-bind="props"/>
  </main>
</template>

<script setup>
// Components
import ScrollSpy from '../components/ScrollSpy.vue';

const props = defineProps({
  lang: String
})
</script>
