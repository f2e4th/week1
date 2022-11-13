<template>
  <div>
    <!-- <h1 class="title">This is Homepage.</h1> -->
    <breakQuestion/>
    <awardDesign/>
    <awardOther/>
    <questionSection/>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: red;
}
</style>
<script>
import breakQuestion from '../components/breakQestion.vue';
import awardDesign from '../components/awardDesign.vue';
import awardOther from '../components/awardOther.vue';
import questionSection from '../components/questionSection.vue'
import QuestionSection from '../components/questionSection.vue';

export default{
  components:{
    breakQuestion,
    awardDesign,
    awardOther,
    QuestionSection
  },
  setup() {
    
  },
}
</script>

