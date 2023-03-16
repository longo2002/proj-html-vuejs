<template>
    <section class="bg">
        <div class="container">
            <div class="description">
                <span>about the network</span>
                <h1>The Company</h1>
                <p>With all of this expertise and capability comes an unrivaled commitment to cunstomer service.</p>
                <div class="description_group">
                    <ul class="group">
                        <li class="group_item">
                            <div class="item_percentage">
                                <h3>
                                    0%
                                </h3>
                            </div>
                            <div class="item_description">
                                <h2>
                                    Leadership
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </li>
                        <li class="group_item">
                            <div class="item_percentage">
                                <h3>
                                    0%
                                </h3>
                            </div>
                            <div class="item_description">
                                <h2>
                                    Psychology
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </li>
                        <li class="group_item">
                            <div class="item_percentage">
                                <h3>
                                    0%
                                </h3>
                            </div>
                            <div class="item_description">
                                <h2>
                                    Flexability
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="../assets/img/about-5.jpg" alt="">
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
    background-color: #111117;
}

.container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.description {
    padding: 50px;
    width: 700px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.description span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    color: #4cbfd2;
}

.description p {
    color: rgba(255, 255, 255, 0.587);
    font-size: 18px;
}

.group {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.group_item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-left: 75px;
}

.item_percentage {
    border: 10px solid rgba(255, 255, 255, 0.297);
    border-radius: 99999px;
    padding: 25px;
}
</style>