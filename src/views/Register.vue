<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1>Register</h1>
                </div>
            </div>
            <form @submit.prevent="Register" class="my-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="First Name" v-model="name.firstname"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Last Name" v-model="name.lastname"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" v-model="email"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Username" v-model="username"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Password" v-model="password"/>
                        </div>
                    </div>
                    <!-- <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" name="" id="" class="form-control" placeholder="City" v-model="city"/>
                        </div>
                    </div> -->
                </div>
                <!-- <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" name="" id="" class="form-control" placeholder="Street" v-model="street"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="number" name="" id="" class="form-control" placeholder="Number" v-model="number"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" name="" id="" class="form-control" placeholder="Zip code" v-model="zipcode"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mb-3">
                            <input type="text" name="" id="" class="form-control" placeholder="Phone Number" v-model="phone"/>
                        </div>
                    </div>
                </div> -->
                <div class="row mt-5">
                    <div class="col-md-12 text-center">
                        <button type="submit" class="page-btn">Register</button>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 text-center">
                        <p>Already have Account? <router-link to='/login'>Login</router-link> </p>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>
<script>
import axios from 'axios'
export default{
    data() {
        return{
            email:'',
            username:'',
            password:'',
            name:{
                firstname:'',
                lastname:''
            },
            // address:{
            //     city:'',
            //     street:'',
            //     number:'',
            //     zipcode:'',
            //     geolocation:{
            //         lat:'',
            //         long:''
            //     }
            // },
            // phone:''

        };
    },
    methods: {
         async Register(){
           
           const response = await axios.post("users", {
                email: this.email,
                username: this.username,
                password: this.password,
                firstname: this.name.firstname,
                lastname: this.name.lastname
            });
            console.log(response);
            this.$router.push('/login')

              
           
        }
        // async Register(e) {
        //     try {
        //         e.preventDefault()
        //             await this.axios.post(`https://fakestoreapi.com/users`, {
        //                 firstname: this.firstname,
        //                 password: this.password,
        //                 email: this.email,
        //                 username: this.username
        //             })
        //         this.$router.push('login')
        //     } catch(e) {
        //         this.error = true
        //         this.email = ''
        //     } 
        // }
    }
}
</script>
<style scoped>
main{
    color: #000;
    padding: 110px 0;
}
.page-btn{
    background-color: #000;
    color: #fff;
    padding: 0.5rem 2rem;
    border: none;
}
</style>