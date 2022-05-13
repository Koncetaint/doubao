<template>
   <div>
       <!-- 登录欢迎 -->
       <LoginWelcome/>
       <!-- 每日一句 -->
       <Tip/>
        <!-- 推广 -->
        <Promotion/>
  </div>
</template>

<script>
import Promotion from './Promotion.vue'
import Tip from './Tip.vue'
import LoginWelcome from './LoginWelcome.vue'
export default {
  components: { Promotion ,Tip,LoginWelcome},
   name:'CardBar'
}
</script>

<style>

</style>