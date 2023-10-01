<template>
<h1 class="m-5 p-5 text-gradient">Directive V-Money</h1>
<h3 class="m-5 p-5">Example:</h3>
<div class="d-lg-flex justify-content-center">
<div class="d-flex flex-column m-5 w-50">
  <h2 class="text-center">
    Sem <code>v-money</code>
<pre>
<code> 
&lt;h1&gt;10.00&lt;/h1&gt;
</code>
</pre>
  </h2>
  <h2 class="text-center">10.00</h2>
</div>

<div class="d-flex flex-column m-5 w-50">
  <h2 class="text-center">
    Com <code>v-money</code>
    <pre>
<code> 
&lt;h1 v-money="'R$'"&gt;10.00&lt;/h1&gt;
</code>
</pre>
  </h2>
  <h2 v-money="'R$'" class="text-center">10.00</h2>
</div>
</div>
<a href="" download="v-money.js">
<button
type="button" 
class="btn bg-transparent border-dark d-block mt-5 mx-auto">
<h1>Download</h1>
</button>
</a>
</template>

<script>
import { vMoney } from './diretiva/v-money';
export default {
  name: 'App',
  directives:{
    money: vMoney
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

code, pre, button, .text-gradient{ 
  font-weight: bolder;  
  background: -webkit-linear-gradient(rgb(53,73,94), rgb(65,184,131));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}
/* Para navegadores WebKit (Chrome, Safari) */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
