import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      {name: 'Banana Skin', price:20},
      {name: 'Shinny Star', price:40},
      {name: 'Green Shells', price:60},
      {name: 'Red Shells', price:80},
    ]
  },
  getters: {
    productSales: state => {
      var productSales = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price /2
        }
      });
      return productSales;
    }
  },
  mutations: {
    reducePrice: function(state) {
      state.products.forEach(product => {
        product.price -= 1
      })
    }
  }
})