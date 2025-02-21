<template class="grid" >
  
  <div class="title">
    <h1>Welcome, Tarunteja</h1>
  </div>
  
  <div class="overview">
    <h1>Overview</h1>
  </div>
  <div class="dashboard-info-card balance-card">
    <div class="dashboard-info-heading">
      <h4>Balance</h4>
    </div>
    <div class="dashboard-info-content">
      <h1>$1,899</h1>
    </div>
  </div>
  <div class="dashboard-info-card income-card">
    <div class="dashboard-info-heading">
      <h4>Income</h4>
    </div>
    <div class="dashboard-info-content">
      <h1>$1,899</h1>
    </div>
  </div>
  <div class="dashboard-info-card expense-card">
    <div class="dashboard-info-heading">
      <h4>Expenses</h4>
    </div>
    <div class="dashboard-info-content">
      <h1>$1,899</h1>
    </div>
  </div>
  <div class="transactions">
    <h1>Transactions</h1>
  </div>
  <div class="new-transaction">
    <button @click="showNewTransactionModal = true" >Add New Transaction</button>
    <button>View All</button>
  </div>
  <div class="dashboard-transactions-card">
    <div v-for="group in recentTransactions" :key="group.day" class="dashboard-transaction-per-day">
      <div class="dashboard-transactions-day">
        <p>{{formatDate(group.day)}}</p>
      </div>
      <div v-for="transaction in group.transactions" :key="transaction.id" class="dashboard-transaction-in-day">
        <div class="dashboard-transaction-details">
          <h5>{{transaction.name}}</h5>
          <h6>{{transaction.description}}</h6>          
        </div>
        <div class="dashboard-transaction-amount">
          <h3>${{transaction.amount}}</h3>
        </div>
      </div>
    </div>
  </div>
  <div class="categories">
    <h1>Categories</h1>
  </div>
  <div class="new-category">
    <button @click="showNewCategoryModal = true" >Add New Category</button>
  </div>
  <div class="dashboard-categories">
    <div v-for="category of categories" :key="category.id" class="dashboard-category">
      <h5>{{category.name}}</h5>
      <div class="dashboard-category-options" >
        <span class="material-icons" >edit</span>
        <span class="material-icons" >delete</span>
      </div>
    </div>
  </div>
  <div class="cards">
    <h1>Cards</h1>
  </div>
  <div class="new-card">
    <button @click="showNewCardModal = true" >Add New Card</button>
  </div>
  <div class="dashboard-cards">
    <div
      v-for="(card, index) in cards"
      :key="card.id"
      class="dashboard-card"
      :class="{ expanded: expandedIndex === index }"
      :style="{
        top: `${index * 45}px`,
        zIndex: expandedIndex === index ? cards.length + 1 : cards.length
      }"
      @click="toggleCard(index)"
    >
      <div class="card-headline">
        <h5>{{ card.name }}</h5>
        <div class="card-actions">
          <i class="material-icons" >edit</i>
          <i class="material-icons" >delete</i>
        </div>
      </div>
      <div class="card-content">
        <h6>Balance - ${{card.balance}}</h6>
        <h6>Limit - {{card.limit}}</h6>
      </div>
    </div>
  </div>
  <new-card-modal-vue v-if="showNewCardModal" :isOpen="showNewCardModal" @close="showNewCardModal = false" @submit="handleNewCardSubmit" />
  <new-category-modal-vue v-if="showNewCategoryModal" :isOpen="showNewCategoryModal"
  @close="showNewCategoryModal = false"
  @submit="handleNewCategorySubmit" />
  <new-transaction-modal-vue v-if="showNewTransactionModal" @close="showNewTransactionModal=false" @submit="handleNewTransactionSubmit" />
</template>

<script>
import NewCardModalVue from '@/components/navbar/NewCardModal.vue';
import NewCategoryModalVue from '@/components/NewCategoryModal.vue';
import NewTransactionModalVue from '@/components/navbar/NewTransactionModal.vue';

