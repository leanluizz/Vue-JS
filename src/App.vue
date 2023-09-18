
<template>

<nav class="d-flex justify-content-between"> 
<div class="d-flex flex-row">
<img src="../src/assets/img/transferir.png" alt="icone"  class="mx-auto icon">
<h1 id="title" class=" mx-auto text-center text-light bg-dark title">{{ title }}</h1>
</div>
</nav>

<div class="centered p-5">
        <div v-if="url" class="output">
            <img :src="newQRCode" class="QRCode p-2" alt="QRCode">
        </div>

        <div>
            <input 
            type="text" 
            size="30" 
            class="form-control mt-1 font-monospace" 
            placeholder="Insert a link for generate a QR-Code" 
            :value="url" 
            @input="onData">
        </div>
        <button v-if="url" class="mb-2 btn btn-light border-0 rounded-3 h-25 mt-3 me-2 p-2"><a class="text-dark link-offset-2 link-underline link-underline-opacity-0 font-monospace" :href="newQRCode" download>Download</a></button>
    </div>
</template>

<script>
import QRious from 'qrious/dist/qrious.min.js'
export default {
  name: 'app',
  data(){
  return{
    title: "Let's make the world easier with technology!",
    url:"",
    qrcode: new QRious({ size: 300 })
  }
},
methods: {
  onData(event){
  this.url = event.target.value
}
},
computed: {
  newQRCode() {
    return this.qrcode.toDataURL();
  }
},
}
</script>

<style>
@keyframes type { from {width: 0;} }
@keyframes blinking{ 50%{ border-color: transparent; }}
@keyframes appear { 
    0%{ opacity: 0; width: 0%; } 
    50%{ opacity: 100; width: 5%; } 
    80%{ transform: rotate(360deg); }
    100%{ opacity: 100; width: 5%; }
}
body
{ 
    background-color: rgb(247, 244, 244); 
    background-image: url("../src/assets/img/bg.png"); 
    background-repeat: no-repeat; 
    background-size: cover;
    background-attachment: fixed;
}
.centered
{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.icon 
{
    opacity: 0;
    width: 0%;
    animation: appear 1s forwards;
    animation-delay: 6s;
}
.title
{
    font-size: 3.5vw;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    width:44ch;
    animation: type 5s steps(44), blinking 0.5s infinite step-end;
}
.btn:hover
{
    filter: invert(100%);
    font-weight: bolder;
}
@media (max-width:500px) {
  .QRCode{
    margin: auto;
    width: 80%;
}
.output{
  margin-left: 30%;
  margin-right: 20%;
}
}
</style>
