<template>
  <div class="intro-view">
    <h2>Segíts nekünk úticélt választani!</h2>
    <div class="icons">
      <img src="../img/airplane.svg" alt="Iranytu">
    </div>
    <p class="intro">Kicsit bizonytalanok vagyunk, hova is menjünk nászútra, ezért a Te segítségedet kérjük, hogy megtalálhassuk az ideális úticélt. Nincs más dolgod, mint négy egyszerű kérdésre válaszolni, és máris eljuttattad hozzánk ajánlásodat.</p>
    <p class="intro">
      Köszönjük!
      <span>Szandra és Peti</span>
    </p>
    <div class="start">
      <a href="#/movie">Start</a>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Intro',
  data () {
    return {
      user: {}
    }
  },
  route: {
    data ({ to }) {
      // Promise sugar syntax: return an object that contains Promise fields.
      // http://router.vuejs.org/en/pipeline/data.html#promise-sugar
      document.title = 'Nászútválasztó'
      for (let value of ['movie', 'item', 'todo', 'duration']) {
        store.setResponse(value, null)
      }
      store.clearSession()
      return {}
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"
.intro-view
  color $text-light
  background-color $color-turquoise
  padding 1.4rem 1.8rem
  h2
    text-align center
    margin-bottom 0.4rem
.icons
  text-align center
  img
    height 140px
.intro
  box-sizing border-box
  line-height 1.5em
  margin 0
  padding 0 0.8em 2.2em 1.6em
  max-width 100%
  span
    float right
.start
  a
    display block
    width 130px
    background-color lighten($color-turquoise, 10%)
    padding 8px 10px
    border-radius 2px
    margin 60px auto 50px auto
    text-align center
    &:hover
      background-color lighten($color-turquoise, 13%)
</style>
