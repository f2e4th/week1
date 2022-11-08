<template>
  <div id="Subjects">
    <div class="title">
        <h1>WEEK 1</h1>
        <h2>The F2E 活動網站設計</h2>
    </div>
    <div class="img_layout">
        <div class="img_container">
            <div class="img_div">
                <img src="../assets/img/img_week3_big.png" alt="img">
            </div>
            <div class="img_div">
                <img src="../assets/img/img_week2_big.png" alt="img">
            </div>
            <div class="img_div">
                <img src="../assets/img/img_week1_big.png" alt="img">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {ref, reactive, onMounted, computed, watch} from "vue";
export default {
    setup(){
        const imgs = reactive([
            "../assets/img/img_week3_big.png",
            "../assets/img/img_week2_big.png",
            "../assets/img/img_week1_big.png"
        ])
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/scss/all.scss';
#Subjects{
    height: 1024px;
    background: $main_bg;
}
.title {
    font-weight: 500;
    font-size: 40px;
    line-height: 60px;
}
.img_layout{
    @apply flex justify-center;
}
.img_container {
    @apply relative w-full;
        width: 600px;
        height: 600px;
    img {
        
        width: 600px;
        height: 600px;
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