<template>
    <div class="container_break w-full flex justify-center items-center start">
        <div class="warrior"><img src="../assets/images/img_UIRD_big.png"/></div>
        <div class="allCenter">
            <div class="relative">
                <img class="absolute z-0 breakquestion_bg top-0" src="../assets/images/breakquestion_bg.png" />
                <img class="absolute z-10 castle top-0" src="../assets/images/castle.png" />
            </div>
        </div>
        <!-- <div class="castle"><img src="../assets/images/castle.png" /></div> -->
        <div class="badGuy"><img src="../assets/images/img_enemy_big.png" /></div>
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
    gsap.fromTo('.badGuy', {
      x: 0,
      y: 55,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: -150,
      y: 55,
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
      x: 0,
      y: -20,
      opacity: 0,
      visibility: 'hidden',
    },
    {
      rotation: 0,
      x: 150,
      y: -20,
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
}
</script>