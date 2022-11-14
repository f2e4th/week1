<template>
    <div class='wrapper' id='askQuestion'>
        
        <!-- 3 -->
        <div class="sadQuestion Question_img" style='opacity:0'>
            <img src="../assets/images/sadQuestion.png" alt="">
        </div>
        <div class='sad magic_img mc_3'>
            <img src="../assets/images/sad.png" alt="">
        </div>

        <!-- 2 -->
        <div class="ohQuestion Question_img" style='opacity:0'>
            <img src="../assets/images/ohQuestion.png" alt="">
        </div>
        <div class='oh magic_img mc_2'>
            <img src="../assets/images/oh.png" alt="">
        </div>

        <!-- 1 -->
        <div class="unhappyQuestion Question_img">
            <img src="../assets/images/unhappyQuestion.png" alt="">
        </div>
        <div class='unhappy magic_img mc_1'>
            <img src="../assets/images/unhappy.png" alt="">
        </div>
    
    </div>
</template>

<script>
import gsap from 'gsap';
import scrollTrigger from 'gsap/scrollTrigger';
import { onMounted } from '@vue/runtime-core';

export default {
    setup(){
        onMounted(()=>{
            gsapInit();
        })
    },
}

function gsapInit(){
    gsap.registerPlugin(scrollTrigger);
    const timeline = gsap.timeline();
    const 
    _1to2 = {
        scrollTrigger: {
            trigger: ".unhappyQuestion",
            start: "55% 30%",
            end: "bottom",
            scrub: false,
        },
        opacity:0,
        duration:0.3,
    },

    _1to2_setOP = {
        scrollTrigger: {
            trigger: ".ohQuestion",
            start: "55% 30%",
            end: "bottom",
            scrub: false,
        },
        opacity:1,
        duration:0.3,
    },

    _2to3 = {
        scrollTrigger: {
            trigger: ".ohQuestion",
            start: "bottom top",
            end: "bottom",
            scrub: false,
        },
        opacity:0,
        duration:0.3,
    },

    _2to3_setOP = {
        scrollTrigger: {
            trigger: ".sadQuestion",
            start: "bottom -10%",
            end: "bottom",
            scrub: false,
        },
        opacity:1,
        duration:0.3,
    }


    timeline.to(".mc_1", {
        scrollTrigger: {
            pin:true,
            trigger: "#askQuestion",
            // markers: {
            //     startColor: 'pink',
            //     endColor: 'pink'
            // },
            start: "45% 40%",
            end: "bottom",
            scrub: false,
        },
        opacity:0,
        duration:0.3,
    });


    timeline.to(".mc_2", {
        scrollTrigger: {
            pin:true,
            trigger: "#askQuestion",
            markers:false,
            start: "center 40%",
            end: "bottom",
            scrub: false,
        },
        opacity:0,
        duration:0.3,
    });

    timeline.to(".unhappyQuestion", _1to2);
    timeline.to(".ohQuestion", _1to2_setOP);
    timeline.to(".ohQuestion", _2to3,);
    timeline.to(".sadQuestion", _2to3_setOP);
}

</script>


<style lang="scss" scoped>
    .wrapper{
        // background-color: rgba(238, 240, 241, 1);
        position: relative;
        width:100%;
        height: 1024px;
        margin: 0 auto;
        background-image: url('../assets/images/Bg_big.png');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom;
    }
    .Question_img{
        position: absolute;
        width: 600px;
        top: 0;
    }

    .magic_img{
        position: absolute;
        right: 0;
        bottom:0;
        width: 620px;
        overflow: hidden;

        img{
            width: 100%;
        }
    }

</style>