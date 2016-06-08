<template>
  <div class="duration-view">
    <h2>Mennyi időre küldenél el minket?</h2>
    <a href="#/destination/" v-on:click="setResponse('2')" class="time"><span>2</span> hét</a>
    <a href="#/destination/" v-on:click="setResponse('3')" class="time"><span>3</span> hónap</a>
    <a href="#/destination/" v-on:click="setResponse('4')" class="time"><span>4</span> hét</a>
    <a href="#/destination/" v-on:click="setResponse('6')" class="time"><span>6</span> hónap</a>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'DurationView',
  methods: {
    setResponse: function(time) {
      store.setResponse('duration', time)
      console.log('duration', time)
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
      document.title = 'Testing DurationView'
      return
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

.duration-view
  background-color $color-aqua
  text-align center
  padding-bottom 40px
.time
  display inline-block
  width 50%
  height 250px
  max-width 220px
  vertical-align center
  padding-bottom 20px
  line-height 250px
  span
    width 100%
    font-size 240%
    font-weight 900
  &:hover
    background-color darken($color-aqua, 12%)
</style>
