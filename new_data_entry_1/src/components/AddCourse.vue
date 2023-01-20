<template>
    <div class= "Course">
        <div class ="AddCourseNav">
            <BackButton />
            <p class="Heading"> Add Course</p>
        </div>
        <div class ="AddCourseComponent">
            <div class ="FirstRow"> 
                <div class= "InputTab">
                    <!-- <p>Error Message</p> -->
                    <!-- Display the error message here according to the input validation -->
                    <!-- Use blog rocket site for applying watchers -->

                    <input type="text" v-model= "CourseCode" name ="CCode" placeholder="Course Code" class ="InputField"/>
                </div>
                <div class= "InputTab">
                    <!-- <p>Error Message</p> -->
                    <!-- Display the error message here according to the input validation -->
                    <!-- Use blog rocket site for applying watchers -->

                    <input type="text" v-model= "CourseCode" name ="CCode" placeholder="Course Name" class ="InputField"/>
                </div>
            </div>
            <Button :text= "'Add Course'"/>
        </div>
    </div>
</template>

<script>
    import Button from "@/components/Button.vue"
    import BackButton from "@/components/ArrowButton.vue"
    // Make the onclick button functions
    // Use blog rocket watchers function for form input validation
    export default{
        components: {
            BackButton,
            Button,
        },
        setup(){


        }
    }

</script>

<style scoped>
/* Make classes regarding the error messages on the input fields */
p{
    margin: 0;
}
.Course{
    width: 100%; 
    height: 100%;
    background:  #FAFAFA;
    border: 2px solid red;
    margin: 0;
}
.AddCourseNav{
    width: 90%; 
    height: 10%; 
    /* border: 1px solid black; */
    margin-top: 1.5%;
    margin-left: 2.5%; 
    display: flex; 
}
.Heading{
    margin: 0; 
    margin-top: 1.25%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 27px;
    /* border: 1px dotted green; */
}
.AddCourseComponent{
    width: 60%; 
    height: 40%; 
    /* border: 1px solid black; */
    margin-top: 1.5%;
    margin-left: 2.5%; 
}
.FirstRow{
    /* border: 1px dotted red; */
    display: flex;
    justify-content: space-between;
}
.SecondRow{
    margin-top: 5px;
    /* border: 1px dotted orange; */
}
.InputTab{
    width: 310px; 
    height: 70px; 
    /* border: 1px dotted green; */
}
.InputField{
    width: 300px;
    height: 40px;
    background: #EFEFEF;
    border: 1px solid #E3E3E3;
    border-radius: 8px;
    

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #919396;
}
input.InputField:focus{
    outline: none;
    border: 1px solid #E3E3E3;
}
/* display: flex;
flex-direction: row;
align-items: center;
padding: 10px 14px;
gap: 8px;

width: 360px;
height: 44px;


background: #EFEFEF;

border: 1px solid #E3E3E3;
border-radius: 8px; 
*/
</style>