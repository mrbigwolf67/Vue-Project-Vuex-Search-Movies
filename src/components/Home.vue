<template>
  <main>
    <h1 v-if=error>{{error}}</h1>
    <ul>
      <li v-for="movie of movies" :key="movie.imdbID">
        <img v-bind:src="movie.Poster" />
        <button @click="addMovie(movie)">
          <h1>Lägg till i "Min Lista"</h1>
        </button>
        <h1>{{movie.Title}}</h1>
        <h2>{{movie.Year}}</h2>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState } from "vuex";
import { async } from "q";

const baseURL = "https://omdb-api.now.sh/?type=movie&s?type=serie&s=";

export default {
  name: "Home",
  data() {
    return {
      movies: [],
      watchLaterMovies: [],
      search: "",
      error: ""
    };
  },
  mounted() {
    this.movies = this.$store.getters.getMovies;
    this.$store.watch(
      (state, getters) => getters.searchString,
      (newValue, oldValue) => {
        this.showResult(`${newValue}`);
      }
    );
  },
  methods: {
    async showResult(nyttVarde) {
      try {
        const res = await fetch(baseURL + nyttVarde);
        const data = await res.json();        
        if (data.Search) {
          this.movies = data.Search;
          this.error = "";
          this.$store.dispatch("setMovies", this.movies);
        } else {
          this.error = data.Error;
          this.movies = [];         
        }
      } catch (e) {
        this.error =`${e}`;
      }
    },
    addMovie(movie) {      
      this.watchLaterMovies.push(movie);
      this.$store.dispatch("setMoviesToWatchLater", this.watchLaterMovies);
      console.log(this.$store.getters.getMoviesToWatchLater);
    }
  }  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 10px;
  padding: 10px;
  list-style: none;
}
li {
  margin: 0px;
  /* position: relative; */
}
img {
  max-width: 100%;
}
a {
  color: #42b983;
  cursor: pointer;
}
img {
  width: 100%;
}
button {
  height: 60px;
  width: 100%;
  background: linear-gradient(to right, #3a3a4936, #5ba15b6b);
  /* box-shadow: 1px 1px 1px black; */
  /* position: absolute; */
  /* top: 500px;
    left: 0px; */
  font-weight: bold;
  align-content: center;
  align-items: center;
}
@media only screen and (max-width: 475px) {
  h1,
  h2 {
    color: #42b983;
    font-size: 16px;
  }
  /* .imgContainer {
  height: 500px;
  width: 300px;
}  */
  img {
    width: 100%;
  }
}
</style>
