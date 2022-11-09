<template>
    <div class="container_break w-full flex justify-center items-center">
        <!-- <p class=" via-white text-7xl">test</p> -->
        <img src="../assets/images/ellipse.png"/>
        <img class="absolute treasure" src="../assets/images/treasure_close.png"/>
    </div>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

export default {
    data() {},
    mounted(){
        gsap.registerPlugin(ScrollTrigger, TextPlugin);
    }
}
</script>
