<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1>Login</h1>
                </div>
            </div>
            <form @submit.prevent="login" class="my-5">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="mb-3">
                            <input type="text" name="" id="" class="form-control" placeholder="Username" v-model="username"/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="mb-3">
                            <input type="password" name="" id="" class="form-control" placeholder="Password" v-model="password"/>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-12 text-center">
                        <button type="submit" class="page-btn">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>
<script>
import axios from 'axios';

export default{
    data() {
        return{
            username: '',
            password:''

        };
    },
    methods: {
        async login(){
            const response = await axios.post('auth/login', {
                username: this.username,
                password: this.password
            });

            localStorage.setItem('token', response.data.token);
            this.$router.push('/home')

        }
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