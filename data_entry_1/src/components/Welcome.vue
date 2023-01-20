<template>
    <div class = "Welcome">
        <div class = "WelcomeText">
            <p class= "TextPart1">Welcome </p>
            <div class = "TextSpace">
            </div>
            <p class= "TextPart2"> Amir,</p>
        </div>

    </div>
    
</template>

<script>
</script>

<style>
.Welcome{
  width: 100%; 
  height: 100%;
  /* border: 3px solid red; */
}
.TextPart1{
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    margin: 0;
}
.TextPart2{
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    margin: 0;
}
.TextSpace{
    width: 20px; 
    height: 40px;
}
.WelcomeText{
    width: 400px; 
    height: 40px;
    /* border: 2px solid blue; */
    margin-top: 20px;
    margin-left: 30px;
    display: flex; 
}
</style>