<template>
    <div>
        <div class="add-form">
            <div class="form-control">
                <input 
                class="form-control input"
                v-model="text" 
                id="taskform" 
                placeholder="Task...."/>
            </div>
            <div class="form-control">
                <input 
                class="form-control input"
                v-model="date" 
                id="dateform" 
                placeholder="Date..."/>
            </div>
            <div class="form-control">
                <select class="form-control-select" 
                v-model="reminder" 
                name="select-1" 
                id="whateva">
                    <option :value="true">Yes</option>
                    <option :value="false">No</option>
                </select>
            </div>
        </div>
        <Button @btn-click="onSubmit" text="Save Task" color="blue"/>
    </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
    name:"AddTask",
    components:{
        Button
    },
    data() {
        return {
            text:'',
            date:'',
            reminder: false
        }
    },
    methods:{
         onSubmit(){

             if(!this.text){
                alert('Please add a text')
                return
            }
            
            const newTask = {
                id: Math.floor(Math.random() * 10000),
                text: this.text,
                date: this.date,
                reminder: this.reminder
            }
            console.log(newTask)
            this.$emit('addtask', newTask)
            
            console.log(newTask)
            this.text = '',
            this.date = '',
            this.reminder= false
    }
    }
}
</script>
<style scoped>

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
.add-form{
    margin-bottom: 40px;
}
.form-control{
    margin: 20px 0;
}

.form-control label {
    justify-content: space-evenly;
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin:5px;
    padding: 3px 7px;
    font-size: 17px;
    border-radius: 20px;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input{
    flex: 2;
    height: 20px;
}
.form-control-select{
    display: inline-block;
    width: 100%;
    height: 40px;
    margin:5px;
    padding: 3px 7px;
    font-size: 17px;
    border-radius: 20px;
}
.form-control-select:hover{
    border-color: white;
}
</style>