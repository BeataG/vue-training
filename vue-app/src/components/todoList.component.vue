<template>
    <div>
        <div class="toDoList" v-for="toDo in toDoList" :key="toDo.id">
            {{toDo.name}}
            <button class="deleteButton"  v-on:click="deleteItem(toDo)">X</button>
        </div>
        <div v-if="!isFormOpen">
            <button v-on:click="toggleForm">Add new</button>
        </div>
        <div v-if="isFormOpen">
          <form @submit.prevent="onSubmit()">
            <input name="itemName" v-validate="'required'" v-model="newItem.name">
            <button type="submit" class="saveButton">Save</button>
            <span class="error-msg" v-show="errors.has('itemName')">This field is required</span>
          </form>
          <button v-on:click="toggleForm">Cancel</button>
        </div>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
  name: 'todoList',
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

      deleteItem(toDo) {
          this.toDoList.splice(toDo, 1)
      },
      onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.toDoList.push({
            id: uuid(),
            ...this.newItem
          });
          this.newItem.name = '';
        this.$validator.reset();
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.saveButton {
  color: white;
  background: #47d147;
  border: 2px solid #29a329;
}

.deleteButton {
  color: white;
  background: #ff3333;
  border: 2px solid #cc0000;
  float: right;
  border-radius: 3px;
}

.toDoList {
  width: 250px;
}
</style>