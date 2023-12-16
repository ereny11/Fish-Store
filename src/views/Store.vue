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
                                    :prodQuantity = "product.prodQuantity"
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