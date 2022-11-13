<template>
  <div>
    <Banner/>
    <breakQuestion/>
    <Subjects/>
    <Progress/>
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
import Banner from '../components/Banner.vue';
import Subjects from '../components/Subjects.vue'
import Progress from '../components/Progress.vue';
import breakQuestion from '../components/breakQestion.vue';
import awardDesign from '../components/awardDesign.vue';
import awardOther from '../components/awardOther.vue';
import questionSection from '../components/questionSection.vue'

export default{
  setup() {
    
  },
  components: {
    Banner,
    Subjects,
    Progress,
    breakQuestion,
    awardDesign,
    awardOther,
    questionSection
  }
}
</script>
