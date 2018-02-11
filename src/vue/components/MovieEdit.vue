<template>
<div id="MovieEdit">
	<div v-bind:key="movie_to_display.title">
	<h3>Page Modification film</h3>
	<hr>
			<p align="center">{{movie_to_display.title}} - {{movie_to_display.year}} - {{movie_to_display.langue}} - {{movie_to_display.genre}}</p><br>
						Title : <input type="text" v-model="movie_to_display.title" /><br />
						Year : <input type="number" v-model="movie_to_display.year" /><br />
						Genre : <input type="text" v-model="movie_to_display.genre" /><br />
						Langue : <input type="text" v-model="movie_to_display.langue" /><br />
						Synopsys : <textarea v-model="movie_to_display.synopsys"></textarea><br />
						Realisator : <input type="text" v-model="movie_to_display.realisator" /><br />
						Grade : <select name="grade" v-model="movie_to_display.grade">
						  <option value="1">1</option>
						  <option value="2">2</option>
						  <option value="3">3</option>
						  <option value="4">4</option>
						  <option value="5">5</option>
						</select><br /><br />
		<router-link to="/"><button v-on:click="editMovie">Sauvegarder les modifications</button></router-link>
	</div>
	</div>
</template>

<script>
import {store} from '../store.js'

  export default {
      data() {
          return {
              store: store
          }
      },
      computed: {
          movies() {
              return this.$store.state.movies
          },
          movie_to_display() {
              return this.$store.state.movie_to_display
          },
          disp_edit() {
              return this.$store.state.disp_edit
          }
      },
      methods: {
          editMovie: function () {
              this.$store.state.movies.splice(this.$store.state.cpt, 1);
              this.$store.state.movies.push(this.$store.state.movie_to_display);
          },
          toogle_disp_edit:function () {
              this.$store.state.disp_edit = !this.$store.state.disp_edit;
          },
		  setMovieToDisplay: function (movie, key) {
                this.$store.state.movie_to_display = movie;
                this.$store.state.cpt = key;
            },
      }
  }
</script>
<style>
	
	#MovieEdit {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px auto;
        padding: 20px;
        width: 800px;
        vertical-align: top;
    }
h3{
		text-align: center;
	}
	
	
</style>
