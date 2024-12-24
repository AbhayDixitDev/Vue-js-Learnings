<template>
  <div id="app">
    <nav>
      <router-link to="/">Task List</router-link>
      <router-link to="/add">Add Task</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
}
</style>