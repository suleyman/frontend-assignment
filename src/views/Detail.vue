<template>
  <div class="detail">
		<div class="container mb-5">
			<img class="detail__image" :src="newsDetail.image" :alt="newsDetail.title">
			<h1 class="detail__title my-4">{{newsDetail.title}}</h1>
			<div class="detail__content" v-html="newsDetail.body" />
		</div>
  </div>
</template>

<script>

export default {
	data() {
		return {
			newsDetail: {}
		}
	},
  mounted() {
		// id'si verilen haberi getir
		this.$http.get('/news/' + this.$route.params.id).then(response => {
			this.newsDetail = response.data;
		})
	}
}
</script>

<style lang="scss" scoped>
.detail {
	&__image {
		width: 100%;
	}
}
</style>