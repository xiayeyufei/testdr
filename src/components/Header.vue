<template>
  <header>
    <div class="navbar bg-light navbar-dark">
      <div class="navbar-nav">
        <router-link  :to="{name: 'iMain'}">
          {{ sitename }}
        </router-link>
      </div>
      <div class="navbar-nav">
        <router-link active-class="invisible" tag="button" :to="{name: 'checkout'}">
          {{cartItemCount}}结账
        </router-link>
      </div>
    </div>
  </header>


</template>

<script>
export default {
  name: 'c-header',
  props: ['cart'],
  computed:{
    cartItemCount(){
      if (this.cart){
        return this.cart.length|| '';
      }else {
        return 0;
      }
    }
  },
  data() {
    return {
      sitename: "东软水果联盟店",
    };
  },
}
</script>
<style scoped>
</style>