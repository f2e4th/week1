<template>
  <div id="Progress">
    <div class="progreassBar"></div>
    <ul>
      <li>
        <div v-for="(item, i) in card_data" :key="i" class="Progress__card">
          <div class="title">{{item.title}}</div>
          <div class="subtitle">{{item.subtitle}}</div>
          <div class="content">{{item.content}}</div>
          <div class="img">
            <img :src="img_list[i+1]" alt="img">
          </div>
        </div>
      </li>
      <!-- <li>
        <div class="Progress__card">
          <div class="title">SIGN UP!</div>
          <div class="subtitle">開放報名</div>
          <div class="content">10/13(四)早上 11:00 -11/6(日)晚上23:59</div>
        </div>
      </li> -->
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
export default {
  setup(){
    const card_data = reactive([
      {
        title: "SIGN UP!",
        subtitle: '開放報名',
        content: "10/13(四)早上 11:00 -11/6(日)晚上23:59",
        img: 'progress_1.png'
      },
      {
        title: "START!",
        subtitle: '各組別開賽',
        content: "UI組、團體組開賽 10/31、前端組開賽 11/7",
        img: 'progress_2.png'
      },
      {
        title: "UPLOAD!",
        subtitle: '登陸作品',
        content: "10/31(一)早上 11:00 -11/28(日)中午12:00",
        img: 'progress_3.png'
      },
      {
        title: "STREAM!",
        subtitle: '線上直播',
        content: "11/3 - 11/24(每周四)",
        img: 'progress_4.png'
      }
    ])
    const img_list = reactive([progress_1, progress_2, progress_3, progress_4])

    return {card_data, img_list}
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/all.scss';
#Progress {
  @apply py-10;
  background-color: #061C31;
  height: 1024px;
}
.Progress__card {
  .img {
    width: 200px;
    height: 200px;
    img {
      @apply w-full h-full;
    }
  }
}

</style>