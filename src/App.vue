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
  data () {
    return {
      restaurants: [],
      loading: false
    }
  },
  methods: {
    // eslint-disable-next-line
    fetchRestaurants: function() {
      this.loading = true
      const config = {
        'user-key': process.env.VUE_APP_API_KEY,
        Accept: 'application/json'
      }
      axios.get('https://developers.zomato.com/api/v2.1/search?entity_id=262&entity_type=city&count=20&collection_id=1&sort=rating&order=desc', { headers: config })
        .then((response) => {
          this.restaurants = response.data.restaurants
          this.loading = false
          store.restaurants = this.restaurants
        })
        .catch((error) => {
          console.log(error)
        })
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
  font-family: 'Roboto', sans-serif;
}
</style>
