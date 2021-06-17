<template>
  <div class="container">
    <c-header :cart="cart"></c-header>
<!--    <h4>{{ products }}</h4>-->
    <main>
      <div v-for="product in sortedProducts" :key="product.id" class="row border-bottom border-info p-2">
        <div class="col-2 offset-1 align-self-center">
          <img v-bind:src="product.image" class="img-thumbnail">
        </div>
        <div class="col-5 offset-1">
          <h3>{{product.title}}</h3 >
          <p v-html="product.description"></p >
          <p class="price">
            ¥ {{product.price |formatNumThousands }}
          </p >
          <p>
            剩余 {{product.availableInventory - cartCount(product.id)}}
          </p >
          <p class="h5">
            <span v-bind:class="{'rating-active' :checkRating(n, product)}" v-for="n in 5">☆</span>
          </p>
          <button class=" btn btn-primary btn-sm" v-on:click="addToCart(product)" v-bind:disabled="!canAddToCart(product)">添加到购物车</button>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import CHeader from './Header.vue';
export default {
  name: 'iMain',
  data() {
    return {
      products: {},
      // cart: [],
    };
  },

  components: {
    CHeader
  },
  computed: {
    cart() {
      let c = localStorage.getItem("cart")
      let items = [];
      if(c !== ""){
        c.split(",").forEach(function(e){
          items.push(e);
        });
      }
      return items;
    },
    sortedProducts() {
      if (this.products.length > 0) {
        let productsArray = this.products.slice(0);

        function compare(a, b) {
          if (a.title.toLowerCase() < b.title.toLowerCase())
            return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase())
            return 1;
          return 0;
        }
        return productsArray.sort(compare);
      }
    }
  },
  methods: {
    checkRating(n, myProduct) {
      // console.log('-----------------------------------------')
      // console.log(n);
      // console.log(myProduct.rating)
      // console.log(myProduct.rating-n>=0)
      return myProduct.rating - n >= 0;
    },
    addToCart(aProduct) {
      this.cart.push(aProduct.id);
      console.log(this.cart)
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
  filters: {
    formatNumThousands(num) {
      if (!parseInt(num)) {
        return "";
      }
      return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  },
  created: function() {
    localStorage.setItem("cart", [1,2,3,4])
    this.$axios.get('static/products.json').then(response => {
      this.products = response.data.products;
      console.log(this.products);
    });
  },
  beforeDestroy: function() {
    localStorage.setItem("cart",this.cart);
  },

}
</script>
<style scoped>
</style>