import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        search: '',
        movies: [],
        watchLater: []
    },

    mutations: {
      incrementSearch (state, payload) {
          state.search = payload
        },
      incrementMovies (state, payload) {
        state.movies = payload
        },
      incrementWatchLater (state, payload) {
          state.watchLater = payload
          }
      },
  
      actions: {
        setSearcString ({commit}, payload) {
          commit('incrementSearch', payload)
        },
        setMovies ({commit}, payload) {
          commit('incrementMovies', payload)
        },
        setMoviesToWatchLater ({commit}, payload) {
          commit('incrementWatchLater', payload)
        }
      },
    
      getters: {
        searchString (state) {
          return state.search
        },
        getMovies (state) {
          return state.movies;
        },
        getMoviesToWatchLater (state) {
          return state.watchLater;
        }
      }
})

