<template>
    <div class="container_award w-full flex justify-center items-center flex-col text-section-second">
        <img class="ellipse" src="../assets/images/ellipse.png"/>
        <div class="text-white text-content text-section">
            <div class="text-content-title mb-9 mt-4">獎項</div>
            <div class="mb-3 text-content-inner">
                初選佳作 共六十位 數位獎狀<br><p>每週主題個人組十位、團體組十組</p>
            </div>
            <div class="text-content-inner mb-3">
                個人企業獎 共六位 NTD 3,000/位<br><p>每週主題各 2 名，設計 1 位、前端 1 位</p>
            </div>
            <div class="text-content-inner mb-3">
                團體企業獎 共三組 NTD 10,000/組<br><p>每週主題各 1 組</p>
            </div>
            <div class="text-content-inner">
                以上皆提供完賽數位獎狀
            </div>
        </div>
        <div class="treasure_all treasure_point"></div>
        <img class="diamond_red" src="../assets/images/diamond_red.png"/>
        <img class="diamond_red2" src="../assets/images/diamond_red2.png"/>
        <img class="diamond_green" src="../assets/images/diamond_green.png"/>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/scrollTrigger';

export default {
    data() {},
    mounted(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
     markers: false,

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
        const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.text-section-second',
            markers:false
          }
        })

        gsap.set('.ellipse', { opacity: 0.3, visibility: "visible" });
        gsap.set('.diamond_red', { opacity: 0, visibility: "hidden" });
        gsap.set('.diamond_red2', { opacity: 0, visibility: "hidden" });
        gsap.set('.diamond_green', { opacity: 0, visibility: "hidden" });
        tl.to('.treasure_all', 1, {backgroundImage:'url(../../../../src/assets/images/treasure_close.png)'
        })
    }

    function animated(){
        gsap.fromTo('.ellipse', {
            opacity: 0.3,
            visibility: 'visible',
        },
        {
            duration: 4,
            delay: 1.5,
            opacity: 1,
            visibility: 'visible',
            scrollTrigger: {
                trigger: '.treasure_point',
        },
    });
    gsap.fromTo('.diamond_red', {
            opacity: 0,
            visibility: 'hidden',
            x:50,
            y:-50,
        },
        {
            x:100,
            y:-150,
            duration: 4,
            delay: 2,
            opacity: 1,
            visibility: 'visible',
            scrollTrigger: {
                trigger: '.treasure_point',
        },
    });
    gsap.fromTo('.diamond_green', {
            opacity: 0,
            visibility: 'hidden',
            x:50,
            y:-50,
        },
        {
            x:-150,
            y:-200,
            duration: 4,
            delay: 2,
            opacity: 1,
            visibility: 'visible',
            scrollTrigger: {
                trigger: '.treasure_point',
        },
    });
    gsap.fromTo('.diamond_red2', {
            opacity: 0,
            visibility: 'hidden',
            x:50,
            y:-50,
        },
        {
            x:-200,
            y:-120,
            duration: 4,
            delay: 2,
            opacity: 1,
            visibility: 'visible',
            scrollTrigger: {
                trigger: '.treasure_point',
        },
    });

        gsap.fromTo('.text-section', {
            opacity: 0.3,
            visibility: 'visible',
        },
        {
            duration: 4,
            delay: 1.5,
            opacity: 1,
            visibility: 'visible',
            scrollTrigger: {
                trigger: '.treasure_point',
            },
        });

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.treasure_point',
                markers:false
            }
        });

        tl.to('.treasure_all', 1, {backgroundImage:'url(../src/assets/images/treasure_close.png)'
        }).to('.treasure_all', 1.2, {backgroundImage:'url(../src/assets/images/treasure_halfopen.png)'
        }).to('.treasure_all', 1.5, {backgroundImage:'url(../src/assets/images/treasure_open.png)'}) 
      }

      

    }
}
</script>
