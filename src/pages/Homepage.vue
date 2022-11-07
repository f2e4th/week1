<template>
  <div class="w-full">
    <h1 class="title">This is Homepage.</h1>
    <breakQuestion/>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: red;
}
</style>
<script>
import breakQuestion from '../components/breakQestion.vue';
export default{
  components:{
    breakQuestion
  },
  setup() {
    
  },
}
</script>

