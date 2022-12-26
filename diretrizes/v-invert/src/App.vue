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

<template>
  <div v-bind:class="{menu: true}">
  <Nav title="Invert"/>
  <h1>Text</h1>
</div>
<Main />

</template>

