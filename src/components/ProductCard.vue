<template>
      <tr>
        <td class="image-container">
          <img class="img-style" :src="imgSrc" :alt="model" />
        </td>
        <td>
          <p class="product-title">{{ model }} </p>
          <p class="product-desciption">{{ description }} </p>
          <button @click="addToCart" class="page-btn">Add to Cart</button>
          
        </td>
        <td>
          <p class="price-label">$ {{ price.toFixed(2) }}</p>
        </td>
      </tr>
      
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: [
      "id",
      "model",
      "imgSrc",
      "description",
      "price",
    ],
    methods: {
      addToCart() {
        this.$store.dispatch("addToCart", {
          id: this.id,
          model: this.model,
          imgSrc: this.imgSrc,
          price: this.price,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    background-color: white;
    border-radius: 15px;
    flex: 1 1 240px;
    margin: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(60, 60, 60, 0.2);
    padding: 30px;
  }
  
  .img-style {
    width: 12rem;
    height: 12rem;
    object-fit: cover;
  }

  .product-title {
    display: flex;
    font-size: 1.75rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #000;
    height: 100%;
  }
  .product-desciption{
    font-size: 1rem;
  }
  .price-label {
    font-weight: bold;
    font-size: 20px;
  }
  .page-btn{
        background-color: #000;
        color: #fff;
        padding: 0.5rem 2rem;
        border: none;
    }
  </style>
  