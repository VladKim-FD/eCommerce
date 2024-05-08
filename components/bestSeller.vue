<template>
    <div>
        <div class="container best__seller">
            <h2>Our Best Seller</h2>
            <div class="best__seller-list">
                <div class="item" v-for="item in store.bestSeller">
                    <!-- <p>{{ item }}</p> -->
                    <div class="item-image">
                        <img :src="item.images[0]" alt="">
                        <div class="add">
                        <a href="">Add to Cart</a>
                    </div>
                    </div>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "../store/store";
const store = useStore()

onBeforeMount(() => {
    store.getBestSeller()
})

</script>

<style lang="scss">
@import '../scss/components/bestSeller.scss';
</style>