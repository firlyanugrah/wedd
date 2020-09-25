import Home from './components/Home.vue';
// import Product from './components/Product.vue';
// import Checkout from './components/Checkout.vue';
// import Login from './components/Login.vue'

export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '*', redirect: '/', name: 'redirect'},
];