<template>
    <section class="bg">
        <div class="container">
            <div class="col">
                <img src="../assets/img/logo.svg" alt="">
                <p>
                    A functional HTML template for Corporate & Business.
                </p>
                <ul>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-phone" /> <span>+1 (305) 1234-5678</span>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-envelope" /> <span> hello@example.com</span>
                    </li>
                    <li>
                        <font-awesome-icon icon="fa-solid fa-location-dot" /> <span>Main Avenue, 987</span>
                    </li>
                </ul>
                <button>
                    get in touch
                </button>
            </div>
            <div class="col">
                <h2>About</h2>
                <ul>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                </ul>
            </div>
            <div class="col">
                <h2>Transport</h2>
                <ul>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                </ul>
            </div>
            <div class="col">
                <h2>Support</h2>
                <ul>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                    <li> <font-awesome-icon icon="fa-solid fa-chevron-right" /> Lorem</li>
                </ul>
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
    background-image: url("../assets/img/bg-10.jpg");
    background-size: cover;
    background-position: center;
}

.container {
    width: 1200px;
    margin: 0 auto;
    padding: 50px;
    display: flex;
    gap: 25px;
}

.col {
    width: calc((100%/12)*3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 15px;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.245);
    border-radius: 15px;
}

.col img {
    height: 50px;
}

.col button {
    text-transform: uppercase;
    font-weight: 600;
    background-color: rgba(5, 130, 131, 255);
    padding: 10px;
    border-radius: 4px;
    border: 2px solid rgba(5, 130, 131, 255);
    background-color: transparent;
}
</style>