<template>
  <div class="flex">
    <main class="m-auto">
      <Post
        v-for="a of arr"
        :key="a"
        :avatar="a.avatar"
        :title="a.author"
        :img="a.imgUrl"
      ></Post>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import Post from '../components/post.vue'


export default {
  components: {
    Post,
  },
  data: () => {
    return {
      arr: null,
    }
  },
  mounted () {
    axios.get('http://localhost:3248').then((response) => {
      this.arr = response.data;
}); 
  },
}




</script>

<style>
</style>
