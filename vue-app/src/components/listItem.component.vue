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
        onSubmit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return;
                }
                this.$emit('add-item', {
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