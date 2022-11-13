<template>
    <div id='sponsor_wrapper'>
        <div class="sponsor_">
            <h1 class="text">贊助單位</h1>
            <div class="sponsor_img">
                <img src="../assets/images/sponsor/sponsor1.png" alt="">
                <img src="../assets/images/sponsor/sponsor2.png" alt="">
                <img src="../assets/images/sponsor/sponsor3.png" alt="">
            </div>
        </div>
        <div class='ppl_comimg'>
            <h1 class="text">各界大神接力分享</h1>
            <div class="ppl_img">
                <div class="ppl_img_1">
                    <div class="ppl">
                        <img src="../assets/images/sponsor/god1.png" alt="">
                        <p>網站的動態趨勢<br>11/3(四) 20:00~21:30</p>
                    </div>

                    <div class="ppl">
                        <img src="../assets/images/sponsor/god2.png" alt="">
                        <p>jQuery也可以做到的互動效果<br>11/3(四) 20:00~21:30</p>
                    </div>
                </div>

                <div class="ppl_img_2">
                    <div class="ppl">
                        <img src="../assets/images/sponsor/god3.png" alt="">
                        <p>做事不能拖拖拉拉<br>但網頁可以：draggable.js介紹<br>11/17(四) 20:00~21:30</p>
                    </div>

                    <div class="ppl">
                        <img src="../assets/images/sponsor/god4.png" alt="">
                        <p>互動式網頁設計工程師<br>該具備哪些技能？<br>11/24(四) 20:00~21:30</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger'
import { onMounted } from '@vue/runtime-core';

export default {
    setup(){
        onMounted(()=>{
            
        })
    },
}



</script>

<style lang="scss" scoped>
    #sponsor_wrapper{
        background-color: #061C31;
        .text{
            color: white;
            font-size: 40px;
        }
    }
    .sponsor_{
        h1{
            padding:74px 0 77px 0;
        }
    }
    .sponsor_img{
        @apply flex justify-around;
    }

    .ppl_comimg{
        padding: 189px 0 77px 0;
        p{
            color: white;
            font-size: 30px;
            line-height: 1.6;
        }
    }

    .ppl_img_1 ,.ppl_img_2{
        @apply flex justify-center;
        .ppl{
            width:48%
        }
    }

    .ppl img{
        @apply pb-8 ;
        margin: 0 auto;
    }

</style>