import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import TransactionsPage from '../views/TransactionsPage.vue'
import Accounts from '../views/Accounts.vue'
import Cards from '../views/Cards.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    Path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/accounts',
    name: 'Accounts',
    component: Accounts
  },
  {
    Path: '/all-transactions',
    name: 'TransactionsPage',
    component: TransactionsPage
  },
  {
    path: '/cards',
    name: Cards,
    component: Cards
  },
  {
    path: '/settings',
    name: Settings,
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
