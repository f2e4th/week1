<template>
  <div>
    <!-- <h1 class="title">This is Homepage.</h1> -->
  </div>
  <!-- <askQuestion></askQuestion> -->
  <sponsor/>
</template>

<style scoped lang="scss">
.title { 
  color: red;
}
</style>
<script>
import askQuestion from '../components/askQuestion.vue'
import sponsor from '../components/sponsor.vue'
export default{
  setup() {
    
  },
  components: {
    askQuestion,
    sponsor
  }
}
</script>

