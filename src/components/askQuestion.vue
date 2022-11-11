<template>
    <div class='wrapper' style='background-color: #242424;'>
        <div class="unhappyQuestion">
            <img src="../assets/images/unhappyQuestion.png" alt="">
        </div>
        <div class='unhappy'>
            <img src="../assets/images/unhappy.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .wrapper{
        position: relative;
        height: 1024px;
    }
    .unhappyQuestion{
        width: 600px;
    }

    .unhappy{
        position: absolute;
        right: 0;
        bottom:0;
        width: 600px;
    }
</style>