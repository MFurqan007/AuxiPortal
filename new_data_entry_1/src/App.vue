<template>
  <div class ="MainPage">
    <div class ="SidebarPage">
      <Sidebar/>
    </div>

    <div class = "NotSidebar">
        <div class = "Navigation">
          <Navigation/>
        </div>
        <div class = "ComponentsPart">
          <!-- <Department/> -->
          <AddDepartment/>
          <!-- <Courses/> -->
          <!-- <AddCourse/> -->
          <!-- <Timetable/> -->
        </div>
    </div>

  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navigation from '@/components/Navigation.vue'
import Department from '@/components/Department.vue'
import AddDepartment from '@/components/AddDepartment.vue'
import Courses from '@/components/Courses.vue'
import AddCourse from '@/components/AddCourse.vue'
import Timetable from '@/components/Timetable.vue'
// 1: make dashboard outline 
// 2: design the sidebar and navbar
// 3: create and initialise the pinia store
// 4: make dashboard of department and courses
export default {
  name: 'App',
  components:{
    Sidebar, 
    Navigation,
    Department,
    AddDepartment,
    Courses,
    AddCourse, 
    Timetable,
  } 
}
</script>

<style>

body{
  margin: 0;
  overflow-x: clip;
  overflow-y: clip;
}
.MainPage{
  /* border: 2px solid purple; */
  width: 220vh;
  height: 100vh;
  display: flex; 
}
.SidebarPage{
  width: 20%;
  height: 100%;
  /* border: 2px solid yellow;  */
}
.NotSidebar{
  width: 80%; 
  height: 100%;
  /* border: 2px solid green;  */
} 
.Navigation{
  width: 100%; 
  height: 10%;
  /* border: 2px solid blue;  */
}
.ComponentsPart{
  width: 100%; 
  height: 90%;
  background: #FAFAFA;
  /* border: 2px solid brown; */
} 
</style>
