<template>
    <div class="container_break w-full flex justify-center items-center start">  
       <img class="warrior_inner warrior" src="../assets/images/img_UIRD_big.png"/>
        <div class="break_title w-9  text-white z-30 font-extrabold">互動式網頁設計</div>
        <img class="breakquestion_bg" src="../assets/images/img_bg_big.png" />
        <img class="badGuy" src="../assets/images/img_enemy_big.png" />
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

    
    // gsap.fromTo('.break_title', {
    //   x: 450,
    //   y: 10,
    //   opacity: 0,
    //   visibility: 'hidden',
    // },
    // {
    //   rotation: 0,
    //   x: 450,
    //   y: 20,
    //   duration: 1,
    //   delay: 1,
    //   opacity: 1,
    //   visibility: 'visible',
    //   scrollTrigger: {
    //     trigger: '.breakquestion_bg',
    //     toggleActions: 'play pause resume reset',
    //   },
    // });
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
      delay: 1,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.breakquestion_bg',
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
      delay: 2,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.breakquestion_bg',
        toggleActions: 'play pause resume reset',
      },
    });
  
  
  ScrollTrigger.matchMedia({
    "(max-width: 1200px)": () => {
    // gsap.fromTo('.break_title', {
    //   x: 395,
    //   y: 15,
    //   opacity: 0,
    //   visibility: 'hidden',
    // },
    // {
    //   rotation: 0,
    //   x: 450,
    //   y: 20,
    //   duration: 1,
    //   delay: 1,
    //   opacity: 1,
    //   visibility: 'visible',
    //   scrollTrigger: {
    //     trigger: '.breakquestion_bg',
    //     toggleActions: 'play pause resume reset',
    //   },
    // });
    gsap.fromTo('.badGuy', {
      x: -245,
      y: 150,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: -250,
      y: 150,
      duration: 1,
      delay: 1,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.breakquestion_bg',
        toggleActions: 'play pause resume reset',
      },
    });
    gsap.fromTo('.warrior', {
      x: 270,
      y: -100,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: 280,
      y: -100,
      duration: 1,
      delay: 2,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.breakquestion_bg',
        toggleActions: 'play pause resume reset',
      },
    });
   },
    "(max-width: 768px)": () => {
    // gsap.fromTo('.break_title', {
    //   x: 260,
    //   y: 10,
    //   opacity: 0,
    //   visibility: 'hidden',
    // },
    // {
    //   rotation: 0,
    //   x: 260,
    //   y: 20,
    //   duration: 1,
    //   delay: 1,
    //   opacity: 1,
    //   visibility: 'visible',
    //   scrollTrigger: {
    //     trigger: '.breakquestion_bg',
    //     toggleActions: 'play pause resume reset',
    //   },
    // });
    gsap.fromTo('.badGuy', {
      x: -190,
      y: 60,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: -200,
      y: 60,
      duration: 1,
      delay: 1,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.breakquestion_bg',
        toggleActions: 'play pause resume reset',
      },
    });

    gsap.fromTo('.warrior', {
      x: 190,
      y: -90,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: 200,
      y: -90,
      duration: 1,
      delay: 2,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.breakquestion_bg',
        toggleActions: 'play pause resume reset',
      },
    });
   },
 
   "(max-width: 414px)": () => {
    // gsap.fromTo('.break_title', {
    //   x: 210,
    //   y: 15,
    //   opacity: 0,
    //   visibility: 'hidden',
    // },
    // {
    //   rotation: 0,
    //   x: 210,
    //   y: 20,
    //   duration: 1,
    //   delay: 1,
    //   opacity: 1,
    //   visibility: 'visible',
    //   scrollTrigger: {
    //     trigger: '.breakquestion_bg',
    //     toggleActions: 'play pause resume reset',
    //   },
    // });
    gsap.fromTo('.badGuy', {
      x: -85,
      y: 50,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: -90,
      y: 50,
      duration: 1,
      delay: 1,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.breakquestion_bg',
        toggleActions: 'play pause resume reset',
      },
    });

    gsap.fromTo('.warrior', {
      x: 85,
      y: -50,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: 90,
      y: -50,
      duration: 1,
      delay: 2,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.breakquestion_bg',
        toggleActions: 'play pause resume reset',
      },
    });
   },

});

},
unmounted(){
  const triggers = ScrollTrigger.getAll();
  triggers.forEach((trigger) => {
      // 把 ScrollTrigger 綁定的動畫消除
        trigger.kill();
      });
      // 消除綁定 MatchMedia();
      ScrollTrigger.clearMatchMedia();
   
}
}
</script>