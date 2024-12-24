<template>
  <div>
    <h2>Add Task</h2>
    <input v-model="task" placeholder="Enter a new task" />
    <button @click="addNewTask">Add Task</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const task = ref('');

    const addNewTask = () => {
      if (task.value.trim()) {
        store.dispatch('addTask', task.value);
        task.value = '';
      }
    };

    return { task, addNewTask };
  }
};
</script>