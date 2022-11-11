<template>
    <div class='wrapper' id='askQuestion'>
        
         <!-- 1 -->
        <div class="unhappyQuestion Question_img">
            <img src="../assets/images/unhappyQuestion.png" alt="">
        </div>
        <div class='unhappy magic_img'>
            <img src="../assets/images/unhappy.png" alt="">
        </div>
        
         <!-- 2 -->
        <!-- <div class="ohQuestion Question_img">
            <img src="../assets/images/ohQuestion.png" alt="">
        </div> -->
        <div class='oh magic_img' style='opacity:0'>
            <img src="../assets/images/oh.png" alt="">
        </div>

        <!-- 3 -->
        <!-- <div class="sadQuestion Question_img">
            <img src="../assets/images/sadQuestion.png" alt="">
        </div> -->
        <!-- <div class='sad magic_img'>
            <img src="../assets/images/sad.png" alt="">
        </div> -->

    </div>
</template>

<script>
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger'
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
    // timeline.to('#askQuestion',{
    //     scrollTrigger:{
    //         trigger:"#askQuestion",
    //         pin:true,
    //         pinSpacing:false,
    //         markers:false,
    //         scrub:true,
    //         start:'top',
    //         end:'bottom'
    //     },
    // });

    // timeline.to(".oh", {
    //     scrollTrigger: {
    //         trigger: ".oh",
    //         markers: true,
    //         start: "top center",
    //         end: "1%",
    //         height: 0,
    //         scrub: true,
    //     },
    // height: 0,
    // });
    // timeline.to(".oh", {
    //     scrollTrigger: {
    //         trigger: ".oh",
    //         markers: true,
    //         start: "bottom top",
    //         end: "5%",
    //         height: 0,
    //         scrub: true,
    //     },
    // height: 0,
    // });

    gsap.to('.unhappy',{
        scrollTrigger:{
            trigger:'#askQuestionContent',
            pin:true,
            strat:'center center',
            end:'bottom',
            markers:true,
            scrub: true
        },
        opacity:0,
        duration:3,
    })
    // timeline.to('.oh',{
    //     scrollTrigger:{
    //         trigger:'.oh',
    //         strat:'center',
    //         markers:false,
    //     },
    //     opacity:1,
    //     duration:3
    // })
}

</script>


<style lang="scss" scoped>
    .wrapper{
        // background-color: rgba(238, 240, 241, 1);
        position: relative;
        // width:1440px;
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
            width: 620px;
        }
    }

</style>