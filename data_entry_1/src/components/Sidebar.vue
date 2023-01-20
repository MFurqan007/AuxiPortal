<template>
    <div class= "sidebar">
        <div class ="StaticHeader">
            <img src="../assets/AuxiLogo.svg" alt= "Logo" class = "Logo"/>
            <p class="Text">Auxi Admin</p>
        </div>
        <div class ="TabComponent">
            <!-- Use conditional statements based on onclick funcionality to switch between css -->
            <div class="DashboardSelected" >
                <img src="../assets/Dashboard.svg" alt ="Tab" class= "DashboardLogoSelected"/>
                <p class="DashboardTextSelected">Dashboard</p>
            </div>
            <div class="Courses" >
                <img src="../assets/Courses.svg" alt ="Tab" class= "CoursesLogo"/>
                <p class="CoursesText">Courses</p>
            </div>
        </div>
        <div class ="UserTab">
            <img src="../assets/UserPic.svg" alt= "Logo" class = "UserLogo"/>
            <div class="UserTabText">
                <p class = "UserTabTextMain">Amir Rehman</p>
                <p class = "UserTabTextSub">CS Academic Officer</p>
            </div>
            <button class="LogoutBtn"><img src="../assets/Logout.svg" alt= "Logo" class = "LogoutLogo"/></button>
        </div>

    </div>
</template>

<script>

export default {

}
</script>

<style scoped>

.sidebar{
    margin: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.25);
    /* border: 2px solid black;  */
}
.StaticHeader{
    width: 100%;
    height: 15%; 
    /* border: 2px solid red; */
    background-color: #0571F0;
    display: flex;
}
.Logo{
    width: 55px; 
    height: 55px;
    margin: 20px 10px;
}
.Text{
    margin: 0;
    margin-top: 25px;
    font-family: Ubuntu; 
    font-weight: 400; 
    font-style: normal; 
    font-size: 37px;
    color: #FFFF;
}
.TabComponent{
    width: 100%; 
    height: 70%;
    /* border: 2px solid green; */
}
.Dashboard{
    width: 100%; 
    height:12.5%; 
    /* border: 2px solid red; */
    display: flex;
}
.Dashboard:hover {
    width: 100%; 
    height:12.5%; 
    display: flex;
    background-color:#E5E4E2;
    cursor: pointer;
}
.DashboardSelected{
    width: 100%; 
    height:12.5%; 
    /* border: 2px solid red; */
    display: flex;
    border-bottom: 2px solid #0571F0;
}
.DashboardLogo{
    width: 30px; 
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    /* filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%); */
}
.DashboardLogoSelected{
    width: 30px; 
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    filter: invert(29%) sepia(100%) saturate(4247%) hue-rotate(203deg) brightness(102%) contrast(96%);
}
.DashboardText{
    margin: 0;
    margin-top: 15px;
    margin-left: 25px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
}
.DashboardTextSelected{
    margin: 0;
    margin-top: 15px;
    margin-left: 25px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color:#0571F0;
}

.Courses{
    width: 100%; 
    height:12.5%; 
    /* border: 2px solid red; */
    display: flex;
}
.Courses:hover {
    width: 100%; 
    height:12.5%; 
    display: flex;
    background-color:#E5E4E2;
    cursor: pointer;
}
.CoursesSelected{
    width: 100%; 
    height:12.5%; 
    /* border: 2px solid red; */
    display: flex;
    border-bottom: 2px solid #0571F0;
}
.CoursesLogo{
    width: 30px; 
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    /* filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%); */
}
.CoursesLogoSelected{
    width: 30px; 
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
    filter: invert(29%) sepia(100%) saturate(4247%) hue-rotate(203deg) brightness(102%) contrast(96%);
}
.CoursesText{
    margin: 0;
    margin-top: 15px;
    margin-left: 25px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
}
.CoursesTextSelected{
    margin: 0;
    margin-top: 15px;
    margin-left: 25px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color:#0571F0;
}
.UserTab{
    width: 100%; 
    height: 15%; 
    display: flex;
    background-color: #D8D8D8;
    /* border: 2px solid blue; */
}
.UserLogo{
    margin-left: 5px;
    width: 20%; 
    height: 100%;
}
.UserTabText{
    width: 60%; 
    height: 100%;
    /* border-right: 2px solid black;
    border-left: 2px solid black; */
    
}
.UserTabTextMain{
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    margin-left: 10px;
    margin-top: 20px;
}
.UserTabTextSub{
    margin: 0;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    margin-left: 7.5px;
    margin-top: 5px;
    color: grey;
}
.LogoutBtn{
    width: 20%;
    height: 100%;
    border: none;
    background-color: #D8D8D8;
}
.LogoutLogo{
    width: 30px;
}
.LogoutLogo:hover{
    width: 30px;
    filter: invert(29%) sepia(100%) saturate(4247%) hue-rotate(203deg) brightness(102%) contrast(96%);
}
</style>


