<template>
  <div id="Progress">
    <div class="progreassBar" >
      <div class="timeline--dark__container" :style="`height:${(card_data.length-1)*205+5}px`">
        <div class="timeline timeline--dark" :style="`height:${(card_data.length-1)*205}px`">
          <div v-for="(item, i) in card_data" :key="i" class="circle circle--top" :style="`top:${i*200}px`"></div>
        </div>
        <div class="currentPositionContainer">
          <div id="currentPosition">
            <div class="lg">
              <div class="md">
                <div class="sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="timeline--bright__container" style="height: 0;">
      <div class="currentPositionContainer">
          <div id="currentPosition">
            <div class="lg" style="background: transparent;">
              <div class="md" style="background: transparent;">
                <div class="sm"></div>
              </div>
            </div>
          </div>
        </div>
      <div class="timeline timeline--bright" :style="`height:${(card_data.length-1)*205}px`">
        <div v-for="(item, i) in card_data" :key="i" class="circle circle--top" :style="`top:${i*200}px`"></div>
      </div>
    </div>

    </div>
    <ul class="list_container">
      <li v-for="(item, i) in card_data" :key="i" >
        <div class="Progress__card">
          <div class="title">{{item.title}}</div>
          <div class="subtitle">{{item.subtitle}}</div>
          <div class="content">{{item.content}}</div>
          <div class="img">
            <img :src="item.img" alt="img">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {ref, reactive, onMounted, computed, watch} from "vue";
import progress_1 from '../assets/img/progress_1.png';
import progress_2 from '../assets/img/progress_2.png';
import progress_3 from '../assets/img/progress_3.png';
import progress_4 from '../assets/img/progress_4.png';
import gsap from "gsap";
import scrollTrigger from "gsap/scrollTrigger";
</script>
<script setup>
  const card_data = reactive([
    {
      title: "SIGN UP!",
      subtitle: '開放報名',
      content: "10/13(四)早上 11:00 -11/6(日)晚上23:59",
      img: progress_1
    },
    {
      title: "START!",
      subtitle: '各組別開賽',
      content: "UI組、團體組開賽 10/31、前端組開賽 11/7",
      img: progress_2
    },
    {
      title: "UPLOAD!",
      subtitle: '登陸作品',
      content: "10/31(一)早上 11:00 -11/28(日)中午12:00",
      img: progress_3
    },
    {
      title: "STREAM!",
      subtitle: '線上直播',
      content: "11/3 - 11/24(每周四)",
      img: progress_4
    }
  ])

  function gsapInit(){
    gsap.registerPlugin(scrollTrigger);
    const timeline = gsap.timeline();
    const startPoint_1 = 'center bottom',
    endPoint_1 = 'center top',
    startPoint_2 = '40% center',
    endPoint_2 = '40% top',
    startPoint_3 = '15% 15%',
    endPoint_3 = '15% top',
    lineAni_1 = {
      scrollTrigger: {
        trigger: "#Progress",
        pin: false,
        markers: false,
        scrub: false,
        start: startPoint_1,
        end: endPoint_1,
        toggleActions: "play none none none"
      },
      height: 220,
      duration: 0.3
      // height: (card_data.length-1)*205+5+100
    },
    pointAni_1 = {
      scrollTrigger: {
          trigger: "#Progress",
          markers: false,
          scrub: false,
          start: startPoint_1,
          end: endPoint_1,
          toggleActions: "play none none none"
        } ,
        duration: 0.3,
        top: 220,
    },
    lineAni_2 = {
      scrollTrigger: {
        trigger: "#Progress",
        pin: true,
        markers: false,
        scrub: false,
        start: startPoint_2,
        end: endPoint_2,
        toggleActions: "play none none none"
      },
      height: 420,
      duration: 0.3
    },
    pointAni_2 = {
      scrollTrigger: {
        trigger: "#Progress",
        markers: false,
        scrub: false,
        start: startPoint_2,
        end: endPoint_2,
        toggleActions: "play none none none"
      },
      top: 420
    },
    lineAni_3 = {
      scrollTrigger: {
        trigger: "#Progress",
        pin: true,
        markers: false,
        scrub: false,
        start: startPoint_3,
        end: endPoint_3,
        toggleActions: "play none none none"
      },
      height: 620,
      duration: 0.3
      // height: (card_data.length-1)*205+5+100
    },
    pointAni_3 = {
      scrollTrigger: {
        trigger: "#Progress",
        markers: false,
        scrub: false,
        start: startPoint_3,
        end: endPoint_3,
        toggleActions: "play none none none"
      },
      top: 620
      }

    timeline.to(".timeline--bright__container", lineAni_1);
    timeline.to(".currentPositionContainer", pointAni_1,"<");
    timeline.to(".timeline--bright__container", lineAni_2);
    timeline.to(".currentPositionContainer", pointAni_2,"<");
    timeline.to(".timeline--bright__container", lineAni_3);
    timeline.to(".currentPositionContainer", pointAni_3,"<");
    }
  onMounted(()=>{
    gsapInit();
  })

