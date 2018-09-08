<template>
    <div>
      <div class="sort">
        <Sort @sorted-item="onSortItem($event)" :items="sharedState.todoList" :param="'title'"></Sort>
      </div>
      <div class="toDoList">
        <ListItem class="toDo" v-for="toDo in sharedState.todoList" :key="toDo.id" @remove-item="onRemoveItem($event)" :item="toDo">
        </ListItem>
      </div>
        <div v-if="!isFormOpen">
            <button v-on:click="toggleForm">Add new</button>
        </div>
        <div class="form" v-if="isFormOpen">
          <addNewItem @add-item="onAddItem($event)"></addNewItem>
          <button v-on:click="toggleForm">Cancel</button>
        </div>
    </div>
</template>

<script>
import addNewItem from './addNewItem.component.vue';
import ListItem from './listItem.component.vue';
import Sort from './sort.component.vue';
import store from '../store';

export default {
  name: 'todoList',
  components: {
    addNewItem,
    ListItem,
    Sort
  },
  data() {
    return {
      sharedState: store.state,
      toDoList: [],
      isFormOpen: false,
      newItem: {
        name: ''
      }
    }
  },
  methods: {
      toggleForm() {
          this.isFormOpen = !this.isFormOpen;
      },

      onRemoveItem(toDo) {
          store.removeItem(toDo);
      },
      onAddItem(newItem) {
        store.addItem(newItem);
      },
      onSortItem(sortedItem) {
        this.sharedState.todoList = sortedItem;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toDoList {
  width: 300px;
  margin: auto;
  padding: 15px;
}

.error-msg {
  font-size: 10px;
  color: #e60000;
  display: block;
}

.form {
  width: 300px;
  margin: auto;
}
</style>