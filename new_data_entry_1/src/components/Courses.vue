<template>
    <div class= "Course">
        <div class ="CourseNav">
            <p class="Heading"> Courses</p>
            <Button :text= "'+ Add Course'"/>
        </div>
        <div class="CourseTable">
            <div class ="TableHeader">
                <p class="Head1">Course Code</p>
                <p class="Head2">Course Name</p>
                <p class="Head3"></p>
            </div>
            <div class ="TableContent">
                <CourseTab 
                    :key= "Course.id" 
                    v-for= "Course in CourseData"
                    :DData="Course"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import CourseTab from "@/components/CourseTab.vue"
    import Button from "@/components/Button.vue"
    export default{
        components: {
            CourseTab, 
            Button,
        },
        setup(){

            const CourseData = [
             {
                Name: "MT2008", 
                Head:"Kashif Munir",
             },
             {
                Name: "MW8005", 
                Head:"Fahad Shehzad",
             },
             {
                Name: "CS3004", 
                Head:"Mohammad Ali",
             },
             {
                Name: "CS3004", 
                Head:"Fahad Shehzad",
             },
             {
                Name: "CS3004", 
                Head:"Naveed Ahmed",
             }, 
             {
                Name: "CS3004", 
                Head:"Farwa Batool",
             }, 
            ]
            return {CourseData}
        }
    }

</script>

<style scoped>
p{
    margin: 0;
}
.Course{
    width: 100%; 
    height: 100%;
    background:  #FAFAFA;
    /* border: 2px solid red; */
    margin: 0;
}
.CourseNav{
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
/* The color used in Course Table can be subjected to change */
.CourseTable{
    width: 90%; 
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
    width: 15%; 
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
    width: 70%; 
    height: 70%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding-top: 10px; 
    padding-left: 5px;
    color: #56595D;
    /* border: 1px dotted purple;  */
}
.Head3{
    width: 15%; 
    height: 100%; 
    /* border: 1px dotted paleturquoise; */
}
/* The color used in Table Content can be subjected to change */
.TableContent{
    width: 100%; 
    height: 90%;
    /* border: 1px solid orange;  */
    background-color: #E8E8E8;
    overflow-y: scroll;
}

</style>