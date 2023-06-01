<script setup>
import {ref, onMounted} from 'vue'
import {useRoute } from 'vue-router'

const router = useRoute()
const orderNo = ref('')
onMounted(() => {
    orderNo.value = router.params.orderNo
})
</script>
<template>
  導向到  order: 訂單號碼 {{ orderNo }}
</template>