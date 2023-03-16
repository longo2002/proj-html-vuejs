<template>
    <section class="bg">
        <div class="container">
            <div class="header">
                <p class="subtitle">our editorial content</p>
                <div class="title">
                    <h1>Latest</h1>
                    <h1 class="highlight">News</h1>
                </div>
                <div class="description">
                    <p> Every week we puclish content about what is the best in the business world.</p>
                    <button>see all</button>
                </div>
            </div>
            <div class="body">
                <div class="card">
                    <img src="../assets/img/news-1.jpg" alt="">
                    <h3>Increasing creativity is possible for anyone</h3>
                </div>
                <div class="card">
                    <img src="../assets/img/news-2.jpg" alt="">
                    <h3>Becouse market research is a part of the business plan</h3>
                </div>
                <div class="card">
                    <img src="../assets/img/news-3.jpg" alt="">
                    <h3>Working from home is now a trend</h3>
                </div>
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
    background-color: white;
}

.container {
    width: 1200px;
    margin: 0 auto;
    padding: 25px;
}

.header {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.subtitle {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #4cbfd2;
}

.description,
.title {
    color: black;
    display: flex;
    gap: 10px;
    align-items: center;
}

.title h1:last-child {
    color: #058283;
    background-color: #daeced;
    padding: 5px;
}

.description {
    justify-content: space-between;
}

.description button {
    text-transform: uppercase;
    font-size: 15px;
    background-color: rgba(5, 130, 131, 255);
    padding: 10px;
    border-radius: 4px;
}

.body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
}

.card {
    width: calc((100% / 12) * 3);
    margin-bottom: -80px;
}

.card img {
    width: 100%;
    border-radius: 10px;
}

.card h3 {
    position: relative;
    bottom: 73px;
    text-align: center;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.468);
    border-radius: 10px;
}
</style>