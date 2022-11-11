<template>
  <div id="Progress">
    <div class="progreassBar">
      <div class="timeline" :style="`height:${(card_data.length-1)*200}px`">
        <div v-for="(item, i) in card_data" :key="i" class="circle circle--top" :style="`top:${i*200}px`"></div>
        <!-- <div class="circle circle--bottom"></div> -->
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
    width: 20px;
  }
  .timeline{
    @apply rounded-md relative;
    width: 8px;
    height: 500px;
    background: #102F4D;
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

</style>