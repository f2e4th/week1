<template>
  <div id="Banner">
      <div class="banner-svg banner-svg--back">
        <div class="banner-title" style="color:rgba(255,255,255,0.9)">
            <h1>The F2E 4TH</h1>
            <h2 class="sub-title">互動式網頁設計</h2>
        </div>
        <svg id="moonSvg" class="svg-back" width="772" height="772" viewBox="0 0 772 772" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle class="z-10 circle-4" cx="386" cy="386" r="386" fill="#182E43"/>
            <circle class="circle-3" cx="386" cy="386" r="343" fill="#2C4255"/>
            <circle class="circle-2" cx="386" cy="386" r="300" fill="#637180"/>
            <circle class="circle-1" cx="386" cy="386" r="257" fill="#EEF0F1"/>
        </svg>
        <img id="starSvg" :src="starSvg" alt="star">
        <img :src="treeSvgConbin" id="treeSvg" alt="tree">
    </div>
  </div>
</template>
<script>
import {ref, reactive, onMounted, computed, watch} from "vue";
import gsap from "gsap";
import treeSvg from '../assets/svg/img_tree_blue_big.svg'
import starSvg from '../assets/svg/img_star_blue_big.png'
import peopleSvg from '../assets/svg/img_RD&UI_big.svg'
import treeSvgConbin from '../assets/svg/img_tree_UIRD.svg'

</script>

<script setup>
    onMounted( ()=>{
        gsapInit();
    })
// methods
    function gsapInit(){
        const timeline = gsap.timeline();
        timeline.to('.banner-title', {
            top: 100 ,
            duration: 0.5,
            delay: 0.5,
            opacity: 1
        })
        timeline.to('.circle-1',{
            fill: '#FFDC9A',
            duration: 0.4
        })
        timeline.to('.circle-2',{
            fill: '#FFB21E',
            duration: 0.3
        })
        timeline.to('.circle-3',{
            fill: '#EB7F1D',
            duration: 0.2
        })
        timeline.to('.circle-4',{
            fill: '#9C411C',
            duration: 0.15
        })
        timeline.to('#starSvg', {
            fill: '#FFDC9A',
            duration: 0.15
        })
        timeline.to('#treeSvg', {
            fill: '#1F0812',
            duration: 0.1
        })

    }
</script>

<style scope lang='scss'>
@import '../assets/scss/all.scss';
#Banner {
    @apply relative  w-full mx-auto my-0 overflow-y-hidden;
    height: 1024px;
    max-width: 1440px;
    @media screen and (max-width: 1024px) {
        height: 80%;
    }
    @media screen and (max-width: 700px) {
        height: 50%;
    }
}
.banner-title {
    @apply absolute z-10 w-full bottom-0;
    font-weight: 500;
    font-size: 72px;
    line-height: 104px;
    text-shadow: 0 0.1em #333;
    opacity: 0;
    font-size: 40px;
    color: $text_color;
}
.banner-svg {
    @apply w-full;
    &--back {
        @apply h-full relative;
        background: #061C31;

    }
}
.svg-circle {
    @apply w-full h-full;
    fill: black;
    &:nth-child(odd){
        fill: white;
    }
}
.svg-back{
    @apply mx-auto my-0;
}
#starSvg {
    @apply absolute top-0 w-full;
}
#treeSvg {
    @apply absolute bottom-0 z-10 w-full;
    fill:#061C31;
}
#peopleSvg {
    @apply absolute bottom-96;
    transform: translateX(-50%);
}
#moonSvg{
    width: 50%;
    transform: translateY(50px);
    @media screen and (max-width:600px) {
        height: 500px;
    }
}
.sub-title {
    font-size: 40px;
    line-height: 57px;
    font-size: 24px;
}
.banner-svg--back  {
    background: #1F0812;
}
</style>