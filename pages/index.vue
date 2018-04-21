<template>
  <div class="index">
    <article-list :article="article" @loadmore="loadmoreArticle"></article-list>
  </div>
</template>

<script>
  /* eslint-disable */
  import Service from '~/plugins/axios'
  import ArticleList from '~/components/archive/list'
  // import Carrousel from '~/components/archive/carrousel'
  // import Announcement from '~/components/archive/announcement'
  export default {
    name: 'index',
    fetch({ store }) {
      return Promise.all([
        store.dispatch('loadArticles'),
        // store.dispatch('loadAnnouncements')
      ])
    },
    components: {
      // Carrousel,
      // Announcement,
      ArticleList
    },
    computed: {
      article() {
        return this.$store.state.article.list
      },
      // announcement() {
      //   return this.$store.state.announcement
      // },
      nextPageParams() {
        return {
          currentPage: this.article.data.pagination.currentPage + 1,
          pageSize: 1
        }
      }
    },
    methods: {
      loadmoreArticle() {
        this.$store.dispatch('loadArticles', this.nextPageParams)
      }
    }
  }
</script>