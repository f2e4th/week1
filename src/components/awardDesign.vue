<template>
    <div class="container_award w-full flex justify-center items-center">
        <!-- <p class=" via-white text-7xl">test</p> -->
        <img class="ellipse" src="../assets/images/ellipse.png"/>
        <img class="absolute treasure" src="../assets/images/treasure_close.png"/>
        <img class="absolute treasure_half" src="../assets/images/treasure_halfopen.png"/>
        <img class="absolute treasure_open" src="../assets/images/treasure_open.png"/>
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

    ScrollTrigger.create({
	 //以作為觸發時機
      markers: true,

	 //向下滾動進入start點時觸發callback
      onEnter: function () {
        animated();
      },

	  //向下滾動超過end點時觸發callback
      onLeave: function () {
        hide();
      }, 

	 //向上滾動超過end點時觸發（回滾時觸發）callback
      onEnterBack: function () {
        animated();
      },

    });

    function hide() {
        gsap.set('.treasure', { opacity: 1, visibility: "visible" });
        gsap.set('.treasure_half', { opacity: 0, visibility: "hidden" });
        gsap.set('.treasure_open', { opacity: 0, visibility: "hidden" });
        gsap.set('.ellipse', { opacity: 0, visibility: "hidden" });
    }

 

    function animated(){
    // gsap.fromTo('.treasure', {
    //   x: 0,
    //   y: 200,
    //   opacity: 1,
    //   visibility: 'visible',
    // },
    // {
    //   x: 0,
    //   y: 250,
    //   rotation: 0,
    //   duration: 5,
    //   delay: 3,
    //   opacity: 0,
    //   visibility: 'hidden',
    //   scrollTrigger: {
    //     trigger: '.container_award',
    //     // toggleActions: 'play pause resume reset',
    //   },
    // });
    gsap.fromTo('.ellipse', {
      opacity: 0.3,
      visibility: 'visible',
    },
    {
      rotation: 0,
      duration: 4,
      delay: 3,
      opacity: 0.5,
      visibility: 'visible',
      ease: "expo",
      scrollTrigger: {
        trigger: '.container_award',
        // toggleActions: 'play pause resume reset',
      },
    });
    gsap.fromTo('.ellipse', {
      opacity: 0.5,
      visibility: 'visible',
    },
    {
      rotation: 0,
      duration: 5,
      delay: 3.5,
      opacity: 1,
      visibility: 'visible',
      scrollTrigger: {
        trigger: '.container_award',
        // toggleActions: 'play pause resume reset',
      },
    });


    // gsap.fromTo('.treasure_half', {
    //   opacity: 1,
    //   x: 0,
    //   y: 200,
    //   visibility: 'hidden',
    // },
    // {
    //   rotation: 0,
    //   duration: 5,
    //   x: 0,
    //   y: 200,
    //   delay: 4,
    //   opacity: 1,
    //   visibility: 'visible',
    //   ease: "expo",
    //   scrollTrigger: {
    //     trigger: '.container_award',
    //     // toggleActions: 'play pause resume reset',
    //   },
    // });


    // gsap.to('.treasure_open', {
    //   x: 0,
    //   y: 200,
    //   opacity: 0,
    //   visibility: 'hidden',
    // },
    // {
    //   x: 0,
    //   y: 200,
    //   duration: 5,
    //   delay: 5,
    //   opacity: 1,
    //   visibility: 'visible',
    //   scrollTrigger: {
    //     trigger: '.container_award',
    //     ease: "expo"

    //     // toggleActions: 'play pause resume reset',
    //   },
    // });
}


    }
}
</script>
