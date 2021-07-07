<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import store from './store'

export default {
  name: 'App',
  methods: {
    fetchAllRestaurants: function () {
      this.loading = true
      const instance = axios.create({
        baseURL:
          'https://developers.zomato.com/api/v2.1/search?entity_id=262&entity_type=city&count=20&collection_id=1&sort=rating&order=desc',
        headers: {
          'user-key': process.env.VUE_APP_API_KEY,
          Accept: 'application/json'
        },
        params: {
          entity_id: '262',
          entity_type: 'city',
          count: '20',
          collection_id: '1',
          sort: 'rating',
          order: 'desc'
        }
      })
      return instance.get(this.baseURL, {
        headers: this.headers,
        params: this.params
      })
    },
    async fetchRestaurants () {
      store.loading = true
      try {
        const response = await this.fetchAllRestaurants()
        store.restaurants = response.data.restaurants
        store.loading = false
      } catch (ex) {
        store.error = true
        console.log(ex)
      }
    }
  },
  created () {
    this.fetchRestaurants()
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
* {
  color: #2c3e50;
  font-family: "Roboto", sans-serif;
}
</style>
