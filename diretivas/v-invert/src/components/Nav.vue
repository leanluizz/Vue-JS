<script>
import '../assets/css/menu.css'
export default{
    name:'app',
    props: {
        title:String
    },
    data(){
        return{
            RevertIcon:require("../assets/images/RevertIcon.gif"),
            
        }
    },
    class:{
        widthIMG:"widthIMG",
        titled:"titled"
    },
}
</script>
<template>
    <img :src="RevertIcon" :class="{widthIMG:true}" alt="RevertIcon">
    <h1 :class="{titled:true}">{{ this.title }}</h1>
</template>