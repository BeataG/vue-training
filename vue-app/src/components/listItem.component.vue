<template>
    <div class="toDo">
        {{item.name}}
        <button class="deleteButton"  v-on:click="deleteItem(item)">X</button>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: 'ListItem',
    props: {
        item: {
            type: Object
        }
    },
    data() {
        return {
            newItem: {
                name: ''
            }
        }
    },
    methods: {
        deleteItem(item) {
            this.$emit('remove-item', item)
        }
    }
}
</script>

<style scoped>
.toDo {
  width: 300px;
  margin: 5px;
}

.deleteButton {
  color: white;
  background: #ff3333;
  border: 2px solid #cc0000;
  float: right;
  border-radius: 3px;
}

</style>