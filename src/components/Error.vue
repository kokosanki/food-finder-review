<template>
  <div class="error-container">
    <h2 class="error-container__message">Something went wrong :(</h2>
  </div>
</template>

<style scoped lang="scss">
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  &__message {
    color: #960012;
    font-size: 2rem;
    padding: 0 15px;
    text-align: center;
  }
}
</style>
