import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        movie_to_add: {},
        movie_to_edit: undefined,
        movie_to_display: undefined,
        search: undefined,
        disp_edit:false,
        cpt: 0,
        movies: [
            {
                title: "Star Wars: Episode III - Revenge of the Sith",
                year: 2005,
                langue: "Américain",
                genre: "Science fiction, Action",
                realisator: "George Lucas",
                synopsys: "La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d'un pouvoir sans précédent, tenté par le côté obscur de la Force, il prête allégeance au maléfique Darth Sidious et devient Dark Vador. Les Seigneurs Sith s'unissent alors pour préparer leur revanche, qui commence par l'extermination des Jedi. Seuls rescapés du massacre, Yoda et Obi Wan se lancent à la poursuite des Sith. La traque se conclut par un spectaculaire combat au sabre entre Anakin et Obi Wan, qui décidera du sort de la galaxie.",
                grade:4
            },
            {
                title: "Star Wars: Episode IV - A New Hope",
                year: 1977,
                langue: "Américain",
                genre: "Science fiction, Aventure, Fantastique",
                realisator: "George Lucas",
                synopsys: "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine...",
                grade:undefined
            },
            {
                title: "Rogue One : A Star Wars story",
                year: 2016,
                langue: "Américain",
                genre: "Science fiction, Aventure, Action",
                realisator: "Gareth Edwards",
                synopsys: "Situé entre les épisodes III et IV de la saga Star Wars, le film nous entraîne aux côtés d’individus ordinaires qui, pour rester fidèles à leurs valeurs, vont tenter l’impossible au péril de leur vie. Ils n’avaient pas prévu de devenir des héros, mais dans une époque de plus en plus sombre, ils vont devoir dérober les plans de l’Étoile de la Mort, l’arme de destruction ultime de l’Empire.",
                grade:undefined
            }
        ],
    },
    mutations: {
        addMovie:state => {
            state.movies.push(state.movie_to_add);
            state.movie_to_add = {};
        },
        deleteMovie:state => {
            state.movies.splice(state.cpt, 1);
        },
    }
});
