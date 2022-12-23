<script>
import Nav from './components/Nav.vue'
import './assets/css/menu.css'


export default {
  name:'App',
  components:{
    Nav,
  },
  class:{
    menu:"menu"
  }
}
</script>

<template>
  <div v-bind:class="{menu: true}">
  <Nav title="Invert"/>
</div>
</template>

