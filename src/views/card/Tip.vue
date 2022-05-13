<template>
   <div>
     <el-card class="box-card" shadow="never">
          <div slot="header">
              <span>每日一句</span>
          </div>
          <div>
              <div class="has-text-left block">
                  {{tip.content}}
              </div>
              <div class="has-text-right mt-5 block">
                  ——{{tip.author}}
              </div>
          </div>
      </el-card>
  </div>
</template>

<script>
import {getTodayTip} from '@/api/tip'
export default {
    name:'Tip',
    data(){
        return {
            tip: {}
        }
    },
    methods:{
        async fetchTodayTip(){
            getTodayTip().then(response => {
                const { data } = response
                this.tip = data
            }
            )
        }
    },
    created(){
        this.fetchTodayTip()
    }
}
</script>

<style>

</style>