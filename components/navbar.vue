<template>
    <nav>
        <div class="container nav__content">
            <img src="../assets/icons/nav-logo.svg" alt="">
            <div class="nav__content-menu">
                <input type="text" placeholder="Find an item">
                <ul>
                    <li>
                        <a href="">
                            <img src="../assets/icons/like.svg" alt="">
                            <p>Liked</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../assets/icons/orders.svg" alt="">
                            <p>Orders</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../assets/icons/shopping-cart.svg" alt="">
                            <p>
                                Cart
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup></script>

<style lang="scss">
@import '../scss/components/navbar.scss';
</style>