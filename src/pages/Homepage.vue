<template>
  <div>
    <!-- <h1 class="title">This is Homepage.</h1> -->
    <breakQuestion/>
    <awardDesign/>
    <awardOther/>
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
import AwardOther from '../components/awardOther.vue';

export default{
  components:{
    breakQuestion,
    awardDesign,
    AwardOther
  },
  setup() {
    
  },
}
</script>

