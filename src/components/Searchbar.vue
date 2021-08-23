<template>
    <div>
        <input
        v-model="searchval"
        @keypress="onChange"
        placeholder="Search..." 
        class="search-bar"  
        />   
    </div>
</template>


<script>
export default {
    name: "Searchbar",
    data(){
        return {
            searchval: "",
        }
    },
    methods: {
        onChange(){
            this.$emit('search-value', this.searchval)
        },
    },
}
</script>

<style scoped>
.search-bar{
    width: 100%;
    height: 40px;
    margin:5px;
    padding: 3px 7px;
    font-size: 17px;
    border: none;
}
.search-bar:enabled{
    border-color:none;
}
</style>