export default {
  name: 'Dashboard',
  components: {
    NewCardModalVue,
    NewCategoryModalVue,
    NewTransactionModalVue,
  },
  data() {
    return  {
      recentTransactions: [
        {
          day: '02-09-2025',
          transactions: [
            {
              id:1,
              name: "Walmart",
              description: 'weekly groceries',
              amount: 23
            },
            {
               id:2,
              name: "Tom Thumb",
              description: "chicken",
              amount: 5
            }
          ]
        },
        {
          day: '02-08-2025',
          transactions: [
            {
               id:3,
              name: "Walmart",
              description: 'weekly groceries',
              amount: 23
            },
            {
               id:4,
              name: "Tom Thumb",
              description: "chicken",
              amount: 5
            },
            {
               id:5,
              name: "Uber Eats",
              description: "food from unbelieva bowl",
              amount: 25
            }
          ]
        }
      ],
      categories: [
        {
          id: 1,
          name: "Food"
        },
        {
          id: 2,
          name: "Travel"
        },
        {
          id: 3,
          name: "Groceries"
        },
        {
          id: 4,
          name: "Shopping"
        },
        {
          id: 5,
          name: "Electronics"
        }
      ],
      cards: [
        {
          id: 1,
          name: "Amex",
          limit: 3500,
          balance: 1600
        },
        {
          id: 2,
          name: "Discover",
          limit: 2500,
          balance: 1600
        },
        {
          id: 3,
          name: "Apple",
          limit: 3500,
          balance: 1600
        },
        {
          id: 4,
          name: "Zolve",
          limit: 3000,
          balance: 1600
        }
      ],
      expandedIndex: null,
      showNewCardModal: false,
      showNewCategoryModal: false,
      showNewTransactionModal: false
    }
  },
  mounted() {
    this.expandedCard = this.cards.length - 1;
  },
  methods: {
    formatDate: (dateString) => {
      const today = new Date();
      const formattedToday = today.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      const todayFormatted = formattedToday.replace(/\//g, "-");

      return dateString === todayFormatted ? "Today" : dateString;
    },
    toggleCard(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },
    handleNewCardSubmit(formData) {
      console.log(formData.name)
      this.showNewCardModal = false;
    },
    handleNewCategorySubmit(formData) {
      console.log(formData);
      this.showNewCategoryModal = false;
    },
    handleNewTransactionSubmit(formData) {
      console.log(formData);
      this.showNewTransactionModal = false;
    }
  }
}


</script>

<style>
/* mobile styles */
.title {
  margin-inline: 10px;
  margin-top: 20px;
}

.title h1 {
  font-family: 'Roboto Light';
}

.dashboard-info-card {
  grid-column: 1/9;
  margin-top: 10px;
  margin-inline: 10px;
  padding-block: 30px;
  padding-inline: 10px;
  border-radius: 5px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
}

.dashboard-info-content {
  padding-top: 20px;
}

.overview h1, .cards h1, .transactions h1, .categories h1 {
  font-family: 'Roboto Light';
}

.overview, .cards, .transactions, .categories {
  margin-inline: 10px;
  margin-top: 10px;
}

.balance-card {
  /* background-color: ; */
  background: linear-gradient(135deg, rgba(4, 177, 250, 1), rgba(4, 177, 250, 0.8));
}

.expense-card {
  /* background-color: ; */
  background: linear-gradient(135deg, rgba(255, 195, 0, 1), rgba(255, 195, 0, 0.8));
}

.income-card {
  /* background-color: ; */
  background: linear-gradient(135deg, rgba(4, 250, 200, 1), rgba(4, 250, 200, 0.8));
}

.dashboard-transactions-card {
  /* background-color: var(--primary); */
  margin-inline: 10px;
  grid-column: 1/9;
  border-radius: 5px;
  padding: 10px;
  color: var(--textLight);
  margin-top: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  background: linear-gradient(135deg, #2B3B46, var(--primary));
}

.dashboard-transaction-per-day {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dashboard-transaction-in-day {
  display: flex;
  justify-content: space-between;
  margin-block: 10px;
}

.dashboard-transaction-in-day h6 {
  color: var(--textDark);
  margin-block: 2px;
}

.dashboard-transactions-day {
  margin-top: 10px;
}

.new-transaction {
  margin-inline: 10px;
  grid-column: 1/9;
  display: flex;
  justify-content: space-between;
}

.new-transaction button:nth-child(1) {
  background-color: var(--primary);
  border: none;
  color: var(--textLight);
  padding-block: 10px;
  border-radius: 5px;
  padding-inline: 15px;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
}

.new-transaction button:nth-child(2) {
  background-color: var(--textLight);
  border: 1px solid var(--textDark);
  color: var(--textDark);
  padding-block: 10px;
  border-radius: 5px;
  padding-inline: 15px;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
}

.dashboard-categories {
  grid-column: 1/9;
  margin-inline: 10px;
  padding: 10px;
  border-radius: 5px;
  /* background-color: ; */
  background: linear-gradient(135deg, rgba(60, 125, 130, 1), rgba(60, 125, 130, 0.5));
  perspective: 1200px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
}

.dashboard-category {
  margin-block: 10px;
  border-bottom: 1px solid rgba(60, 125, 130, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard-category h5 {
  padding-block: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-family: 'Roboto Medium';
}

.dashboard-category-options {
  color: rgba(60, 125, 130, 0.8);
}

.dashboard-category-options span {
  font-size: 16px;
  margin-inline: 5px;
  cursor: pointer;
}

.new-category {
  margin-inline: 10px;
  grid-column: 1/9;
  margin-block: 10px;
}

.new-category button {
  padding-block: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(60, 125, 130, 0.5);
  padding-inline: 15px;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
}

.new-card {
  margin: 10px;
  grid-column: 1/9;
}

.new-card button {
  padding-block: 10px;
  padding-inline: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgba(36, 34, 34, 1);
  color: var(--textLight);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
}

.dashboard-cards {
  position: relative;
  max-width: 380px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  grid-column: 1/9;
  margin: 10px;
}

.dashboard-card {
  position: absolute;
  max-width: 340px;
  min-width: 280px;
  height: 170px;
  background: linear-gradient(135deg, #333, #111);
  border-radius: 15px;
  color: white;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 0.3s ease, top 0.3s ease;
}

.dashboard-card.expanded {
  transform: translateY(-20px) scale(1.1);
}

.card-headline {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.card-headline h5 {
  font-weight: bold;
  text-align: center;
}

.card-content {
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}

/* large tablets and laptops */
@media screen and (min-width: 960px) {

.overview {
  grid-column: 1/5;
  grid-row: 3/4;
}

.dashboard-info-card {
  grid-column: 1/5;
}

.balance-card {
  grid-row: 4/6;
}

.income-card {
  grid-row: 6/7;
}

.expense-card {
  grid-row: 7/8;
}

.transactions {
  grid-column: 5/9;
  grid-row: 3/4;
}

.new-transaction {
  grid-column: 5/9;
  grid-row: 4/5;
}

.dashboard-transactions-card {
  grid-column: 5/9;
  grid-row: 5/8;
}

.categories {
  grid-column: 1/5;
  grid-row: 8/9;
}

.new-category {
  grid-column: 1/5;
  grid-row: 9/10;
}

.dashboard-categories {
  grid-column: 1/5;
  grid-row: 10/11;
}

.cards {
  grid-column: 5/9;
  grid-row: 8/9;
}

.new-card {
  grid-column: 5/9;
  grid-row: 9/10;
}

.dashboard-cards {
  grid-column: 5/9;
}

}

/* large laptops and desktops */
@media screen and (min-width: 1200px){
  .overview {
    grid-column: 1/3;
  }

  .balance-card {
    grid-column: 1/3;
  }

  .income-card {
    grid-column: 1/3;
  }

  .expense-card {
    grid-column: 1/3;
  }

  .transactions {
    grid-column: 3/5;
    grid-row: 3/4;
  }

  .new-transaction {
    grid-column: 3/5;
    grid-row: 4/5;
  }

  .dashboard-transactions-card {
    grid-column: 3/5;
    grid-row: 5/8;
  }

  .categories {
    grid-column: 5/7;
    grid-row: 3/4;
  }

  .new-category {
    grid-column: 5/7;
    grid-row: 4/5;
  }

  .dashboard-categories {
    grid-column: 5/7;
    grid-row: 5/8;
  }

  .cards {
    grid-column: 7/9;
    grid-row: 3/4;
  }

  .new-card {
    grid-column: 7/9;
    grid-row: 4/5;
  }

  .dashboard-cards {
    grid-column: 7/9;
    grid-row: 5/8;
  }
}

</style>