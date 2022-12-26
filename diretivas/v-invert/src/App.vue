<template>
  <div v-bind:class="{menu: true}" id="menu">
  <Nav title="Invert"/>
  <h1>Text</h1>
</div>
<Main />
</template>

<script>
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'

export default {
  name:'App',
  components:{
    Nav,
    Main
  },
  class:{
    menu:"menu"
  }
}
</script>
