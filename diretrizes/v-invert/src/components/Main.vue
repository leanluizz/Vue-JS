<script>
import "../assets/css/main.css"
export default{
    //script dos tamanhos das letras no input
    name:"app",
    data(){
        return{
            output:"",

        }
    },
    classe:{
        main:"main",
        outputArea:"outputArea",
        writing:"writing"
    },
    methods:{
        Off(e){
            e.target.style.animation = "none"
        },
        On(e){
            e.target.style.animation = "Bounce 2s linear infinite"
        }
    }
}
</script>

<template>
    <div :class="{main:true}">
<textarea type="text" v-model="output" :class="{writing:true}" @click="Off" @mouseleave="Off" @mouseenter="On"></textarea>
<textarea :class="{outputArea:true}" :value="output" disabled="true"></textarea>
    </div>
</template>