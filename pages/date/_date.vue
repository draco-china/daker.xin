<template>
  <div class="index">
    <article-list :article="article" @loadmore="loadmoreArticle"></article-list>
  </div>
</template>

<script>
  import ArticleList from '~/components/archive/list'
  export default {
    name: 'data-article-list',
    validate ({ params }) {
      return !Object.is(new Date(params.date).toString(), 'Invalid Date')
    },
    fetch({ store, params }) {
      return store.dispatch('loadArticles', params)
    },
    head() {
      return { title: `${this.defaultParams.date} | Date` }
    },
    components: {
      ArticleList
    },
    computed: {
      article() {
        return this.$store.state.article.list
      },
      defaultParams() {
        return {
          date: this.$route.params.date
        }
      },
      nextPageParams() {
        return Object.assign({
          page: this.article.data.pagination.currentPage + 1
        }, this.defaultParams)
      }
    },
    methods: {
      loadmoreArticle() {
        this.$store.dispatch('loadArticles', this.nextPageParams)
      }
    }
  }
</script>