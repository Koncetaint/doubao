<template>
   <div>
      <el-card class="box-card" shadow="never">
          <div slot="header">
              <span>推广</span>
          </div>
          <div>
            <p v-for="(item,index) in list" :key="index" class="block">
                <a :href="item.link" target="_blank">{{item.title}}</a>
            </p>
          </div>
      </el-card>
  </div>
</template>

<script>
import { getList } from '@/api/promote'
export default {
   name:'Promotion',
   data(){
       return{
           list:[]
       } 
   },
   methods:{
       async fetchList(){
           getList().then( response => {
               const { data } = response
               this.list = data
           })
       }
   },
   created(){
       this.fetchList()
       console.log(this.list)
   }
}
</script>

<style>

</style>