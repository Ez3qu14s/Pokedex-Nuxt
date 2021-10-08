<template>
  <div class="container pokemons w-100">
    <div class="app">
      
    </div>
  </div>
</template>

<script>
  import api from '../services/api'

  let pokemons = []

  api.then(value => {
    for(let pokemon of value) {
      return pokemons.push(pokemon)
    }
  })
  

  export default {
    data() {
      return {

      }
    },

    async asyncData() {
      
    }
  }
  
</script>

<style>
  @import url('./styles/Cards.css');
</style>