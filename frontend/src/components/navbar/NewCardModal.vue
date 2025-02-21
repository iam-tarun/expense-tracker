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
          <label>Balance</label>
          <input v-model="formData.balance" required type="number">
        </div>
        <div class="form-group">
          <label>Limit</label>
          <input v-model="formData.limit" required min=100 type="number">
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
        balance: 0,
        limit: 100
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
/* mobile styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  animation: scaleIn 0.3s ease-in-out;
  padding: 50px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

form {
  margin-top: 30px;
}

.form-group {
  grid-column: 1/9;
  margin-block: 20px;
  margin-inline: auto;
  width: 80%;
}

label {
  text-align: left;
  display: block;
  text-transform: uppercase;
}

input {
  border: none;
  border-bottom: 1px solid var(--primary);
  margin-block: 10px;
  width: 100%;
  padding-block: 10px;
  padding-inline-start: 10px;
  font-size: 1rem;
}

.submit-btn {
  grid-column: 4/6;
  padding-block: 10px;
  padding-inline: 15px;
  border: none;
  background-color: var(--success);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}

</style>