<template>
    <tr>
      <td>
        <div class="image-container">
          <img :src="imgSrc" :alt="model" />
        </div>
      </td>
      <td>
        <h3>{{ model }} </h3>
        <div class="item-data">
          <div>
            Price per Item:
            <strong>$ {{ price.toFixed(2) }}</strong>
          </div>
          <div>
            Quantity:
            <strong>{{ qty }}</strong>
          </div>
        </div>
        <div class="item-total">Total: $ {{ itemTotal }}</div>
        <button class="page-btn" @click="remove">Remove</button>
      </td>
    </tr>
  </template>
  
  <script>
  export default {
    props: [
      "id",
      "model",
      "imgSrc",
      "price",
      "qty",
    ],
    computed: {
      itemTotal() {
        return (this.price * this.qty).toFixed(2);
      },
    },
    methods: {
      remove() {
        this.$store.dispatch("removeFromCart", { id: this.id });
      },
    },
  };
  </script>
  
  <style scoped>
  
  img { 
    height: 12rem;
    width: 12rem;
    object-fit: cover;
  }
  
  .item-data {
    display: flex;
    justify-content: space-between;
  }
  
  .item-total {
    font-weight: bold;
    margin: 1rem 0;
    border-top: 1px solid #474747;
    border-bottom: 2px solid #474747;
    padding: 0.25rem 0;
    width: auto;
  }
  .page-btn{
        background-color: #000;
        color: #fff;
        padding: 0.5rem 2rem;
        border: none;
    }
  </style>