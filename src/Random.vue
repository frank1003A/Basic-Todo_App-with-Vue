<template>
    <div>
        <h1>Sign up </h1>
        <br/>
        Counter: {{counter}}
        <br/>
        <card/>
        <Button :msg="Save" />
        <br/>
        <ul>
            <li v-for="cat in cats" :key="cat">
                {{cat}}
            </li>
        </ul>
        <br/>
        <p v-once>{{email}}</p>
        <br/>
        <p>{{email}}</p>
        <input v-model="email"/>
        <br/>
        {{newcart}}
        <br/>
        <input placeholder="add to cart...." v-model="newcart" />
        <button v-on:click="addcart">Add</button>
        <ul>
            <li :key="cart" v-for="cart in carts">{{cart}}</li>
        </ul>
        <br/> 

        <br/>
        <button onclick="alert('Signed up')" :disabled="email.length < 2" v-text="msg"/>
    </div>
</template>


<script>
import card from './components/card.vue'
import Button from './components/Button.vue'
export default{
    components:{
        card,
        Button
    },
    data(){
        return {
            email: "fc@gmail.com",
            msg:"Save",
            counter: 0,
            Save: 'Save',
            cats: [
                "Fatty",
                "catty",
                "dfdfs",
                "sfsfsf"
            ],
            carts: [
                "kitkat",
                "rice and beans",
                "beans",
                "bannana"
            ],
            newcart: ""
        }
    },
    methods: {
        addcart() {
            return {
                addcart: this.carts.push(this.newcart)
            }
        }
    }
}
    /*
    data(){
        return{
            email:"fc@gmail.com",
            msg:"Save",
            counter:0
        }
    },
    mounted(){
        setInterval(() => {
            return this.counter++
        }, 1000)
    },
}

/*
export default {
    data(){
        return{
            counter:0
        }
    },
    mounted(){
        setInterval(() => {
            return this.counter++
        }, 1000)
    }

}
export default {
    const counter = {

    }
    /*
    data(){
        return {
            email:"fc@gmail.com",
            msg:"Submit",
        }
    }
    
}
*/
</script>

<style scoped>
.red{
    border: 2px solid red;
}

.blue{
    border: 2px solid blue;
}
</style>

