<template>
    <div>
        <div class="container">
            <h2>Shop by Categories</h2>
            <swiper :slidesPerView="3" :spaceBetween="30" :pagination="{
                clickable: true,
            }" :modules="modules" class="mySwiper">
                <swiper-slide v-for="category in store.categoriesData">
                    <div  @click="store.redirectToCategory(category.category)">
                        <img :src="category.firstImage" alt="">
                        <div class="">
                            <p>{{ category.category }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "../store/store";
const store = useStore()

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ref } from 'vue';
const modules = ref([Pagination]);


onBeforeMount(() => {
    store.getCategories()
})
</script>

<style lang="scss">
@import '../scss/components/categories.scss';
</style>