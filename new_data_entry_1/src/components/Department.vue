<template>
    <div class= "Department">
        <div class ="DepartmentNav">
            <p class="Heading"> Departments</p>
            <Button :text= "'+ Add Department'"/>
        </div>
        <div class="DepartmentTable">
            <div class ="TableHeader">
                <p class="Head1">Name</p>
                <p class="Head2">Department Head</p>
                <p class="Head3"></p>
            </div>
            <div class ="TableContent">
                <DepartmentTab 
                    :key= "Department.id" 
                    v-for= "Department in DepartmentData"
                    :DData="Department"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import DepartmentTab from "@/components/DepartmentTab.vue"
    import Button from "@/components/Button.vue"
    export default{
        components: {
            DepartmentTab, 
            Button,
        },
        setup(){

            const DepartmentData = [
             {
                Name: "Computer Science", 
                Head:"Kashif Munir",
             },
            //  {
            //     Name: "School of Management", 
            //     Head:"Fahad Shehzad",
            //  },
            //  {
            //     Name: "Electrical Engineering", 
            //     Head:"Mohammad Ali",
            //  },
            //  {
            //     Name: "Humanities", 
            //     Head:"Fahad Shehzad",
            //  },
            //  {
            //     Name: "Software Engineering", 
            //     Head:"Naveed Ahmed",
            //  }, 
            //  {
            //     Name: "Aritficial Intelligence", 
            //     Head:"Farwa Batool",
            //  }, 
            ]
            return {DepartmentData}
        }
    }

</script>

<style scoped>
p{
    margin: 0;
}
.Department{
    width: 100%; 
    height: 100%;
    background:  #FAFAFA;
    /* border: 2px solid red; */
    margin: 0;
}
.DepartmentNav{
    width: 90%; 
    height: 10%; 
    /* border: 1px solid black; */
    margin-top: 1.5%;
    margin-left: 2.5%; 
    display: flex; 
    justify-content: space-between;
}
.Heading{
    margin: 0; 
    margin-top: 1.25%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
}
/* The color used in Department Table can be subjected to change */
.DepartmentTable{
    width: 60%; 
    height: 60%;
    border: 1px solid #E8E8E8; 
    margin-left: 2.5%;
    margin-top: 1%;
    background-color:#E8E8E8;
}
.TableHeader{
    width: 100%; 
    height: 10%; 
    /* border: 1px dotted red;  */
    background-color:#F9F9F9;
    display: flex; 
}
.Head1{
    width: 40%; 
    height: 70%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding-top: 10px; 
    padding-left: 15px;
    color: #56595D;
    /* border: 1px dotted red;  */
}
.Head2{
    width: 40%; 
    height: 70%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding-top: 10px; 
    color: #56595D;
    /* border: 1px dotted red;  */
}
.Head3{
    width: 20%; 
    height: 100%; 
    /* border: 1px dotted purple; */
}
/* The color used in Table Content can be subjected to change */
.TableContent{
    width: 100%; 
    height: 90%;
    /* border: 1px solid orange;  */
    background-color: #E8E8E8;
    overflow-y:scroll;

}



</style>