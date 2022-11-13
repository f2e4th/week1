<template>
  <div id="homepage">
    <!-- <Banner/> -->
    <askQuestion></askQuestion>
    <BreakSection/>
    <Subjects/>
    <Progress/>
    <AwardDesigns/>
    <AwardOthers/>
    <sponsor/>
    <QuestionSections/>
  </div>
</template>

<style scoped lang="scss">
</style>
<script>
// import Banner from '../components/Banner.vue';
import Subjects from '../components/Subjects.vue'
import Progress from '../components/Progress.vue';
import BreakSection from '../components/BreakSection.vue';
import AwardDesigns from '../components/AwardDesigns.vue';
import AwardOthers from '../components/AwardOthers.vue';
import QuestionSections from '../components/QuestionSections.vue'
import sponsor from '../components/sponsor.vue';
import askQuestion from '../components/askQuestion.vue'

export default{
  setup() {
    
  },
  components: {
    // Banner,
    Subjects,
    Progress,
    BreakSection,
    AwardDesigns,
    AwardOthers,
    QuestionSections,
    sponsor,
    askQuestion
  }
}
</script>
