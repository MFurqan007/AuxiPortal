<template>
    <button class = "btn">{{text}}</button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
        },
        methods: {
        }
        
    }
</script>

<style scoped>
.btn:hover{
    width: 180px;
    height: 35px;
    margin-top: 11px;
    background-color: #FFFFFF;
    border: 2px solid #0571F0;
    border-radius: 15px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color:#0571F0;
    cursor: pointer;
}
.btn{
    width: 180px;
    height: 35px;
    margin-top: 11px;
    background-color: #0571F0;
    border: none;
    border-radius: 15px;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #FFFFFF;
}
</style>