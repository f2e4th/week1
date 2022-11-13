<template>
  <div id="SubjectsContainer">
    <div id="Subjects">

      <div class="title_layout">
        <div v-for="(item, i) in sections" :key="i" class="title" :class="`title_${item.id}`">
          <h1>{{item.title}}</h1>
          <h2>{{item.title2}}</h2>
        </div>
      </div>

      <div class="img_layout">
        <div class="img_container">
          <div v-for="(item, i) in sections" :key="i" class="img_div" :class="`img_div--${item.id}`">
            <img :src="item.img" alt="img" />
          </div>
        </div>
      </div>

      <div class="footer_layout">
        <div  v-for="(item, i) in sections" :key="i" class="footer" :class="`footer_${item.id}`">
          <h3 class="title">{{item.footer_title}}</h3>
          <h4 class="subtitle">#{{item.footer_subtitle}}</h4>
        </div>
      </div>

    </div>
    </div>
</template>
<script>
import { ref, reactive, onMounted } from "vue";
import gsap from "gsap";
import scrollTrigger from "gsap/scrollTrigger";
import img_week1_big from '../assets/img/img_week1_big.png';
import img_week2_big from '../assets/img/img_week2_big.png';
import img_week3_big from '../assets/img/img_week3_big.png';
</script>

<script setup>
onMounted(() => {
  gsapInit();
});
const sections = reactive(
  [
    {
      title:'WEEK 3',
      title2:'Scrum 新手村',
      img: img_week3_big,
      footer_title: 'JS draggable',
      footer_subtitle: '鈦坦科技',
      id: 3
    },
    {
      title:'WEEK 2',
      title2:'今晚，我想來點點簽',
      img: img_week2_big,
      footer_title: 'Canvas',
      footer_subtitle: '凱鈿行動科技',
      id: 2
    },
    {
      title:'WEEK 1',
      title2:'The F2E 活動網站設計',
      img: img_week1_big,
      footer_title: '視差滾動',
      footer_subtitle: '板塊設計',
      id:1
    },
  ]
)
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
    color:$text_color;
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
    color: $text_color;
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
