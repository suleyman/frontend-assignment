<template>
  <div class="home">
		<div class="container mb-5">
			<!-- Öne çıkan haberler -->
			<h2 class="section-title mt-4">Öne Çıkan Haberler</h2>
			<FeaturedNews class="mt-4" :featured-news="featuredNews" />
			<!-- Diğer haberler -->
			<h2 class="section-title mt-4">Son Dakika</h2>
			<News class="mt-0 mt-lg-4" :news="nonFeaturedNews" />
			<News class="mt-0 mt-lg-4" :news="nonFeaturedNews" />
			<News class="mt-0 mt-lg-4" :news="nonFeaturedNews" />
		</div>
  </div>
</template>

<script>
import FeaturedNews from '@/components/Home/FeaturedNews.vue'
import News from '@/components/Home/News.vue'
export default {
  components: {
		FeaturedNews,
		News
	},
	data() {
		return {
			news: []
		}
	},
  mounted() {
		// tüm haberleri getir
		this.$http.get('/news').then(response => {
			this.news = response.data;
		})
	},
	computed: {
		// isFeatured = true olan haberleri filtreleyen computed property
		featuredNews() {
			return this.news.filter(newsItem => newsItem.isFeatured)
		},
		// isFeatured = false olan haberleri filtreleyen computed property
		nonFeaturedNews() {
			return this.news.filter(newsItem => !newsItem.isFeatured)
		}
	}
}
</script>
