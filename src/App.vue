<script setup>
import {ref, computed} from 'vue'
import axios from 'axios'

const backendUrl = import.meta.env.VITE_BACKEND_URL
const orderNo = ref('')
const url = ref('')
const urlCombind = computed(()=> {
  const res = `${backendUrl}/v1/line_pay/${orderNo.value}`
  console.log(res);
  return res
})
const linepay = () => {
  axios.post(`${urlCombind.value}`)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
}

</script>

<template>
  <div>
    <input type="text" v-model="orderNo">
     <button @click="linepay">
      axios 送出
    </button>
    <form
      :action="url"
      method="POST"
    >
      <button type="submit">
        送出表單
      </button>
    </form>
    <hr>
    <RouterView/>
    </div>
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
