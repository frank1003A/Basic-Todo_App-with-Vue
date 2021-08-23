import Vue from "vue";

//create vue application
const app = Vue.createApp({
   data() {
      return {
         course: 'view 3 intro ',
      }
   },
})

//Define a new component called positions
app.component("positions", {
   template: <h1>Course Component</h1>
})

//mount vue application
app.mount()

