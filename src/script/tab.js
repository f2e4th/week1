import { gsap } from "gsap";

export const tabs = () => {
const playBtn = 
document.querySelector('div.tab-section ul li.button1');
const playBtn2 = 
document.querySelector('div.tab-section ul li.button2');
const playBtn3 = 
document.querySelector('div.tab-section ul li.button3');
const playBtn4 = 
document.querySelector('div.tab-section ul li.button4');


const tl = gsap.timeline({ duration: 0.5 })
const tl2 = gsap.timeline({ duration: 0.5 })
const tl3 = gsap.timeline({ duration: 0.5 })
const tl4 = gsap.timeline({ duration: 0.5 })

tl.to('.tab_content_inner1', {background:'linear-gradient(91deg, #C04444 50%, #6B6B6B 50%)'
 }).to('.tab_content_inner1', {background:'linear-gradient(91deg, #C04444 60%, #6B6B6B 60%)'
}).to('.tab_content_inner1', {background:'#547564'})

tl2.to('.tab_content_inner2', {background:'linear-gradient(91deg, #C04444 50%, #6B6B6B 50%)'
 }).to('.tab_content_inner2', {background:'linear-gradient(91deg, #C04444 60%, #6B6B6B 60%)'
}).to('.tab_content_inner2', {background:'#547564'})

tl3.to('.tab_content_inner3', {background:'linear-gradient(91deg, #C04444 50%, #6B6B6B 50%)'
 }).to('.tab_content_inner3', {background:'linear-gradient(91deg, #C04444 60%, #6B6B6B 60%)'
}).to('.tab_content_inner3', {background:'#547564'})

tl4.to('.tab_content_inner4', {background:'linear-gradient(91deg, #C04444 50%, #6B6B6B 50%)'
 }).to('.tab_content_inner4', {background:'linear-gradient(91deg, #C04444 60%, #6B6B6B 60%)'
}).to('.tab_content_inner4', {background:'#547564'}) 

tl.reverse();
tl2.reverse();
tl3.reverse();
tl4.reverse();
playBtn.addEventListener('click', (e) => {
tl.reversed() ? tl.play() : tl.reverse();
},true);
playBtn2.addEventListener('click', () => {
tl2.reversed() ? tl2.play() : tl2.reverse()
});
playBtn3.addEventListener('click', () => {
tl3.reversed() ? tl3.play() : tl3.reverse()
});
playBtn4.addEventListener('click', () => {
tl4.reversed() ? tl4.play() : tl4.reverse()
});

}
