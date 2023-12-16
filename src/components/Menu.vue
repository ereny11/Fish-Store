<template>
  <div class="navbar" id="nav">
    <ul class="navbar-nav mx-auto flex-row">
      <li class="nav-item">
        <router-link to="/">All Products</router-link>
      </li>
      <li class="nav-item">
      <router-link to="/inventory">Inventory</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cart">Cart</router-link>  
        <span class="counter-cart" v-if="socketCart > 0"> {{ socketCart }} </span>
        </li>
    </ul>
    <ul class="navbar-nav ml-auto" v-if="!user">
      <router-link to="/register">Register</router-link>
    </ul>
    <ul  class="navbar-nav ml-auto" v-if="user">
      <router-link to="/login">Log out</router-link>
    </ul>
    
  </div>
</template>
<script>
    
    export default {
        name: 'Menu',
        props: ['user'],
        computed: {
            socketCart() {
            return this.$store.getters["quantity"];
            },
        },
    };
</script>
<style>
#nav {
  position: fixed;
  background:#000;
  width: 100%;
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #ffffffe6;
  text-decoration: none;
  line-height: 30px;
  padding: 0px 30px 0px 30px;
  transition: 0.4s linear;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  text-decoration: none;
  padding: 0px 30px 0px 30px;
  line-height: 30px;
  transition: 0.4s linear;
}

.counter-cart {
  display: inline-block;
  line-height: 2;
  width: 2rem;
  height: 2rem;
  background-color: orange;
  color: white;
  border-radius: 50px;
  text-align: center;
}
</style>