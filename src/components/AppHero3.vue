<template>
    <section class="bg">
        <div class="container">
            <ul class="logo_list">
                <li v-for="logo in this.store.logos">
                    <img :src="logo" alt="logo">
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import store from '../store'

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<style scoped>
.bg {
    background-color: #eef4ed;
}

.container {
    width: 1200px;
    margin: 0 auto;
}

.logo_list {
    display: flex;
    color: black;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding: 50px;
}

.logo_list li {
    opacity: 0.5;
    height: 30px;
}
</style>