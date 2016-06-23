<template>
  <div class="destination {{destination}}">
    <h2 class="title"><span>Irány</span>{{destinationTranslated}}!</h2>
    <p class="description">{{msg}}<p>
    <a class="back" href="/">Játsz újra!</a>
  </div>
</template>

<script>
import store from '../store'
import VueRouter from 'vue-router'
export default {
  name: 'Destination',
  methods: {
    getData: function() {
      const currentData = store.fetchResponses()
      const required = ['movie', 'todo', 'item', 'duration']

      for (let d of required) {
        if (typeof currentData[d] === 'undefined') {
          var router = new VueRouter()
          console.log('redirect to ' + d)
          router.go('/' + d);
        }

      }

      // get data from store based on responses
      const translator = {
        'africa': 'Afrika',
        'europe': 'Európa',
        'usa': 'USA',
        'australia': 'Ausztrália',
        'asia': 'Ázsia',
        'central': 'A Karib'
      }
      const storeDestination = store.getDestination()
      const translated = translator[storeDestination['destination']];

      return Object.assign({}, currentData, storeDestination, { destinationTranslated: translated})
    }
  },
  data () {
    // store is not available here
    return this.getData()
  },
  route: {
    data ({ to }) {
      // Promise sugar syntax: return an object that contains Promise fields.
      // http://router.vuejs.org/en/pipeline/data.html#promise-sugar
      document.title = 'Irány ' + this.getData().destinationTranslated + '!'
      return
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

@font-face
  font-family Besom
  src url('../fonts/Besom-free-font.otf') format('opentype'), url('../fonts/Besom-free-font.ttf') format('truetype');
  font-weight normal
  font-style normal

.title
  text-align center
  font-size 3.6rem
  margin 0.25em 0 0 0
  line-height 3.2rem
  font-family Besom
  color $text-light
  span
    display block
    font-size 22px
.destination
  position relative
  box-sizing border-box
  max-width 540px
  min-height 720px
  margin 0 auto
  background-size cover
  background-repeat no-repeat
  background-position center
  border 12px solid #fff
  box-shadow 1px 1px 8px -1px $text-dark
  &.africa
    background-image url('../img/africa.jpg')
    .description
      max-width 47%
      top 25%
  &.asia
    background-image url('../img/asia.jpg')
    .description
      max-width 50%
      top 28%
      left 50%
  &.australia
    background-image url('../img/australia.jpg')
    .description
      top 30%
      left 15%
      width 75%
  &.central
    background-image url('../img/central.jpg')
    .description
      top 27%
      color #a96807
  &.europe
    background-image url('../img/europe.jpg')
  &.usa
    background-image url('../img/usa.jpg')
    .description
      top 27%
      left 52%
      width 51%
.description
  position absolute
  bottom 60px
  box-sizing border-box
  line-height 1.2em
  padding 0.6em 0.8em
  width calc(100% - 20px)
  font-weight 700
  margin 0
  color $text-light
.back
  position absolute
  bottom 10px
  left 50%
  margin-left -85px
  display block
  box-sizing border-box
  width 170px
  padding 0.4em 0.6em
  border-radius 2px
  background $color-aqua
  text-align center
</style>
