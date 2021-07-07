import Vue from 'vue'

const state = Vue.observable({
  restaurants: {},
  loading: false,
  error: false
})

export default state
