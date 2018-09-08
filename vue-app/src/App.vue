<template>
    <div id="app">
       <h1>DoList</h1>
       <todoList></todoList>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import todoList from './components/todoList.component.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    todoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
