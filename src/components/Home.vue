<template>
  <div class="restaurants">
    <div class="restaurants__img"></div>
    <h1 class="restaurants__header">Najlepsze restauracje w Poznaniu</h1>
    <div class="loader" v-if="loading">
      <div class="loader__item loader__item-1"></div>
      <div class="loader__item loader__item-2"></div>
      <div class="loader__item loader__item-3"></div>
    </div>
    <ul v-else class="restaurants__list">
      <li
        class="restaurants__item"
        v-for="restaurant in restaurants"
        :key="restaurant.restaurant.id"
      >
        <a :href="restaurant.restaurant.events_url">{{restaurant.restaurant.name}}</a>
        Ocena: {{restaurant.restaurant.user_rating.aggregate_rating}}
        Kuchnia: {{restaurant.restaurant.cuisines}}
        <router-link :to="`/restaurant/${restaurant.restaurant.id}`">Więcej</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Home',
  computed: {
    restaurants () {
      if (store.restaurants.length > 0) {
        const sorted = store.restaurants.sort(
          (a, b) =>
            parseFloat(b.restaurant.user_rating.aggregate_rating) -
            parseFloat(a.restaurant.user_rating.aggregate_rating)
        )
        return sorted
      } else {
        return []
      }
    },
    loading () {
      return store.loading
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.restaurants {
  &__img {
    height: 25vh;
    background-image: url("../assets/food.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
    box-sizing: border-box;
  }
  &__header {
    font-weight: normal;
    text-align: center;
  }
  &__list {
    margin: 0 15px;
    list-style: none;
    padding: 0;
    text-align: center;
    .restaurants__item {
      font-size: 16px;
      a {
        color: #42b983;
      }
    }
  }
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  &__item {
    background-color: #42b983;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
  &__item-1 {
    animation: opacity 1.1s ease-in-out alternate infinite;
  }
  &__item-2 {
    margin: 0 25px;
    animation: opacity 1.1s ease-in-out 0.5s alternate infinite;
  }
  &__item-3 {
    animation: opacity 1.1s ease-in-out 1s alternate infinite;
  }
  @keyframes opacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
}
</style>
