<script setup>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

const linepay = () => {
  axios.post('http://localhost:3000/v1/line_pay/20230601075358')
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
}

</script>

<template>
  <div>
     <button @click="linepay">
    axios 送出
  </button>
  <form
    action="http://localhost:3000/v1/line_pay/20230601075358"
    method="POST"
  >
    <button type="submit">
      送出表單
    </button>
  </form>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
