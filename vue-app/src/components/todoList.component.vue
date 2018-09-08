<template>
    <div>
      <div class="toDoList">
        <ListItem class="toDo" v-for="toDo in toDoList" :key="toDo.id" @remove-item="onRemoveItem($event)" :item="toDo">
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
import uuid from 'uuid';
import addNewItem from './addNewItem.component.vue'
import ListItem from './listItem.component.vue'

export default {
  name: 'todoList',
  components: {
    addNewItem,
    ListItem
  },
  data() {
    return {
      toDoList: [
        {
            id: 1,
            name: 'Zakupy'
        },
        {
            id: 2,
            name: 'Posprzatac'
        }
      ],
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
          this.toDoList.splice(toDo, 1)
      },
      onAddItem(newItem) {
        this.toDoList.push(newItem);
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