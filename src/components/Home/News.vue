<template>
  <div class="row news">
    <template v-for="(item, index) in news">
      <div class="col-lg-4 col-md-4 col-12 mt-4 mt-lg-0" :key="index">
        <NewsItem :data="item" />
      </div>
    </template>
  </div>
</template>

<script>
import NewsItem from '@/components/Home/NewsItem.vue'
export default {
  components: {
    NewsItem
  },
  props: {
    news: {
      type: Array,
      required: true
    }
  }
}
</script>
