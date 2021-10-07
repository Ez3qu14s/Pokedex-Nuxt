<template>
  <div class="container pokemons w-100">
    <div v-for="pokemon of pokemons.id" :key="pokemon">
      {{pokemon.name}}
    </div>
  </div>
</template>

<script>
  import api from '../services/api'

  export default {
    data() {
      return {
        pokemons: []
      }
    },
    
    async asycData() {
      const pokemons = api.then(value => {
        return value
      })
      return pokemons
    }
  }
   
  api.then(value => {
    for(let pokemon of value) {

    }
  })
</script>

<style>
  @import url('./styles/Cards.css');
</style>