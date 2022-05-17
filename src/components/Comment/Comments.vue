<template>
  <section class="box comments">
    <hr />
    <h3 class="title is-5">Comments</h3>
    
    <!-- 添加评论 -->
    <lv-comments-form 
    :slug="slug" 
    v-if="token" 
    @loadComments="fetchComments"
    />
    <!-- 评论列表 -->
    <lv-comments-item
      v-for="comment in comments"
      :key="`comment-${comment.id}`"
      :comment="comment"
    />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchCommentsByTopicId } from '@/api/comment'
import LvCommentsItem from './CommentsItem'
import LvCommentsForm from '@/components/Comment/CommentsForm'
export default {
  name: 'LvComments',
  components: {
    LvCommentsItem,
    LvCommentsForm
  },
  data() {
    return {
      comments: []
    }
  },
  props: {
    slug: {
      type: String,
      default: null
    }
  },
  computed: {
    ...mapGetters([
      'token'
    ])
  },
  async mounted() {
    await this.fetchComments(this.slug)
  },
  methods: {
    // 初始化
    async fetchComments(topic_id) {
      console.log(topic_id)
      fetchCommentsByTopicId(topic_id).then(response => {
        const { data } = response
        this.comments = data
      })
    }
  }
}
</script>