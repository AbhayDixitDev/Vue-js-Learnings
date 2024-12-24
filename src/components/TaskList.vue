<template>
  <div>
    <h2>Task List</h2>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const tasks = computed(() => store.getters.allTasks);

    const removeTask = (index) => {
      store.dispatch('removeTask', index);
    };

    return { tasks, removeTask };
  }
};
</script>