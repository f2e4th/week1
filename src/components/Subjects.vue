<template>
  <div id="SubjectsContainer">
    <div id="Subjects">
      <div class="title_layout">
        <div class="title  title_3">
          <h1>WEEK 3</h1>
          <h2>Scrum 新手村</h2>
        </div>
        <div class="title  title_2">
          <h1>WEEK 2</h1>
          <h2>今晚，我想來點點簽</h2>
        </div>
        <div class="title title_1">
          <h1>WEEK 1</h1>
          <h2>The F2E 活動網站設計</h2>
        </div>
      </div>
      <div class="img_layout">
        <div class="img_container">
          <div class="img_div img_div--3">
            <img src="../assets/img/img_week3_big.png" alt="img" />
          </div>
          <div class="img_div img_div--2">
            <img src="../assets/img/img_week2_big.png" alt="img" />
          </div>
          <div class="img_div img_div--1">
            <img src="../assets/img/img_week1_big.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import { ref, reactive, onMounted, computed, watch } from "vue";
import gsap from "gsap";
import scrollTrigger from "gsap/scrollTrigger";
</script>

<script setup>
onMounted(() => {
  gsapInit();
});
const imgs = reactive([
  "../assets/img/img_week3_big.png",
  "../assets/img/img_week2_big.png",
  "../assets/img/img_week1_big.png",
]);
function gsapInit() {
  gsap.registerPlugin(scrollTrigger);
  const timeline = gsap.timeline();
  timeline.to("#Subjects", {
    scrollTrigger: {
      trigger: "#SubjectsContainer",
      pin: true, // 要postion fixed 的時候 pin需要設為true,
      markers: false,
      scrub: true,
      start: 'botom',
      end: 'bottom'
    },
  });
  timeline.to(".img_div--1", {
    scrollTrigger: {
      trigger: ".img_div--1",
      markers: false,
      start: "top top",
      end: "9%",
      height: 0,
      scrub: true,
    },
    height: 0,
  });
  timeline.to(".img_div--2", {
    scrollTrigger: {
      trigger: ".img_div--2",
      markers: false,
      start: "center top",
      end: "81%",
      height: 0,
      scrub: true,
    },
    height: 0,
  });
  // timeline.to('.img_div--3', {
  //     scrollTrigger:{
  //         trigger: '#Subjects',
  //         markers: false,
  //         start: 'top 66%',
  //         end: 'bottom',
  //         height: 0,
  //         scrub: true
  //     },
  //     height: 0,
  // })
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/all.scss";
#SubjectsContainer {
  padding-top: 212px;
  background: $main_bg;

  #Subjects {
    height: 1024px;
    background: $main_bg;
  }
}
.title_layout {
  @apply w-full;
  .title {
    @apply absolute w-full;
    top: 60px;
    background: $main_bg;
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
  }
}
.img_layout {
  @apply flex justify-center;
  .img_container {
    @apply relative w-full;
    width: 600px;
    height: 600px;
    img {
      width: 600px;
      height: 600px;
    }
  }
}
.img_div {
  @apply absolute top-0;
  height: 600px;
  width: 600px;
  overflow: hidden;
  background: $main_bg;
}
</style>
