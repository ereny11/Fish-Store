<template>
    <Wrapper>
      <div class="container-cart">
        <h2>Your Shopping Cart</h2>
        <h4>Total Amount: $ {{ cartTotal }}</h4>
          <div class="container">
            <div class="row mt-3">
                <div class="col-md-8 offset-md-2">
                    <div class="table-responsive">
                        <table class="table align-middle">
                            <tbody>
                              <CartCard
                                v-for="product in cartProducts"
                                :key="product.id"
                                :id="product.id"
                                :model="product.model"
                                :imgSrc="product.imgSrc"
                                :description="product.description"
                                :price="product.price"
                                :prodQunatity="product.prodQunatity"
                                :qty="product.qty"
                              ></CartCard>
                            </tbody>
                          </table>
                      </div>
                  </div>
              </div>
            </div>
      </div>
    </Wrapper>
  </template>
  
  <script>
  import CartCard from "../components/CartCard.vue";

  export default {
    components: {
      CartCard,
    },
    computed: {
      cartTotal() {
        return this.$store.getters["totalSum"].toFixed(2);
      },
      cartProducts() {
        return this.$store.getters["cart"];
      },
    },
  };
  </script>
  
  <style scoped>
  .container-cart {
    padding: 110px 0;
  }
  
  h2 {
    color: #000;
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 1rem;
  }
  
  h4 {
    text-align: center;
    color: #000;
  }
  
  </style>

<!-- <script setup>
    import {useRouter} from 'vue-router';
    import Store from './Store.vue';
    import {ref} from "vue";
    
    const router= useRouter()


    const cartItems = ref([]);

    function addToCart(id) {
        cartItems.value.push(id)
    }
</script>
<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Shopping Cart</h1>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-4 offset-md-4">
                    <div class="table-responsive">
                        <table class="table align-middle">
                            <tbody>
                            <tr>
                                <Store @add-to-cart="addToCart"/>
                                <td>
                                    <p class="cart-side-title"><span class="product-quantity">1x</span> Pacific Halibut</p>
                                </td>
                                <td >
                                    <p class="cart-side-title">17$</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p class="cart-side-title">Total:</p>
                                </td>
                                <td >
                                    <p class="total-price">17$</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
    main{
        padding: 3rem 0;
        color: #000;
    }
    .cart-side-title{
        font-size: 1rem;
    }
    .total-price{
        font-size: 1rem;
        font-weight: 500;
    }
</style> -->