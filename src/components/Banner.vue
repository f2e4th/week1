<template>
  <div id="Banner">
    <h1 class="banner-title">The F2E 4TH</h1>
    <div class="banner-svg banner-svg--back"></div>
    <div class="banner-svg banner-svg--front"></div>
  </div>
</template>

<script>
export default {


}
</script>

<style scope lang='scss'>
#Banner {
    @apply relative h-screen w-full;
}
.banner-title {
    @apply absolute z-10 w-full top-44;
}
.banner-svg {
    @apply w-full left-0 absolute;
    &--front {
        @apply bottom-0 z-20;
        background: rgb(209, 114, 114);
        height: 60%;
    }
    &--back {
        @apply h-full top-0;
        background: rgb(128, 128, 211);
    }
}
</style>