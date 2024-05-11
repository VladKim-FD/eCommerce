<template>
    <nav>
        <div class="container nav__content">
            <a href="/"> <img src="../assets/icons/nav-logo.svg" alt=""></a>
            <div class="nav__content-menu" :class="{ active: isMenuOpen }" ref="navbarMenu">
                <div class="search">
                    <input type="text" placeholder="Find an item">
                    <img src="../assets/icons/search.svg" alt="">
                </div>
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
            <button class="menu-btn" :class="{ active: isMenuOpen }" @click="menuToggle" ref="menuBtn">
                <span></span>
            </button>
        </div>
    </nav>
</template>

<script setup>
const body = useNuxtApp();
console.log(body);
const menuBtn = ref(null)
const isMenuOpen = ref(false);

const closeMenu = (event) => {
//   const burgerMenu = document.querySelector(".menu-btn");
  if (!menuBtn.contains(event.target)) {
    isMenuOpen.value = false;
  }

  if (body.classList.contains('active')) {
    body.classList.remove('active')
  } 
};

onMounted(() => {
  document.addEventListener('click', closeMenu);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu);
});

function menuToggle(event) {
  event.stopPropagation()
  isMenuOpen.value = !isMenuOpen.value;
  if (body.classList.contains('active')) {
    body.classList.remove('active')
  } else {
    body.classList.add('active')
  }
}

</script>

<style lang="scss">
@import '../scss/components/navbar.scss';
</style>