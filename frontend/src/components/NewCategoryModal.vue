<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">x</button>
      <h2>Add New Category</h2>
      <form class="grid">
        <div class="form-group">
          <label>Name</label>
          <input v-model="formData.name" required type="text">
        </div>
      </form>
        <button @click="submitForm" type="submit" class="submit-btn">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      tpe: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: { 
        name: ""
       }
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    submitForm(event) {
      event.preventDefault();
      this.$emit("submit", {...this.formData});
    },
  },
}
</script>

<style>

</style>