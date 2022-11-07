<template>
    <div class="container_break w-full flex justify-center items-center start">  
      <div class="warrior z-30"><img class="warrior_inner" src="../assets/images/img_UIRD_big.png"/></div>
        <div class="break_title w-9 text-7xl text-white z-30 font-extrabold">互動式網頁設計</div>
        <div class="allCenter"><img class="breakquestion_bg" src="../assets/images/img_bg_big.png" /></div>
        <div class="badGuy z-30"><img src="../assets/images/img_enemy_big.png" /></div>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
export default {
data() {},
mounted(){
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    
    ScrollTrigger.matchMedia({
  "(max-width: 768px)": () => {
    gsap.fromTo('.badGuy', {
      x: -270,
      y: 500,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: -300,
      y: 500,
      duration: 1,
      delay: 1,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.start',
        toggleActions: 'play pause resume reset',
      },
    });

    gsap.fromTo('.warrior', {
      x: 200,
      y: 200,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: 270,
      y: 200,
      duration: 1,
      delay: 2,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.start',
        toggleActions: 'play pause resume reset',
      },
    });
   },
  // 我都執行
  "all": () => {
    gsap.fromTo('.break_title', {
      x: 450,
      y: 10,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: 450,
      y: 20,
      duration: 1,
      delay: 1,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.start',
        toggleActions: 'play pause resume reset',
      },
    });
    gsap.fromTo('.badGuy', {
      x: -300,
      y: 150,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: -350,
      y: 150,
      duration: 1,
      delay: 2,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.start',
        toggleActions: 'play pause resume reset',
      },
    });

    gsap.fromTo('.warrior', {
      x: 300,
      y: -100,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: 350,
      y: -100,
      duration: 1,
      delay: 3,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.start',
        toggleActions: 'play pause resume reset',
      },
    });
   },
});

},
}
</script>