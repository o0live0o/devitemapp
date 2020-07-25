<template>
<div>
    <div v-for="(item,i) in arr" :key="i">
        {{item}}--{{i | upperCase}}
    </div>   
    <input type="text" v-focus>
    <div>

    </div>
</div>
</template>
<script>
export default {
    data () { 
        return {
        arr:[1,2,3,4]
        }
    },
    directives: {
        focus:{
            inserted:(el)=>{
                el.focus()
            }
        }
    },
    filters: {
        upperCase(val){
            return val + val
        }
    }
}
</script>
<style scoped>

</style>