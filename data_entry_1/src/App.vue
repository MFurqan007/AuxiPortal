<template>
  <div class = "MainPage">
    <div class = "SidebarPage">
      <Sidebar/>
    </div>
    <div class = "ComponentPage">
      <Welcome/>
    </div>
  </div>

</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Welcome,
  }, 

} 

</script>

<style>
body{
  margin: 0;
  overflow-x: clip;
  overflow-y: clip;
}
.MainPage{
  width: 220vh;
  height: 100vh;
  /* border: 2px solid black; */
  display: flex;

}
.SidebarPage{
  width: 20%;
  height: 100%;
  /* border: 2px solid red; */
}
.ComponentPage{
  width: 80%; 
  height: 100%;
  /* border: 2px solid green; */
}
</style>
