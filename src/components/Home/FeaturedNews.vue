<template>
  <div class="featured">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in featuredNews" :key="index">
          <NewsItem :data="slide" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsItem from '@/components/Home/NewsItem.vue'
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    NewsItem
  },
  props: {
    featuredNews: {
      type: Array,
      required: true
    }
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    let featuredSlider = new Swiper('.featured .swiper-container', {
      slidesPerView: 1,
      loop: false,
      effect: 'slide'
    })
  }
}
</script>
