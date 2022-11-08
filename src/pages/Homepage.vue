<template>
  <div>
    <Banner/>
    <Subjects/>
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

export default{
  setup() {
    
  },
  components: {
    Banner,
    Subjects
  }
}
</script>
