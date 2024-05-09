<template>
    <div class="container category__content">

        <div class="category__content-products" v-if="store.categoryData.length > 0">
            <div class="product" v-for="product in store.categoryData">
            <img :src="product.images[0]" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "../store/store";
const store = useStore()
</script>