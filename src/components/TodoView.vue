<template>
  <div class="todo-view">
    <h2>Milyen programot ajánlanál nekünk?</h2>
    <a href="#/duration/" v-on:click="setResponse('scuba')" class="pick">
      <img src="../img/snorkel.svg" alt="Búvárkodás">
      <span>Búvárkodás</span>
    </a>
    <a href="#/duration/" v-on:click="setResponse('sunrise')" class="pick">
      <img src="../img/sunrise.svg" alt="Napfelkelte">
      <span>Napfelkelte nézése</span>
    </a>
    <a href="#/duration/" v-on:click="setResponse('4x4')" class="pick">
      <img src="../img/jeep.svg" alt="Terepjáró">
      <span>Terepjárózás</span>
    </a>
    <a href="#/duration/" v-on:click="setResponse('paragl')" class="pick">
      <img src="../img/paragliding.svg" alt="Siklóernyő">
      <span>Siklóernyőzés</span>
    </a>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'TodoView',
  methods: {
    setResponse: function(todo) {
      store.setResponse('todo', todo)
      console.log('todo', todo)
      return store
    }
  },
  data () {
    return {
      user: {}
    }
  },
  route: {
    data ({ to }) {
      // Promise sugar syntax: return an object that contains Promise fields.
      // http://router.vuejs.org/en/pipeline/data.html#promise-sugar
      document.title = 'Nászútválasztó - Mit ne hagyjunk ki?'
      return
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

.todo-view
  background-color $color-grass
  text-align center
  padding-bottom 40px
  .pick
    display inline-block
    box-sizing border-box
    width 45%
    max-width 220px
    vertical-align top
    padding-bottom 30px
    margin-bottom 20px
    &:hover
      background-color darken($color-grass, 5%)
    img
      width 80%
      object-fit cover
    span
      display block
      width 95%
      word-break break-all
</style>
