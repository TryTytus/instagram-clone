<template>
  <div class="bg-gray-100">
    <Header></Header>
    <Nuxt/>
  </div>
</template>

<script>
import Header from '../components/header.vue';

export default {
  components: {
    Header,
  },
}
</script>