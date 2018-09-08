<template>
    <div id="app">
       <h1>DoList</h1>
       <todoList></todoList>
    </div>
</template>

<script>
import todoList from './components/todoList.component.vue';
import addNewItem from './components/addNewItem.component.vue';
import store from './store';

export default {
  name: 'app',
  components: {
    todoList,
    addNewItem
  },
  created() {
    store.fetchProducts();
  },
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
