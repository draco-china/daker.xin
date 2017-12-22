<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    // eslint-disable-next-line
    let { data } = await axios.get('/api/users')
    return { users: data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>

<style scoped>
.container
{
    margin: 0;
    width: 100%;
    padding: 100px 0;
    text-align: center;
}

.button, .button:visited
{
    display: inline-block;
    color: black;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #000;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 45px;
}

.button:hover, .button:focus
{
    color: #fff;
    background-color: #000;
}

.title
{
    color: #000;
    font-weight: 300;
    font-size: 2.5em;
    margin: 0;
}
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
