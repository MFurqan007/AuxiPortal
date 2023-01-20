<template>
    <div class="DepartmentTab">
        <p class= "Head1">{{DData.Name}}</p>
        <p class= "Head2">{{DData.Head}}</p>
        <div class="TabActions">
            <p class= "ActionDelete">Delete</p>
            <p class= "ActionEdit">Edit</p>
        </div>
    </div> 

</template>
<script>

export default{
    props:{
        DData: Object, 
    }
}
</script>
<style scoped>
p{
    margin: 0;
}
.DepartmentTab{
    width: 99.9%; 
    height: 20%; 
    /* border: 1px dotted green; */
    background-color: #FFFFFF;
    margin-top: 1px;
    display: flex;
}
.Head1{
    width: 15%; 
    height: 65%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    padding-top: 22px; 
    padding-left: 13px;
    color: #56595D;
    /* border: 1px dotted red;  */
}
.Head2{
    width: 70%; 
    height: 65%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    padding-top: 22px; 
    padding-left: 10px;
    color: #56595D;
    /* border: 1px dotted red;   */
} 
.TabActions{
    width: 15%; 
    height: 100%; 
    /* border: 1px dotted purple;  */
    display: flex;
    justify-content: space-evenly;
}
.ActionDelete{
    margin-top:20px;
    width: 45px; 
    height: 20px;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color:#F00505;
}
.ActionDelete:hover{
    margin-top:20px;
    width: 45px; 
    height: 20px;
    border: 1px solid #F00505;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color:#F00505;
    cursor: pointer;
}
.ActionEdit{
    margin-top:20px;
    width: 28px; 
    height: 20px;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color:#0571F0;
}
.ActionEdit:hover{
    margin-top:20px;
    width: 28px; 
    height: 20px;
    border: 1px solid #0571F0;
    border-radius: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color:#0571F0;
    cursor: pointer;
}
</style>