</script>

<style lang="scss" scoped>
@import '../assets/scss/all.scss';
$mobildSize: 700px;
#Progress {
  @apply py-10 px-4 relative;
  background-color: #061C31;
  height: 1024px;
}

.list_container {
  @apply flex flex-col mx-auto my-0;
    max-width: 768px;
    @media screen and (max-width:$mobildSize) {
      @apply items-center;
      padding-left: 40px;
    }
  > li {
    @apply relative;
    max-width: 300px;
  }
  >li:nth-child(odd){
    align-self: flex-end;
    margin-left: 60px;
    @media screen and (max-width:$mobildSize) {
        align-self: flex-start;
    }
    .Progress__card {
      @apply items-start;
    }
  }
  >li:nth-child(even){
    // align-self: flex-start;
    margin-right: 60px;
    @media screen and (max-width:$mobildSize) {
        align-content: flex-start;
        margin-right: 0;
        margin-left: 180px;
    }
    .Progress__card {
      @apply items-end;
      @media screen and (max-width:$mobildSize) {
        @apply items-start;
      }
    }
  }
  .Progress__card {
    @apply flex flex-col;
    font-weight: 500;
    .title {
      line-height: 46.34px;
      font-size: 34px;
    }
    .subtitle{
      line-height: 23.17px;
      font-size: 16px;
    }
    .content {
      line-height: 23.17px;
      font-size: 16px;
    }
    .img {
      width: 100px;
      height: 100px;
      img {
        @apply w-full h-full;
      }
    }
  }
}
.progreassBar {
  @apply absolute top-0 w-full flex justify-center;
  top: 110px;
  @media screen and (max-width: $mobildSize) {
    width: 40px;
  }
  .timeline--dark__container {
    @apply relative;
    transform: translateX(42px);
    @media screen and (max-width: $mobildSize) {
        transform: translateX(34px);
      }
  }
  .timeline--bright__container {
    @apply overflow-y-hidden flex justify-center relative;
      // width: 28px;
      transition: all 0.3s;
      width: 110px;
      transform: translateX(-17px);
      @media screen and (max-width: $mobildSize) {
        transform: translateX(17px);
      }
  }
  .timeline{
    @apply rounded-md relative;
    width: 8px;
    height: 500px;
    background: #102F4D;
    &--bright {
      background-color: $main_active;
      .circle {
        background-color: $main_active;
      }
    }
  }

}
.circle {
  @apply rounded-full;
  width: 20px;
  height: 20px;
  background: #102F4D;
  left: -6px;
  &.circle--top{
    @apply absolute top-0;
  }
  &.circle--bottom {
    @apply absolute bottom-0;
  }
}
.timeline--dark__container .currentPositionContainer {
    left: -46px;
}
.currentPositionContainer {
  @apply absolute z-10;
    top:20px;
    transform: translateY(-60px);
    transition: all .3s;
  #currentPosition {
    @apply relative;
    width: 100px;
    height: 100px;
    .lg {
      @apply rounded-full absolute top-0 left-0;
      width: 100px;
      height: 100px;
      background-color: rgba(81, 162, 191, .2);
    }
    .md {
      @apply rounded-full absolute;
      width: 60px;
      height: 60px;
      background-color: rgba(81, 162, 191, .5);
      left: 20px;
      top: 20px;
    }
    .sm {
      @apply rounded-full absolute;
      width: 20px;
      height: 20px;
      background-color: #FFFFFF;
      left: 20px;
      top: 20px;
    }
  }
}
</style>