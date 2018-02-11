<template>
    <div id="MovieList">
        <h3>Liste des films</h3>
        <hr>
		<p align="center">Nombre de film(s) : {{movies.length}}</p>  
		
        <div v-for="(movie, key) in movies" v-bind:key="movie.title" @click="setMovieToDisplay(movie, key)">
            <router-link to="/movie/1"><h4>{{ movie.title }} ({{movie.year}})</h4></router-link>
        </div>
		<div id="ajout">
			<router-link to="/movie/new" tag="button">Ajouter un film</router-link>
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
            cpt() {
                return this.$store.state.cpt
            },
            movies() {
                return this.$store.state.movies
            },
            movie_to_display() {
                return this.$store.state.movie_to_display
            }
        },
        methods: {
            setMovieToDisplay: function (movie, key) {
                this.$store.state.movie_to_display = movie;
                this.$store.state.cpt = key;
            },
        }
    }
    
</script>


<style scoped>
    #MovieList {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px auto;
        padding: 20px;
        width: 800px;
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
	#ajout{
		text-align: right;
		padding-top: 15px;
		padding-right: 122px;
	}
</style>