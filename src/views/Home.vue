<template>
    <main>
        <div class="page-card">
            <h1 v-if="user">Hello, {{ user.name.firstname }}  {{ user.name.lastname }} {{ user.id }} :)</h1>
            <h1 v-if="!user">You are not logged in :(</h1>
        </div>
        
    </main>
    
</template>

<script>
   export default {
    name: 'Home',
    props: ['user']
   }

    
</script>

<style scoped>
main{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background:#fff;
}
.page-card{
    background-color: #fff;
    box-shadow: 1px 1px 14px 3px #b6b6b6;
    padding: 2rem;
    border-radius: 5px;
}
</style>