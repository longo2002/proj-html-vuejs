<template>
    <section class="bg">
        <div class="container">
            <div class="col">
                <span>newsletter</span>
                <div class="title">
                    <h1>Know</h1>
                    <h1 class="highlight">First</h1>
                </div>
                <p>Fllow closely and receive content about our companu and the news of the current market.</p>
            </div>
            <div class="col">
                <input type="text" placeholder="Name">
                <input type="text" placeholder="Email">
                <button>subscribe</button>
            </div>
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
    background-image: url("../assets/img/bg-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.title {
    color: black;
    display: flex;
    gap: 10px;
    align-items: center;
}

.title h1:First-child {
    color: white;
    background-color: #173338;
    padding: 5px;
}

.container {
    width: 1200px;
    padding: 150px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

.col {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: calc((100% / 12) * 6);
}

.col span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #4cbfd2;
}

.col p {
    color: white;
    display: flex;
    gap: 10px;
    align-items: center;
}

.col button {
    text-transform: uppercase;
    font-size: 15px;
    background-color: rgba(5, 130, 131, 255);
    padding: 10px;
    border-radius: 4px;
    width: 25%;
}

.col input {
    height: 40px;
    background-color: rgba(255, 255, 255, 0.658);
    padding: 10px;
    border: 0px;
}
</style>