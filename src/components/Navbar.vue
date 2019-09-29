
<template>
    <nav>
        <div class="bild">
            <router-link to="/"> <img alt="Vue logo" src="../assets/logo.png"/> </router-link>            
        </div>       
    <div v-if="showForm">
        <form id="search-form" @submit.prevent="checkForm" novalidate="true">
            <input type="text" placeholder="Sök på film-titel" name="search" v-model="search"/>
             <button type="submit">SÖK</button>  
             <router-link to="movies"><button>Filmer</button></router-link>         
        </form>
          
         
       
    </div>
    
    </nav>
</template>
<script>

export default {
  name: 'Navbar',
  el: '#search-form',
  data() {
      return {
        search: null    
      }
     
 },
  methods: {
    checkForm() {      
      if(this.search !== null) {
        this.$store.dispatch('setSearcString', this.search)
      } else {
        alert('Skriv in en titel');
      }
      this.search = null;     
}
   },
   computed: {
     showForm() {
       if(this.$route.path === '/') {
         return true;
       } else {
         return false;
       }
     }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
template {
    /* max-width: 2000px; */
    /* position: relative;*/
} 
nav {
  /* background: linear-gradient(to right, #f27121, #e94057); */
 background: linear-gradient(to right, #57576d, #13ac13);
  padding: 10px 5px 5px 5px;
  display: flex;
  width: 100%;
  position: sticky;
  justify-content: space-between;  
  align-items: center;
}
.bild {
  display: flex;
  flex-direction: column;  
}
input {
    margin: 5px;
    margin-right: 4px;
    padding: 10px;
    max-width: 600px;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 4px 4px 2px rgb(88, 82, 82);
}
button{
    height: 43px;
    width: 80px;
    background: linear-gradient(to right, #57576d, #13ac13);
    box-shadow: 3px 3px 1px rgb(88, 81, 81);
    font-weight: bold;
    margin-right: 5px;
}

h1 {
  margin-top: 12px;
  padding: 0;
  color: #2f3542;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  cursor: pointer;
}
img {
  height: 40px;
  width: 40px;
}
@media only screen and (max-width: 500px) {
nav {
 min-width: 370px;
}
input {
    margin: 5px;
    padding: 10px;
    max-width: 150px;
    font-size: 14px;
    font-weight: bold;
}
button {
    height: 38px;
    width: 60px;
    padding: 1px;
}
h1 {    
    /* font-size: 14px;
    margin-top: 4px; */
    display: none;
  }
  img {
    height: 40px;
    width: 40px;
  }
}

</style>