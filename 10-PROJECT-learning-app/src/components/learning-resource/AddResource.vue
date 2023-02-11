<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div>
        <label for="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          ref="titleInput"
          class="form-control"
        />
      </div>
      <div>
        <label for="desctiption">Description</label>
        <textarea
          id="desctiption"
          name="desctiption"
          rows="3"
          ref="desctiptionInput"
          class="form-control"
        >
      </textarea>
      </div>
      <div>
        <label for="link">Link</label>
        <input
          id="link"
          type="url"
          name="link"
          ref="linkInput"
          class="form-control"
        />
      </div>
      <base-button type="submit">Add Resource</base-button>
    </form>
  </base-card>
  <base-dialog
    @close="closeDialog"
    v-if="isDialog"
    title="Invalid Input"
  >
    <template #default>
      <p>Please check input value</p>
    </template>
    <template #actions>
      <!-- <base-button @click="closeDialog">Okay</base-button> -->
    </template>
  </base-dialog>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      isDialog: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const entereddesctiption = this.$refs.desctiptionInput.value;
      const enteredlink = this.$refs.linkInput.value;
      if (
        enteredTitle === '' ||
        entereddesctiption === '' ||
        enteredlink === ''
      ) {
        return (this.isDialog = true);
      }
      this.addResource(enteredTitle, entereddesctiption, enteredlink);
    },
    closeDialog() {
      this.isDialog = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

.form-control {
  margin: 1rem 0;
}

input:focus,
textarea:focus {
  background-color: #f6e6ff;
}
</style>