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
                    id: 'dakaodk',
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