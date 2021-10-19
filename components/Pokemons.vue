<template>
  <div class="container pokemons w-100">
    <div class="card text-center" v-for="pokemon in pokemons" :key="pokemon">
      <img src="../typeImages/grass.png" class="card-img-top" alt="">
      <div class="card-body">
        <img class="image-pokemon" :src="pokemon.imageURL" :alt="pokemon.name">
        <div class="informations">
          <h3>{{pokemon.name}}</h3>
          <div class="pokemon-informations">
            <section>
              <div class="types" v-for="type of pokemon.types" :key="type">
                <span :class="type">{{type}}</span>
              </div>
              
            </section>
            
            <section>
              <div v-for="abilities of pokemon.abilities" :key="abilities">
                <span>{{abilities}}</span>
              </div>
            </section>

            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../services/api'

  export default {
    data() {
      return {
        pokemons: [],
        imageName: null
      }
    },

    methods: {
      
    },
    
    created() {
      api.then(value => {
        for(let val of value) {
          this.pokemons.push(val)
        }
      })
    }
    }
  
</script>

<style>
  @import url('./styles/Cards.css');
  @import url('./styles/Types.css');
</style>