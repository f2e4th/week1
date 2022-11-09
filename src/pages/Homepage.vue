<template>
  <div>
    <!-- <h1 class="title">This is Homepage.</h1> -->
    <breakQuestion/>
    <awardDesign/>
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
export default{
  components:{
    breakQuestion,
    awardDesign
  },
  setup() {
    
  },
}
</script>

