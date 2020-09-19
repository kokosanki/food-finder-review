<template>
  <div class="loader">
      <div class="loader__item loader__item-1"></div>
      <div class="loader__item loader__item-2"></div>
      <div class="loader__item loader__item-3"></div>
    </div>
</template>

<style lang="scss" scoped>
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
