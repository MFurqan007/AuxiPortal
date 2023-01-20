<template>
    <div class="BackButton">
        <img src="../assets/Arrow.svg" alt= "Back" class = "BtnLogo"/>
    </div>
</template>
<script>
export default{

}

</script>

<style scoped>
.BackButton{
    width: 40px; 
    height: 36px;
    margin-top: 12px;
    /* border: 1px dotted black; */
}
.BackButton:hover{
    width: 40px; 
    height: 36px;
    margin-top: 12px;
    cursor: pointer;
}
.BackButton:hover .BtnLogo{
    filter: invert(33%) sepia(63%) saturate(5434%) hue-rotate(203deg) brightness(98%) contrast(96%);
}
.BtnLogo{
    /* border: 1px solid red; */
    margin-top: 6px;
}

</style>