<template>
  <div class="article-list-item" :class="{ mobile: isMobile }">
    <div class="item-content" :class="{ mobile: isMobile }">
      <div class="item-thumb" v-if="!isMobile">
        <nuxt-link :to="`/article/${article.id}`">
          <img class="item-thumb-img"
               :src="article.thumb"
               :alt="article.title"
               :title="article.title">
        </nuxt-link>
      </div>
      <div class="item-body">
        <h4 class="item-title">
          <nuxt-link :to="`/article/${article.id}`" :title="article.title">{{ article.title }}</nuxt-link>
        </h4>
        <p class="item-description" style="-webkit-box-orient: vertical;" v-html="article.description"></p>
        <div class="item-meta">
          <span class="date">
            <i class="iconfont icon-clock"></i>
            <span>{{ article.create_at | toYMD }}</span>
          </span>
          <span class="views">
            <i class="iconfont icon-eye"></i>
            <span>{{ article.meta.views || 0 }}</span>
          </span>
          <span class="comments">
            <i class="iconfont icon-comment"></i>
            <span>{{ article.meta.comments || 0 }}</span>
          </span>
          <span class="likes">
            <i class="iconfont icon-like"></i>
            <span>{{ article.meta.likes || 0 }}</span>
          </span>
          <span class="categories">
            <i class="iconfont icon-list"></i>
            <nuxt-link v-if="article.category" :to="`/category/${article.category.slug}`">{{ article.category.name }}</nuxt-link>
            <span v-else>未分类</span>
          </span>
          <span class="tags">
            <i class="iconfont icon-tag"></i>
            <span v-if="!article.tag.length">无标签</span>
            <nuxt-link :key="index" :to="`/tag/${tag.slug}`" v-for="(tag, index) in article.tag">
              {{ tag.name }}
              <template v-if="!Object.is(index, article.tag.length - 1)">、</template>
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'article-list-item',
    props: {
      article: {
        type: Object
      }
    },
    computed: {
      isMobile() {
        return this.$store.state.option.isMobile
      }
    }
  }
</script>

<style lang="scss" scoped>
  .article-list-item {
    margin-bottom: 1em;
    background-color: $module-bg;
    &:last-child {
      margin: 0;
    }
    &:hover {
      background-color: $module-hover-bg;
    }
    > .item-content {
      display: block;
      overflow: hidden;
      height: 9.5em;
      padding: .5em;
      &:hover {
        > .item-thumb {
          .item-thumb-img {
            @include css3-prefix(opacity, .95);
            @include css3-prefix(transform, translateX(-.5em));
          }
        }
      }
      > .item-thumb {
        float: left;
        width: 12em;
        height: 8.5em;
        overflow: hidden;
        .item-thumb-img {
          min-width: 100%;
          width: calc(100% + .5em);
          max-width: calc(100% + .5em);
          height: auto;
          min-height: 8.5em;
          border-color: transparent;
          background-color: $module-hover-bg;
          @include css3-prefix(opacity, 1);
          @include css3-prefix(transform, translateX(0));
        }
      }
      > .item-body {
        float: right;
        width: 40em;
        height: 8.5em;
        > .item-title {
          font-size: 1em;
          font-weight: bold;
          color: $link-hover-color;
          margin-top: .2em;
          margin-bottom: .5em;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          > a {
            margin-left: 0;
            &:hover {
              display: inline-block;
              text-decoration: underline;
              margin-left: .5em;
            }
          }
        }
        > .item-description {
          height: 5em;
          margin: 0;
          margin-bottom: 0.3em;
          overflow: hidden;
          font-size: .9em;
          line-height: 1.8em;
          text-overflow: ellipsis;
          @include clamp(3);
        }
        > .item-meta {
          height: 2em;
          display: flex;
          justify-content: flex-start;
          align-items: baseline;
          overflow: hidden;
          font-size: .9em;
          line-height: 2em;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: normal;
          > .views,
          > .likes,
          > .comments,
          > .categories {
            min-width: 4em;
          }
          > .date,
          > .views,
          > .comments,
          > .likes,
          > .tags,
          > .categories {
            margin-right: 1em;
            > .iconfont {
              font-size: 1em;
              margin-right: .4em;
            }
          }
          > .tags {
            margin-right: 0;
            a {
              text-transform: capitalize;
              // margin-right: .5em;
            }
          }
        }
      }
      &.mobile {
        height: auto;
        > .item-body {
          width: 100%;
          height: auto;
          > .item-description {
            height: auto;
            margin-bottom: .5em;
          }
          > .item-meta {
            justify-content: space-between;
            > .date,
            > .views,
            > .comments,
            > .likes,
            > .tags,
            > .categories {
              margin: 0;
            }
          }
        }
      }
    }
  }
</style>