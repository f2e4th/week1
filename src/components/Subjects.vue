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

      <div class="footer_layout">
        <div class="footer footer_3">
          <h3 class="title">JS draggable</h3>
          <h4 class="subtitle">#鈦坦科技</h4>
        </div>
        <div class="footer footer_2">
          <h3 class="title">Canvas</h3>
          <h4 class="subtitle">#凱鈿行動科技</h4>
        </div>
        <div class="footer footer_1">
          <h3 class="title">視差滾動</h3>
          <h4 class="subtitle">#板塊設計</h4>
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
  scrollTrigger.matchMedia({
    "(min-width: 1100px)": () => { 
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
            scrub: true,
        },
        height: 0,
        });
        timeline.to(".title_1", {
        scrollTrigger: {
            trigger: ".img_div--1",
            markers: false,
            start: "10% top",
            end: "bottom top",
            scrub: false,
            toggleActions: "play none  reverse reverse"
        },
        height: 0,
        duration: 0.3
        },"<");
        timeline.to(".footer_1", {
        scrollTrigger: {
            trigger: ".img_div--1",
            markers: false,
            start: "top top",
            end: "top",
            scrub: false,
            toggleActions: "play none  reverse reverse"
        },
        height: 0,
        duraiton: 0.3
        },"<");
        timeline.to(".img_div--2", {
        scrollTrigger: {
            trigger: ".img_div--2",
            markers: false,
            start: "center top",
            end: "81%",
            scrub: true,
        },
        height: 0,
        });
        timeline.to(".title_2", {
        scrollTrigger: {
            trigger: ".img_div--2",
            markers: false,
            start: "bottom 25%",
            end: "bottom",
            scrub: false,
            toggleActions: "play none  reverse reverse"
        },
        height: 0
        },"<");
        timeline.to(".footer_2", {
        scrollTrigger: {
            trigger: ".img_div--1",
            markers: false,
            start: "center top",
            end: "bottom",
            scrub: false,
            toggleActions: "play none  reverse reverse"
        },
        height: 0,
        duraiton: 0.3
        },"<");
    },
    "(max-width: 1099px)": () => {
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
            scrub: true,
        },
        height: 0,
        });
        timeline.to(".title_1", {
        scrollTrigger: {
            trigger: ".img_div--1",
            markers: false,
            start: "10% top",
            end: "bottom top",
            scrub: false,
            toggleActions: "play none  reverse reverse"
        },
        height: 0,
        duration: 0.3
        },"<");
        timeline.to(".footer_1", {
        scrollTrigger: {
            trigger: ".img_div--1",
            markers: false,
            start: "top top",
            end: "top",
            scrub: false,
            toggleActions: "play none  reverse reverse"
        },
        height: 0,
        duraiton: 0.3
        },"<");
        timeline.to(".img_div--2", {
        scrollTrigger: {
            trigger: ".img_div--2",
            markers: false,
            start: "center top",
            end: "81%",
            scrub: true,
        },
        height: 0,
        });
        timeline.to(".title_2", {
        scrollTrigger: {
            trigger: ".img_div--2",
            markers: false,
            start: "bottom 25%",
            end: "bottom",
            scrub: false,
            toggleActions: "play none  reverse reverse"
        },
        height: 0
        },"<");
        timeline.to(".footer_2", {
        scrollTrigger: {
            trigger: ".img_div--1",
            markers: false,
            start: "center top",
            end: "bottom",
            scrub: false,
            toggleActions: "play none  reverse reverse"
        },
        height: 0,
        duraiton: 0.3
        },"<");
    }
});
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/all.scss";
$pc_img_size:500px;
$mobile_img_size: 360px;
#SubjectsContainer {
  padding-top: 160px;
  background: $main_bg;

  #Subjects {
    height: 1024px;
    background: $main_bg;
    @media screen and (max-width: 600px)  {
      height :600px;
    }
  }
}
.title_layout {
  @apply w-full;
  .title {
    @apply absolute w-full overflow-hidden;
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
    width: $pc_img_size;
    height: $pc_img_size;
    @media screen and (max-width:700px) {
      @apply flex justify-center;
      width: $mobile_img_size;
      height: $mobile_img_size;
    }
    .img_div {
      @apply absolute top-0 overflow-hidden;
    //   height: 600px;
    //   width: 600px;
        height: $pc_img_size;
        width: $pc_img_size;
        background: $main_bg;
      @media screen and (max-width:700px) {
        width: $mobile_img_size;
        height: $mobile_img_size;
      }
    }
    img {
      width: $pc_img_size;
      height: $pc_img_size;
      @media screen and (max-width:700px) {
        width: $mobile_img_size;
        height: $mobile_img_size;
      }

    }
  }
}
.footer_layout {
  @apply relative;
  .footer {
    @apply  w-full absolute top-10 overflow-hidden;
    font-weight: 500;
    background: $main_bg;
    .title {
      font-size: 32px;
      line-height: 46.34px;
    }
    .subtitle {
      font-size: 24px;
      line-height: 37.5px;
    }
  }
}
</style>
