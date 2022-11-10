<template>
  <div>
    <Banner/>
    <Progress/>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: red;
}
</style>
<script>
import Banner from '../components/Banner.vue';
import Progress from '../components/Progress.vue';
export default{
  setup() {
    
  },
  components: {
    Banner,
    Progress
  }
}
</script>
