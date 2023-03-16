<template>
    <section class="bg">
        <div class="shade">
            <header class="header">
                <div class="container">
                    <img src="../assets/img/logo.svg" alt="">
                    <div>
                        <ul class="navbar">
                            <li v-for="item in this.store.navItems">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <body>
                <section class="body_section">
                    <div class="underline">
                    </div>
                    <div class="hero">
                        <div class="hero_title">
                            <h1>
                                Logistics that goes further.
                            </h1>
                            <p>
                                For 20 years working with the most innovative in the field of transport.
                            </p>
                        </div>
                        <div class="hero_buttons">
                            <button>
                                Get in touch
                            </button>
                            <button>
                                read more
                            </button>
                        </div>
                    </div>
                </section>
            </body>
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
.shade,
.container,
.header,
.navbar,
.body_section,
.hero,
.hero_buttons {
    display: flex;
}

.shade,
.hero {
    flex-direction: column;
}

.container,
.header,
.navbar {
    align-items: center;
}

.bg {
    background-image: url('../assets/img/jumbo.jpg');
    background-size: cover;
}

.shade {
    background-color: rgba(0, 0, 0, 0.508);
    padding: 15px 0;
    gap: 25px;
}

.container {
    width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
}

.header {
    height: 50px;
    padding: 10px 25px;
}

.header img {
    height: 50px;
}

.navbar {
    gap: 25px;
    text-transform: uppercase;
    font-weight: 600;
}

.navbar li:last-child {
    background-color: rgba(5, 130, 131, 255);
    padding: 10px;
}

.body_section {
    width: 1000px;
    margin: 0 auto;
    justify-content: flex-end;
}

.hero {
    width: calc((100% / 12) * 4);
    gap: 25px;
    margin: 100px 0;
}

.underline {
    height: 30px;
    width: 250px;
    background-color: #058383e0;
    position: relative;
    top: 125px;
    left: 260px;
}

.hero_title {
    z-index: 999;
}

.hero_title h1 {
    font-weight: 900;
    margin-bottom: 15px;
}

.hero_title p {
    color: rgba(255, 255, 255, 0.587);
    font-size: 18px;
}

.hero_buttons {
    gap: 25px;
}

.hero_buttons button {
    text-transform: uppercase;
    font-weight: 600;
    background-color: rgba(5, 130, 131, 255);
    padding: 10px;
    border-radius: 4px;
}

.hero_buttons button:last-child {
    border: 2px solid rgba(5, 130, 131, 255);
    background-color: transparent;
}
</style>