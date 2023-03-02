<template>
    <!-- <div class="wrapper">
      <div class="product-container"> -->
        <!-- <ProductCard/> -->
        <slot></slot>
      <!-- </div>
    </div> -->
  </template>
  
  <script>
// import ProductCard from './ProductCard.vue';


  export default {
    name: "Wrapper",
    // components: { ProductCard }
}
  </script>
  
  <style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .product-container {
    padding: 3rem 0;
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row; */
  }
  </style>