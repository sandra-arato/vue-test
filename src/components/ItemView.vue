<template>
  <div class="items-view">
    <h2>Mi nem hiányozhat a bőröndünkből?</h2>
    <a href="#/todo/" v-on:click="setResponse('swim')" class="pick">
      <img src="../img/bikini.svg" alt="Fürdőruha">
      <span>Fürdőruha</span>
    </a>
    <a href="#/todo/" v-on:click="setResponse('cam')" class="pick">
      <img src="../img/camera.svg" alt="Fényképezőgép">
      <span>Fényképezőgép</span>
    </a>
    <a href="#/todo/" v-on:click="setResponse('boot')" class="pick">
      <img src="../img/boots.svg" alt="Túrabakancs">
      <span>Túrabakancs</span>
    </a>
    <a href="#/todo/" v-on:click="setResponse('hat')" class="pick">
      <img src="../img/hat.svg" alt="Kalap">
      <span>Kalap</span>
    </a>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'ItemView',
  methods: {
    setResponse: function(item) {
      store.setResponse('item', item)
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
      document.title = 'Nászútválasztó - Mit vigyünk magunkkal?'
      return
    }
  }
}
</script>

<style lang="stylus">
@import "../variables.styl"

.items-view
  background-color $color-sun
  text-align center
  padding-bottom 40px
  .pick
    display inline-block
    box-sizing border-box
    width 45%
    max-width 220px
    vertical-align center
    padding-bottom 30px
    margin-bottom 20px
    &:hover
      background-color darken($color-sun, 5%)
    img
      width 80%
      object-fit cover

</style>
