import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    REMOVE_TASK(state, taskIndex) {
      state.tasks.splice(taskIndex, 1);
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task);
    },
    removeTask({ commit }, taskIndex) {
      commit('REMOVE_TASK', taskIndex);
    }
  },
  getters: {
    allTasks: (state) => state.tasks
  }
});