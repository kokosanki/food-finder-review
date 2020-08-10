<template>
  <div>
    <div class="restaurant" v-if="restaurants.length > 0">
      <div
        class="restaurant__img"
        v-if="restaurant.restaurant.featured_image.length > 0"
        :style="{'background-image': 'url(' + restaurant.restaurant.featured_image + ')' }"
        alt="restaurant"
      ></div>
      <div class="restaurant__img" v-else alt></div>
      <div class="restaurant__header">
        <h1>
          <a :href="restaurant.restaurant.events_url">{{restaurant.restaurant.name}}</a>
        </h1>
        <h4>{{restaurant.restaurant.location.locality}}, {{restaurant.restaurant.location.city}}</h4>
      </div>
      <div class="restaurant__description">
        <div class="restaurant__links">
          <h3>Linki</h3>
          <a :href="restaurant.restaurant.photos_url">Zdjęcia</a>
          <br />
          <a :href="restaurant.restaurant.menu_url">Menu</a>
          <br />
          <a :href="restaurant.restaurant.events_url">Wydarzenia</a>
        </div>
        <div class="restaurant__info">
          <strong>Adres:</strong>
          {{restaurant.restaurant.location.address}}
          <br />
          <strong>Kuchnia:</strong>
          {{restaurant.restaurant.cuisines}}
          <br />
          <strong>Średni koszt obiadu dla 2 osób:</strong>
          {{restaurant.restaurant.average_cost_for_two}}zł
          <br />
          <strong>Ocena:</strong>
          {{restaurant.restaurant.user_rating.aggregate_rating}}
          <span
            style="color: rgb(63, 126, 0);"
          >({{restaurant.restaurant.user_rating.rating_text}})</span>
          <br />
          <p
            class="success"
            v-if="restaurant.restaurant.has_online_delivery"
          >Obsługuje przez internet</p>
          <p class="fail" v-else>Nie obsługuje zamówień przez Internet</p>
          <p
            class="success"
            v-if="restaurant.restaurant.is_table_reservation_supported"
          >Możliwość rezerwacji miejsc</p>
          <p v-else class="fail">Brak rezerwacji miejsc</p>
        </div>
      </div>
      <router-link class="restaurant__back" to="/">Back</router-link>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import store from '../store'

export default {
  computed: {
    restaurants () {
      return store.restaurants
    },
    restaurant () {
      if (this.restaurants.length > 0) {
        return this.restaurants.find(
          (item) => item.restaurant.id === parseInt(this.$route.params.id)
        )
      } else {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
.restaurant {
  font-size: 16px;
  text-align: center;
  a {
    color: #42b983;
  }
  p {
    margin: 0;
    font-weight: bold;
  }
  h4 {
    margin-bottom: 0;
  }
  &__img {
    height: 25vh;
    width: 100vw;
    background-image: url("../assets/food.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
  }
  &__header {
    text-align: center;
    h1 {
      font-weight: normal;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
  }
  &__links {
    text-align: center;
    border-bottom: 1px solid #42b983;
    padding: 0 0 20px 0;
  }
  &__info {
    padding: 20px 0 0 0;
    text-align: center;
  }
}
.success {
  color: #03290b;
}
.fail {
  color: #380404;
}
@media (min-width: 800px) {
  .restaurant {
    h4 {
      margin-bottom: 20px;
    }
    &__description {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    &__links {
      border-bottom: none;
      padding: 0 20px 0 0;
    }
    &__info {
      padding: 0 0 0 20px;
      border-left: 1px solid #42b983;
      text-align: left;
    }
  }
}
</style>
