<template>
        <div @dblclick="$emit('togglereminder', task.id)" :class="[task.reminder ? 'reminder':'','event']">
            <h4 class="h3" >{{task.text}} <img class="img" 
            @click="$emit('ondelete', task.id)"
             alt="icon" src="../assets/cancel.png"></h4>
            <p>{{task.date}}</p>
        </div>
</template>

<script>
export default {
    name:'Task',
    props: {
        task: {
            type: Object
        },
    },
}
</script>

<style scoped>
.event{
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor:pointer;
    border-start-end-radius: 20px;
    border-end-end-radius: 20px;
}

.event.reminder {
    border-left: 5px solid green;
}

.event h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.img{
    float: right;
    display: flex;
}
</style>