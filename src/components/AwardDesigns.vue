<template>
    <div class="container_award w-full flex justify-center items-center flex-col">
        <div class="text-white text-content-title text-section text-section-first">
            區區修煉已經無法滿足了嗎？<br>
            還有比賽等著你！
        </div>
        <img class="ellipse" src="../assets/images/ellipse.png"/>
        <div class="text-white text-content text-section">
            <div class="text-content-title mb-9 mt-4">評審機制</div>
            <div class="mb-3 text-content-inner">
                初選：將由六角學院前端、UI 評審<br>進行第一波篩選，並於 12/5（五）<br>公布初選佳作名單
            </div>
            <div class="text-content-inner">
                決選：由三大企業針對該企業主題<br>進行入圍獎最後篩選，並於<br>12/23（五）公布企業得獎名單
            </div>
        </div>
        <div class="treasure_all"></div>
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
            trigger:'.text-section-first',
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
                trigger: '.treasure_all',
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
                trigger: '.treasure_all',
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
                trigger: '.treasure_all',
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
                trigger: '.treasure_all',
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
                trigger: '.treasure_all',
            },
        });

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.treasure_all',
                markers:false
            }
        });

        tl.to('.treasure_all', 1, {backgroundImage:'url(/src/assets/images/treasure_close.png)'
        }).to('.treasure_all', 1.2, {backgroundImage:'url(/src/assets/images/treasure_halfopen.png)'
        }).to('.treasure_all', 1.5, {backgroundImage:'url(/src/assets/images/treasure_open.png)'}) 
      }

      

    }
}
</script>
