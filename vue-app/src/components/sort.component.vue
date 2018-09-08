<template>
    <div class="toDo">
        Sort by Name
        <button v-if="isAsceding" v-on:click="changeOrder(flase)"> - decending</button>
        <button v-if="!isAsceding" v-on:click="changeOrder(true)"> - asceding</button>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: 'Sort',
    props: {
        items: {
            type: Array
        }
    },
    data() {
        return {
            isAsceding: true,

        }
    },
    methods: {
        changeOrder(changeValue) {
            this.isAsceding = changeValue;
        },

        sort() {
            // this.items
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