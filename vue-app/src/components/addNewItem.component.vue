<template>
    <div>
        <form @submit.prevent="onSubmit()">
            <input name="itemName" v-validate="'required'" v-model="newItem.name">
            <button type="submit" class="saveButton">Save</button>
            <span class="error-msg" v-show="errors.has('itemName')">This field is required</span>
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: 'addNewItem',
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

</style>