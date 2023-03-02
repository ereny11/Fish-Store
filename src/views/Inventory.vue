<template>
    <main>
        <div class="container py-5">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="main-title">Inventory</h1>
                </div>
            </div>
            <form>
                <div class="row mt-5">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder="Product Name" v-model="model"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label class="form-label">Price</label>
                            <input type="number" class="form-control" placeholder="Product Price" v-model="price"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" rows="3" v-model="description"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="mb-3">
                            <label for="prodImage" class="form-label">Image</label>
                            <input class="form-control" type="text" placeholder="Image" v-model="imgSrc"  />
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <button class="page-btn" @click="addNew">Add New Product</button>
                        </div>
                    </div>
                    <div class="col-md-6 text-end">
                        <div class="mb-3">
                            <router-link to="/"><button class="page-btn">Back to Store</button></router-link>
                        </div>
                    </div>
                </div>
            </form>
            
            
        </div>
    </main>
</template>

<script>
   


  export default {
    data() {
        return{
            model: '',
            description: '',
            imgSrc: '',
            price: ''
        };
    },
   
    methods: {
      addNew() {
        this.$store.dispatch("addNewProduct", {
          model: this.model,
          imgSrc: this.imgSrc,
          description:this.description, 
          price: this.price,
        });
      },
    },
  };
</script>

<style scoped>
main{
    padding: 110px 0;
}
.page-btn{
    background-color: #000;
    color: #fff;
    padding: 0.5rem 2rem;
    border: none;
}
</style>