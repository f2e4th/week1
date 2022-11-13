<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Homepage from './pages/Homepage.vue'
import Banner from './components/Banner.vue';
components: {
    Banner
  }

</script>

<template>
  <div>
    <div class="bannerContainer">
      <Banner/>
    </div>
    <Homepage/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/all.scss';
#app{
  @apply w-full p-0 mx-auto my-0;
  max-width: 1440px;
  background-color: $main_bg;
  color: $text_color;
}
body {
  background-color: $main_bg;
}
.bannerContainer {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #1F0812;
}
</style>
