<template>
  <div id="Banner">
    <h1 class="banner-title">The F2E 4TH {{circyleY}}</h1>
    <div class="banner-svg banner-svg--back">
        <svg class="svg-back" width="772" height="772" viewBox="0 0 772 772" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle id="moonSvg" class="z-10" cx="386" cy="386" r="386" fill="#182E43"/>
            <circle cx="386" cy="386" r="343" fill="#2C4255"/>
            <circle cx="386" cy="386" r="300" fill="#637180"/>
            <circle cx="386" cy="386" r="257" fill="#EEF0F1"/>
        </svg>
        <img id="starSvg" :src="starSvg" alt="star">
        <img id="peopleSvg" :src="peopleSvg" :style="{left:peopleSvgStyle+'px'}" alt="people">
        <img :src="treeSvg" id="treeSvg" alt="tree">
    </div>
  </div>
</template>

<script>
import {ref, reactive, onMounted, computed} from "vue";
import gsap from "gsap";
import treeSvg from '../assets/svg/img_tree_blue_big.svg'
import starSvg from '../assets/svg/img_star_blue_big.png'
import peopleSvg from '../assets/svg/img_RD&UI_big.svg'

export default {
    setup(){
        onMounted( ()=>{
            gsapInit();
            // getCircyleY();
        })
        const circyleY =  ref('0');
        function gsapInit(){
            const timeline = gsap.timeline();
            console.log(timeline);
            timeline.to('.banner-title', {
                top: returnTitlePositionY(),
                duration: 0.3,
                delay: 0.3
            })
            // 後面接改svg fill
            console.log('跑動畫');
        }
        function returnTitlePositionY (){
            var backHeight = document.querySelector('.banner-svg--back').offsetHeight;
            var frontHeight = document.querySelector('.banner-svg--front').offsetHeight
            var titleHeight = document.querySelector('.banner-title').offsetHeight
            console.log(backHeight-frontHeight);
            return backHeight-frontHeight-titleHeight - 20;
        }
        function getCircyleY(){
            // return (window.innerWidth - 16)/2
            var circyle1 = document.querySelector('.svg-circle--1').attributes[2]
            var circyle2 = document.querySelector('.svg-circle--2').attributes[2]
            var circyle3 = document.querySelector('.svg-circle--3').attributes[2]
            var circyle4 = document.querySelector('.svg-circle--4').attributes[2]

            console.log(typeof circyle1, circyle2, circyle3, circyle4)
            circyleY.value = (window.innerWidth - 32)/2;
        }
        const peopleSvgStyle = computed({
            get: () => {
                var left = (window.innerWidth)/2;
                return left;
            }
        })
        return {circyleY, treeSvg, starSvg, peopleSvg, peopleSvgStyle}
    }


}
</script>

<style scope lang='scss'>
#Banner {
    @apply relative  w-full;
    height: 1024px;
}
.banner-title {
    @apply absolute z-10 w-full bottom-0;
    // top-60
    // 會出現的位置 top-44 (11rem) 176px
    // top: 15rem;
}
.banner-svg {
    @apply w-full;
    &--back {
        @apply h-full relative;
        // background: rgb(128, 128, 211);
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
    @apply absolute top-0;
}
#treeSvg {
    @apply absolute top-0;
}
#peopleSvg {
    @apply absolute bottom-96;
    transform: translateX(-50%);
}
</style>