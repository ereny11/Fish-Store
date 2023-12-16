<script>
  import Store from './views/Store.vue';
  import Cart from './views/Cart.vue';
  import Menu from './components/Menu.vue';

   import axios from 'axios';


  export default {
        components:{
          Menu,
        },
        data() {
            return{
                user: null
            }
        }, 
        async created(){
            const response  = await axios.get('users/1');
            this.user = response.data;
        }

    }

</script>

<template>
  

    <div>
      <Menu :user="user"></Menu>
      <router-view :user="user"></router-view>
    </div>
  
</template>

