<template>
<div id="MovieDetails">
	<div v-bind:key="movie_to_display.title">
	<h3>{{movie_to_display.title}}</h3>
	<hr>
	<div id="global">
	<div id="gauche">
		<b>Date de sortie : </b>{{movie_to_display.year}}<br>
		<b>De : </b>{{movie_to_display.realisator}}<br>
		<b>Genres : </b>{{movie_to_display.genre}}<br>
		<b>Nationalité : </b>{{movie_to_display.langue}}<br></br>
		<b>Note : </b>{{movie_to_display.grade}}/5
	</div>
	<div id="droite" >
		<b>Synopsis : </b>{{movie_to_display.synopsys}}
	</div>
	</div>

	</div>
<div id="buttons">
<router-link to="/movie/edit/1" tag="button">Modifier le film</router-link>
<router-link to="/"><button v-on:click="deleteMovie">Supprimer le film</button></router-link>

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
          toogle_disp_edit:function () {
              this.$store.state.disp_edit = !this.$store.state.disp_edit;
          },
		  setMovieToDisplay: function (movie, key) {
                this.$store.state.movie_to_display = movie;
                this.$store.state.cpt = key;
            },
		   deleteMovie: function () {
                this.$store.commit('deleteMovie')
            }
      }
  }
</script>


<style scoped>
#MovieDetails {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px auto;
        padding: 20px;
        width: 1000px;
        vertical-align: top;
		
		
    }

    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }
	h3{
		text-align: center;
	}
	#global {
   overflow:auto;

}
#gauche {
   float:left;
   width:30%;
}
#droite {
   overflow:auto;
}
	#buttons{
		margin-top: 20px;
		 text-align: center;
		
	}
    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: green;
    }
</style>
