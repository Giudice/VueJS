import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from './components/MovieList.vue'
import MovieEdit from './components/MovieEdit.vue'
import MovieDetails from './components/MovieDetails.vue'
import MovieNew from './components/MovieNew.vue'

const routes = [
  { path: '/', component: MovieList },
  { path: '/movie/:id(\\d+)', component: MovieDetails },
  { path: '/movie/edit/:id(\\d+)', component: MovieEdit },
  { path: '/movie/new', component: MovieNew },
  { path: '*',redirect: '/'}
]

export default new VueRouter({
  routes
})
