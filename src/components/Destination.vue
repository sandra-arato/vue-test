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
      document.title = 'Testing view'
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
  font-size 56px
  margin 0.6em 0 0 0
  line-height 50px
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
  &.asia
    background-image url('../img/asia.jpg')
  &.australia
    background-image url('../img/australia.jpg')
  &.central
    background-image url('../img/central.jpg')
  &.europe
    background-image url('../img/europe.jpg')
  &.usa
    background-image url('../img/usa.jpg')
.description
  position absolute
  bottom 40px
  box-sizing border-box
  background rgba(214, 212, 207, 0.82)
  line-height 1.2em
  padding 0.6em 0.8em
  width calc(100% - 20px)
  font-weight 700
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
