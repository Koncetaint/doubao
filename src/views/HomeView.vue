<template>
  <div>
    <div class="box">🔔 {{ billBoard.content }}</div>
    <!--box样式是buefy的-->
    <div class="columns">
      <div class="column" is-three-quarters>
        <TopicList/>
      </div>
      <div class="column">
        <CardBar></CardBar>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBillboard } from "@/api/billboard";
import CardBar from '@/views/card/CardBar.vue'
import PostList from '@/views/post/index.vue'    //组件中命名为TopicList，引入时相当于设置了别名而已

export default {
  name: "HomeView",
  components:{CardBar,TopicList:PostList},
  data() {
    return {
      billBoard: {
        content: "",
      },
    };
  },
  created() {
    this.fetchBillboard();
  },
  methods: {
    async fetchBillboard() {
      getBillboard().then((value) => {
        //  console.log(value.data.content);
        const { data } = value;
        this.billBoard = data;
        console.log(this.billBoard);
      });
    },
  },
};
</script>
