<template class="grid" >
  <Card :title="totalExpenseDetails.title" :description="totalExpenseDetails.description" />
  <Graph/>
  <TransactionList :transactions="transactions" title="Recent Transactions" />
  <button class="button new-transaction-btn" >New Transaction</button>
</template>

<script>
import Graph from "../components/Graph.vue"
import Card from "../components/Card.vue"
import TransactionList from '../components/TransactionsList.vue'

export default {
  name: 'Dashboard',
  components: {
    Graph,
    Card,
    TransactionList,
  },
  data() {
    return  {
      totalExpenseDetails: {
        title:  "Total Expense",
        description: "3891.08$"
      },
      transactions: [
        {
          "id": 1,
          'name': "Walmart",
          "amount": "23.45$"
        },
        {
          "id": 2,
          'name': "Uber",
          "amount": "13.15$"
        },
        {
          "id": 3,
          'name': "Tom Thumb",
          "amount": "3.5$"
        },
        {
          "id": 4,
          'name': "Halal Shack",
          "amount": "23.45$"
        }
      ]
    }
  }
}
</script>

<style>
.new-transaction-btn {
  margin-inline: auto;
  grid-column: 1/9;
  margin-top: 20px;
}
</style>