<template>
  <div class="transactions-list">
    <h3>{{title}}</h3>
    <div v-for="transaction of transactions" :key="transaction.id" class="transaction-item grid">
      <div class="transaction-details">
        <h5>{{transaction.name}}</h5>
      </div>
      <div class="transaction-amount">
        <h5>{{transaction.amount}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionsList',
  props: ['title', 'transactions']
}
</script>

<style>
/* mobile styles */
.transactions-list {
  grid-column: 1/9;
  text-align: center;
  margin-top: 20px;
}

.transaction-item {
  padding: 16px 32px;
  margin-block: 10px;
  border-bottom: 1px solid var(--primary);
}
.transaction-details {
  text-align: left;
  grid-column: 1/5;
}
.transaction-amount {
  text-align: right;
  grid-column: 5/9;
}
</style>