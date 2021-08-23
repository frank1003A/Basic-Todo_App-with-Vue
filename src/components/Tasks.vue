<template>
  <div>
      <Task @ondelete="$emit('ondelete', task.id)" 
      @togglereminder="$emit('togglereminder',task.id)" 
      :task="task" 
      :key="task.id" 
      v-for="task in tasks"/>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
    name:"Tasks",
    props:{
        tasks:Array,
    },
    components:{
        Task
    },
    emits: ['togglereminder', 'ondelete']
}
</script>