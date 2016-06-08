<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <h1>Nászútválasztó</h1>
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
    <div id="footer">
      <h3>Credits</h3>
      <p>Icons: <a href="//thenounproject.com/mockturtle/collection/wild-life/">Sergey Demushkin</a> &amp; <a href="https://thenounproject.com/pronoun/collection/sports/?i=298355">Anbileru Adaleru</a></p>
      <p>Fonts: <a href="//www.behance.net/gallery/22459913/besom-free-brush-font-">Krisijanis Mezulis &amp; Gatis Vilaks</a></p>
    </div>
  </div>
</template>

<style lang="stylus">
@import "../variables.styl"

@font-face
  font-family Metafors
  src url('../fonts/metafors-Regular.otf') format('opentype'), url('../fonts/metafors-Regular.ttf') format('truetype');
  font-weight normal;
  font-style normal;

html, body
  font-family Metafors
  font-size 18px
  height 100%
  margin 0
  background-color $bg
  color $text-dark
  letter-spacing 0.18rem;
ul
  list-style-type none
  padding 0
  margin 0
h2
  margin 1.2rem 0
  color $text-light
a
  color #fff
  cursor pointer
  text-decoration none

#wrapper
  box-sizing border-box
  position relative
  width 100%
  min-height 80px
  margin 0 auto

#header
  position relative
  box-sizing border-box
  max-width 600px
  margin 0 auto
  h1
    font-weight bold
    font-size 32px
    line-height 1.4
    vertical-align middle
    text-align center
    text-transform uppercase
    font-weight 900
    letter-spacing 0.02em
#footer
  width 100%
  margin 1.3rem 0
  font-size 60%
  color #555
  text-align center
  a
    color #555
    border-bottom 1px solid #888
.view
  background-color $bg
  width 100%
  max-width 600px
  transition opacity .2s ease
  box-sizing border-box
  padding 10px
  margin 0 auto
  &.v-enter, &.v-leave
    opacity 0

@media screen and (max-width: 700px)
  html, body
    margin 0
  #wrapper
    width 100%
</style>
