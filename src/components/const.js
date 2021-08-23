import Vue from 'vue'

const app = Vue.createApp({})

app.component('Button-Counter',{
    data() {
        return {
            count: 0
        }
    },
    template: <button  />
})