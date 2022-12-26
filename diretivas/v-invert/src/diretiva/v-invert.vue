<script>
export default{
    name:"app",
    data(){
        return{
            output:"",

        }
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
    // Crie seu componente (Input) e atribua a diretiva v-invert 
</template>