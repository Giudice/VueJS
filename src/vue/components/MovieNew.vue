<template>
<div id="MovieNew">
	<h3>Page Ajout film</h3>
	<hr>
	<div align="center">
            Title : <input type="text" v-model="movie_to_add.title" /><br />
            Year : <input type="number" v-model="movie_to_add.year" /><br />
			Genre : <input type="text" v-model="movie_to_add.genre" /><br />
			Langue : <input type="text" v-model="movie_to_add.langue" /><br />
            Synopsys : <textarea v-model="movie_to_add.synopsys"></textarea><br />
			Realisator : <input type="text" v-model="movie_to_add.realisator" /><br />
		    Grade : <select name="grade" v-model="movie_to_add.grade">
			  <option value="1">1</option>
			  <option value="2">2</option>
			  <option value="3">3</option>
			  <option value="4">4</option>
		 	  <option value="5">5</option>
			</select><br /><br />
		    <router-link to="/"><button v-on:click="addMovie">Ajouter le film</button></router-link>
	</div>
</div>
		
</template>

<script>

import {store} from '../store.js'

export default {
  data(){
    return {
      store: store
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies
    },
    movie_to_add(){
      return this.$store.state.movie_to_add
    }
  },
  methods: {
    addMovie:function () {
        this.$store.commit('addMovie');
    }
  }
}

</script>

<style>
#MovieNew {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px auto;
        padding: 20px;
        width: 800px;
        vertical-align: top;	
    }

	
</style>