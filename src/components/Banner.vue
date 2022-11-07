<template>
  <div id="Banner">
    <h1 class="banner-title">The F2E 4TH {{circyleY}}</h1>
    <div class="banner-svg banner-svg--back">
        <svg class="w-full h-full">
            <circle cx="439" cy="100" r="80" class="svg-circle svg-circle--1"></circle>
            <circle cx="439" cy="100" r="70" class="svg-circle svg-circle--2"></circle>
            <circle cx="439" cy="100" r="60" class="svg-circle svg-circle--3"></circle>
            <circle cx="439" cy="100" r="50" class="svg-circle svg-circle--4"></circle>
        </svg>
    </div>
    <div class="banner-svg banner-svg--front"></div>
  </div>
</template>

<script>
import {ref, reactive, onMounted, computed} from "vue";
import gsap from "gsap";
export default {
    setup(){
        onMounted( ()=>{
            gsapInit();
            getCircyleY();
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
        return {circyleY}
    }


}
</script>

<style scope lang='scss'>
#Banner {
    @apply relative h-screen w-full;
}
.banner-title {
    @apply absolute z-10 w-full bottom-0;
    // top-60
    // 會出現的位置 top-44 (11rem) 176px
    // top: 15rem;
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
.svg-circle {
    @apply w-full h-full;
    fill: black;
    &:nth-child(odd){
        fill: white;
    }
}
</style>