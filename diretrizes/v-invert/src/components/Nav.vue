<script>
export default{
    name:'App',
    props: {
        title:String,
        img:String
    }
}
</script>
<template>
    <h1>{{ this.title }}</h1>
</template>