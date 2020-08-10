<template>
  <div class="restaurants">
    <div class="restaurants__img"></div>
    <h1 class="restaurants__header">Najlepsze restauracje w Poznaniu</h1>
    <ul class="restaurants__list">
      <li
        class="restaurants__item"
        v-for="restaurant in restaurants"
        :key="
     restaurant.restaurant.id"
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
</style>
