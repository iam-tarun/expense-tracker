<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">x</button>
      <h2>Add New Card</h2>
      <form class="grid">
        <div class="form-group">
          <label>Name</label>
          <input v-model="formData.name" required type="text">
        </div>
        <div class="form-group">
          <label>Description</label>
          <input v-model="formData.description" required type="text">
        </div>
        <div class="form-group">
          <label>Category</label>
          <input v-model="formData.category" required type="text">
        </div>
        <div class="form-group">
          <label>Card</label>
          <input v-model="formData.card" required type="text">
        </div>
         <div class="form-group">
          <label>Amount</label>
          <input v-model="formData.amount" required type="number">
        </div>
        <div class="form-group">
          <label>
            Date
          </label>
          <input v-model="formData.date" required type="date">
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
        name: "",
        description: "",
        category: "",
        amount: 0,
        date: Date.now(),
        card: ""
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