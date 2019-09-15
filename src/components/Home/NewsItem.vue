<template>
	<router-link class="newsItem" :title="data.title" :to="{ name: 'detail', params: { id: data.id } }">
		<img class="newsItem__image" :src="data.image" :alt="data.title">
		<div class="newsItem__content">
			<h3 class="newsItem__title">{{data.title}}</h3>
			<p class="newsItem__snippet">{{data.snippet.substr(0,50)}}...</p>
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.newsItem {
	position: relative;
	display: block;
	overflow: hidden;
	&:hover {
		.newsItem__image {
			transform: scale(1.1);
			@include transition(transform,200ms,ease-in);
		}
	}
	&__image {
		width: 100%;
		@include transition(transform,200ms,ease-out);
	}
	&__content {
		position: absolute;
		top: unset;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 1rem;
		color: #fff;
		background: rgba($color: #000000, $alpha: 0.7);
	}
	&__title {
		text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
		margin-bottom: 0;
	}
	&__snippet {
		margin-bottom: 0;
	}
}
</style>