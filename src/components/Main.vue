<template>
  <div className="container">
    <c-header></c-header>
    <main>
      <div v-for="product in products" className="row border-bottom border-info p-2">
        <div className="col-2 offset-1 align-self-center">
          <img v-bind:src="product.image" className="img-thumbnail">
        </div>
        <div className="col-5 offset-1">
          <p v-text="product.title" className="h3"></p>
          <p v-html="product.description"></p>
          <p className="price">
            ¥ {{ product.price | formatNumThousands }}
          </p>
          <p className="h5">
            <span v-bind:class="{'rating-active' :checkRating(n, product)}" v-for="n in 5">☆</span>
          </p>
          <p>
            剩余 {{ product.availableInventory - cartCount(product.id) }}
          </p>
          <button className=" btn btn-primary btn-sm" v-on:click="addToCart(product)"
                  v-bind:disabled="!canAddToCart(product)">添加到购物车
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import CHeader from './Header.vue';
import {
  mapGetters
} from 'vuex';

export default {
  name: 'iMain',
  components: {
    CHeader
  },
  methods: {
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
    },
    checkRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    },
    cartCount(id) {
      let count = 0;
      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === id) {
          count++;
        }
      }
      return count;
    },
    canAddToCart(aProduct) {
      return (
          aProduct.availableInventory >
          this.cartCount(aProduct.id)
      );
    },
  },
  computed: {
    ...mapGetters(
        ['products', 'cart']
    ),
  },
  filters: {
    formatNumThousands(num) {
      if (!parseInt(num)) {
        return "";
      }
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  },
  created: function () {
    this.$store.dispatch('initProducts');
  }
}
</script>
<style scoped>
</style>
