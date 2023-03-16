<template>
    <div class="container">
        <div class="cont_items">
            <div>
                <font-awesome-icon icon="fa-solid fa-clock" />
                <span> Open Hours: Mon - Sat - 9:00 18:00</span>
            </div>
            <div>
                <ul class="info_group">
                    <li><font-awesome-icon icon="fa-solid fa-phone" /> <span>+1 (305) 1234-5678</span></li>
                    <li><font-awesome-icon icon="fa-solid fa-envelope" /> <span>hello@exemple.com</span></li>
                    <li><font-awesome-icon icon="fa-brands fa-facebook" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
                    <li><font-awesome-icon icon="fa-brands fa-linkedin-in" /></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    background-color: rgba(33, 51, 62, 255);
    padding: 10px 25px;
    color: rgba(255, 255, 255, 0.7);
}

.cont_items {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.info_group {
    display: flex;
    gap: 25px;
}
</style>