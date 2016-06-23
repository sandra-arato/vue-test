<template>
  <div class="movie-view">
    <h2>Milyen film készülne a nászútunkból?</h2>
    <a href="#/item/" v-on:click="setResponse('indiana')" class="pick">
      <span>Indiana Jones</span>
      <img src="../img/indiana-jones.jpg" alt="Indiana Jones">
    </a>
    <a href="#/item/" v-on:click="setResponse('50first')" class="pick">
      <span>Az 50 első randi</span>
      <img src="../img/50-elso-randi.jpg" alt="Indiana Jones">
    </a>
    <a href="#/item/" v-on:click="setResponse('eatpray')" class="pick">
      <span>Ízek, imák, szerelmek</span>
      <img src="../img/izek-imak-szerelmek.jpg" alt="Indiana Jones">
    </a>
    <a href="#/item/" v-on:click="setResponse('roman')" class="pick">
      <span>Római vakáció</span>
      <img src="../img/romai-vakacio.jpg" alt="Indiana Jones">
    </a>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'MovieView',
  methods: {
    setResponse: function(movie) {
      store.setResponse('movie', movie)
      console.log('movie', movie)
      return store
    }
  },
  data () {
    return {
      movie: {}
    }
  },
  route: {
    data ({ to }) {
      // Promise sugar syntax: return an object that contains Promise fields.
      // http://router.vuejs.org/en/pipeline/data.html#promise-sugar
      document.title = 'Nászútválasztó - Milyen lenne a nászútunk?'
      return
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

.movie-view
  background-color $color-heart
  text-align center
  padding-bottom 40px
  .pick
    display inline-block
    box-sizing border-box
    width 45%
    max-width 220px
    padding-top 20px
    margin-bottom 10px
    vertical-align bottom
    &:hover
      background-color darken($color-heart, 5%)
    img
      margin 0.5rem 0 1rem 0
      width 80%
      object-fit cover
</style>
