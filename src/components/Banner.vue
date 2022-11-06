<template>
  <div id="Banner">
    <h1 class="banner-title">The F2E 4TH</h1>
    <div class="banner-svg banner-svg--back"></div>
    <div class="banner-svg banner-svg--front"></div>
  </div>
</template>

<script>
import {ref, reactive, onMounted} from "vue";
import gsap from "gsap";
export default {
    setup(){
        onMounted( ()=>{
            gsapInit();
        })
        const gsapInit = ()=>{
            const timeline = gsap.timeline();
            console.log(timeline);
            timeline.to('.banner-title', {
                top: "11rem",
                duration: 0.3,
                delay: 0.3
            })
            console.log('跑動畫');
        }
    }


}
</script>

<style scope lang='scss'>
#Banner {
    @apply relative h-screen w-full;
}
.banner-title {
    @apply absolute z-10 w-full top-60;
    // 會出現的位置 top-44 (11rem) 176px
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