<template>
    <section class="bg">
        <div class="container">
            <div class="card">
                <span>our business areas</span>
                <h1>Logistics Services</h1>
                <p>We are leaders in providing logistics services with a set of cutting edge technologies and a team of
                    experienced and renowed profesionals.</p>
                <ul>
                    <li>Tradition</li>
                    <li>Quality</li>
                    <li>Security</li>
                </ul>
                <button>read more</button>
            </div>
            <div class="card">
                <img src="../assets/img/gallery-3.jpg" alt="">
                <h2>Technology</h2>
                <p>
                    Focused on developig technology solutions asapted to our's clients needs.
                </p>
            </div>
            <div class="card">
                <img src="../assets/img/gallery-5.jpg" alt="">
                <h2>Transport</h2>
                <p>
                    We develop operational strategies to improve logistical efficiency.
                </p>
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
    background-color: #eef4ed;
}

.container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
}

.card {
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    width: calc((100% / 12) * 4);
    padding: 50px;
    gap: 30px;
    border-radius: 5px;
    margin: 100px 0;
}

.card:first-child {
    background-color: transparent;
}

.card span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #4cbfd2;
}

.card h1 {
    font-size: 40px;
    font-weight: 900;
}

.card p {
    color: rgba(0, 0, 0, 0.45);
    font-size: 18px;
}

.card ul {
    display: flex;
    gap: 20px;
}

.card ul li {
    background-color: #cce3de;
    padding: 5px;
    color: #269292;
    border-radius: 5px;
}

.card button {
    text-transform: uppercase;
    font-size: 12px;
    background-color: rgba(5, 130, 131, 255);
    padding: 10px;
    border-radius: 4px;
    width: 50%;
}
</style>