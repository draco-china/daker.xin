<template>
  <div class="index">
    <article-list :article="article" @loadmore="loadmoreArticle"></article-list>
  </div>
</template>

<script>
  import ArticleList from '~/components/archive/list'
  export default {
    name: 'tag-article-list',
    validate ({ params, store }) {
      return Boolean(params.tagSlug) && store.state.tag.data.list.find(tag => {
        return Object.is(tag.slug, params.tagSlug)
      })
    },
    fetch({ store, params }) {
      return store.dispatch('loadArticles', params)
    },
    head () {
      const slug = this.defaultParams.tagSlug || ''
      const title = slug.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
      return {
        title: `${title} | Tag`
      }
    },
    created() {
      if (!this.currentTag) {
        this.$router.back()
      }
    },
    components: {
      ArticleList
    },
    computed: {
      article() {
        return this.$store.state.article.list
      },
      currentTag() {
        return this.$store.state.tag.data.list.find((tag, index, arr) => {
          return Object.is(tag.slug, this.$route.params.tagSlug)
        })
      },
      defaultParams() {
        return {
          tagSlug: this.$route.params.tagSlug
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