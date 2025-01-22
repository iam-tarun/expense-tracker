<template>
  <div class="card">
    <div class="card-heading" >
      <h4>{{title}}</h4>
    </div>
    <div class="card-content" >
      <h1>{{description}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['title', 'description']
}
</script>

<style>
/* mobile styles */
.card {
  grid-column: 1/9;
  height: 120px;
  text-align: center;
  margin: 10px;
}

.card-heading {
  margin-block: 20px;
}

</style>