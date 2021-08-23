<template>
    <div class="container">
        <Header :title="Title"/>
        <SearchBar @search-value="onSearch" />
        <div v-if="!searchvalue && searchvalue.length == 0" >
            <Tasks v-model="searchvalue" @ondelete="onDelete" @togglereminder="toggleReminder" :tasks="tasks"/>
        </div>
        <div v-else>
            <Tasks @ondelete="onDelete" @togglereminder="toggleReminder" :tasks="searchResult"/>
        </div>
        <br/>
        <Button
        @btn-click="toggleForm"
        text="Add Task" 
        color="green"/>
        <br/>
        <br/>
        <br/>
        <div v-if="showAddTask">
            <AddTask @addtask="addTask"/>
        </div>        
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Button from './components/Button.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'
import SearchBar from './components/Searchbar.vue'
//import Task from './components/Task.vue'

//


export default {
    name:"App2",
    components:{
        Header,
        Button,
        Tasks,
        AddTask,
        SearchBar,
        //Task
    },
    data(){
        return {
            Title: "Task Tracker",
            Add: "Add",
            btn: "btn",
            showAddTask: false,
            tasks: [],
            searchvalue: '',
            searchResult: [],
            showallTask: false
        }
    },
    created(){
        this.tasks = [
            {
                id: 1, 
                text:"Watch a movie", 
                date: "8/12/2021", 
                reminder: true
            },
            {
                id: 2, 
                text:"Visit the dentist",
                date: "8/12/2022", 
                reminder: true
            },
            {
                id: 3, 
                text:"Teach a summer class", 
                date: "8/12/2021", 
                reminder: true
            },
            {
                 id: 4, 
                text:"Visit a Friend", 
                date: "8/12/2021", 
                reminder: false
            },
            {
                 id: 5, 
                text:"Attend dance class", 
                date: "8/12/2021", 
                reminder: false
            }
        ]
    },
    methods:{
        //reminder toggle
        toggleReminder(Id){
            this.tasks = this.tasks.map((task) => task.id === Id ? {...task, reminder: !task.reminder} : task)
        },
        //delete task
        onDelete(Id){
            this.tasks = this.tasks.filter((task) => task.id !== Id)
        },
        toggleForm(){
            this.showAddTask = !this.showAddTask
        },

       addTask(task){
           this.tasks = [...this.tasks, task]
       },
       onSearch(event){
           this.searchvalue = event
           //
           const filtertask =  this.tasks.filter(task => {
              return task.text.toLowerCase().includes(this.searchvalue)
           }).map((task)=> {
               return task 
           })
           //
           this.searchResult = filtertask
       },
    },
    mounted() {
        console.log(this.searchvalue.length === 0 ? this.showallTask = true : this.showallTask)
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2? family=poppins:wght@300;400&display=swap');

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif ;
}

body{
    font-family: 'poppins',sans-serif;
}

.container{
    display:flex inline-block;
    max-width: 400px;
    margin: 30px auto;
    overflow: auto;
    max-height:fit-content;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
    align-content: center;
}

.maincontainer{
    max-width: fit-content;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 50px;
    border-radius: 10px;
    display: inline-block contents;    
}
</style>