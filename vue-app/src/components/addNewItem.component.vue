<template>
    <div>
        <form @submit.prevent="onSubmit()">
            <input name="itemName" v-validate="'required'" v-model="newItem.title">
            <button type="submit" class="saveButton">Save</button>
            <span class="error-msg" v-show="errors.has('itemName')">This field is required</span>
        </form>
    </div>
</template>

<script>
import store from '../store';

export default {
    name: 'addNewItem',
    data() {
        return {
            newItem: {
                title: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return;
                }

                store.addItem({
                    id: Math.floor((Math.random() * 100) + 1),
                    ...this.newItem
                });


                this.newItem.name = '';
                this.$validator.reset();
            });
        }
    }
}
</script>

<style scoped>
.saveButton {
  color: white;
  background: #47d147;
  border: 2px solid #29a329;
}
</style>