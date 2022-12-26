<script>
import "../assets/css/main.css"

export default{
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

    
    directives:{
        invert:{
            updated(el, binding){
               const split = binding.value.split('')
               const reverse = split.reverse();

               el.innerHTML = reverse.join('')
            }
        }
    }
    
}
</script>

<template>
    <div id="main">
<textarea  type="text" v-model="output" :class="{writing:true}"></textarea>
<textarea  v-invert="output" :class="{outputArea:true}" disabled></textarea>
    </div>
</template>