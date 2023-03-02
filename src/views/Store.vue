<!-- <script setup>
    import {useRouter} from 'vue-router';
    import {computed, ref} from "vue"; 


    const emit = defineEmits(['add-to-cart']);

    const products = ref(
        {
        id: 0,
        name: 'Pacific Halibut',
        price: 0,
        quantity: 10,
        
        }
    )

    function addToCart() {
        if (quantity >= 1) {
            products.value.quantity--;
            emit('add-to-cart', products.value.id);
        } else {
            return false;
        }
    }

</script>
<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1 class="main-title">Fish Store</h1>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 text-center">
                    <h3 class="subtitle">Our Products List</h3>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-8 offset-md-2">
                    <div class="table-responsive">
                        <table class="table align-middle">
                            <tbody>
                            <tr>
                                <td><img src="../assets/images/panned-seared-halibut.jpg" class="product-image"/></td>
                                <td>
                                    <p class="product-name">Pacific Halibut</p>
                                    <p class="product-desciption">
                                        Everyone's favorite white fish. We will cut it to the size you want and ship it.
                                    </p>
                                    <button class="page-btn" @click="addToCart">Add to Cart</button>
                                </td>
                                <td >
                                    <p class="product-price">17$</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-12 text-center">
                    <a href="/cart">
                        <button class="page-btn">View Cart</button>
                    </a>
                </div>
            </div>
        </div>
        
    </main>
</template> -->

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="main-title">Fish Store</h1>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6">
                    <h3 class="subtitle">Our Products List</h3>
                </div>
                <div class="col-md-6 text-end">
                    <router-link to="/cart"><button class="page-btn me-3">View Cart</button></router-link>
                    <!-- <router-link to="/inventory"><button class="page-btn">Inventory</button></router-link> -->
                    <!-- <button @click="addNew" class="page-btn">Add Static Item</button> -->
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="table align-middle">
                            <tbody>
                                <Wrapper>
                                <ProductCard
                                    v-for="product in products"
                                    :key="product.id"
                                    :id="product.id"
                                    :model="product.model"
                                    :imgSrc="product.imgSrc"
                                    :description="product.description"
                                    :price="product.price"
                                />
                                </Wrapper>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </template>
  
  <script>
  import ProductCard from '../components/ProductCard.vue';

  export default {
    components: {
      ProductCard,
    },
    
    computed: {
      products() {
        const productsSort = this.$store.getters["products"];
        return productsSort
      },
    },
  };
  </script>


<style scoped>
    main{
        color: #000;
        padding: 110px 0;
    }
    .main-title{
        text-transform: uppercase;
    }
    .subtitle{
        color: orange;
        text-transform: uppercase;
    }
    .product-image{
        width: 10rem;
    }
    .product-name{
        font-size: 1.75rem;
        text-transform: uppercase;
        font-weight: 500;
    }
    .product-desciption{
        font-size: 1rem;
    }
    .page-btn{
        background-color: #000;
        color: #fff;
        padding: 0.5rem 2rem;
        border: none;
    }
    .product-price{
        font-size: 1.3rem;
        font-weight: 500;
    }
</style>