import { defineStore } from 'pinia'
import axios from "axios";

export const useStore = defineStore('store', {
    state: () => ({
        categories: [],
        categoriesData: [],
        bestSeller: []
    }),
    actions: {
        async getCategories() {
            const response = await axios.get('https://dummyjson.com/products/?&limit=100');
            let length = response.data.products.length;
            let categories = []

            for (let i = 0; i < length; i++) {
                let category = response.data.products[i].category;

                if (category !== undefined) {
                    this.categories.push(category)
                }
            }

            this.categories = Array.from(new Set(this.categories))
            // console.log(this.categories);

            let sortedProducts = [];
            for (let x = 0; x < this.categories.length; x++) {
                let subArray = response.data.products.filter(product => product.category == this.categories[x])
                sortedProducts.push(subArray)
            }

            // console.log(sortedProducts);

            for (let j = 0; j < sortedProducts.length; j++) {
                let category = sortedProducts[j][0].category;
                let firstImage = sortedProducts[j][0].images[0];
                const categoryData = { category, firstImage };
                this.categoriesData.push(categoryData)
            }

            // console.log(this.categoriesData);
        },
        findTopRatedProducts(items, numProducts) {
            // Sort the items in descending order by rating
            items.sort((a, b) => b.discountPercentage - a.discountPercentage);

            // Slice the top numProducts items from the sorted array
            return items.slice(0, numProducts);
        },
        async getBestSeller() {
            const response = await axios.get('https://dummyjson.com/products/?&limit=100');
            let length = response.data.products.length;
            const topRatedProducts = this.findTopRatedProducts(response.data.products, 8);

            for (let i = 0; i < topRatedProducts.length; i++) {
                let actualSum = topRatedProducts[i].price - topRatedProducts[i].price * topRatedProducts[i].discountPercentage;
                topRatedProducts[i].actualSum = actualSum
            }

            this.bestSeller = topRatedProducts
            console.log(this.bestSeller);
        }
    }
})