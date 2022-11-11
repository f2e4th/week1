<template>
  <div>
    <!-- <h1 class="title">This is Homepage.</h1> -->
  </div>
  <askQuestion></askQuestion>
</template>

<style scoped lang="scss">
.title { 
  color: red;
}
</style>
<script>
import askQuestion from '../components/askQuestion.vue'
export default{
  setup() {
    
  },
  components: {
    askQuestion
  }
}
</script>

