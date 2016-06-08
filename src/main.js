import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import Intro from './components/Intro.vue'
import Destination from './components/Destination.vue'
import ItemView from './components/ItemView.vue'
import MovieView from './components/MovieView.vue'
import TodoView from './components/TodoView.vue'
import DurationView from './components/DurationView.vue'

// install router
Vue.use(Router)

// register filters globally
Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

// routing
var router = new Router()

router.map({
  '/': {
    component: Intro
  },
  '/item/': {
    component: ItemView
  },
  '/movie/': {
    component: MovieView
  },
  '/todo/': {
    component: TodoView
  },
  '/duration/': {
    component: DurationView
  },
  '/destination': {
    component: Destination
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0);
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
