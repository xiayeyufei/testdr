<template>
  <header>
    <div class="navbar bg-light navbar-dark">
      <div class="navbar-nav">
        <router-link :to="{name: 'iMain'}" class="h2">
          {{sitename}}
        </router-link>
      </div>
      <div class="navbar-nav">
        <router-link tag="button" :to="{name: 'checkout'}">
          {{cartItemCount}}结账
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import {
  mapGetters
} from 'vuex';
export default {
  name: 'c-header',
  computed: {
    ...mapGetters(
        ['products','cart']
    ),
    cartItemCount() {
      if (this.cart)
        return this.cart.length || '';
      else
        return '';
    },
  },
  data() {
    return {
      sitename: "东软水果联盟店",
    };
  },
}
</script>
<style scoped>
.invisible {
  display: none;
}
.router-link-active {
  color: darkgreen;
}

.router-link-exact-active {
  color: darkolivegreen;
}
</style>
