<template>
    <div class ="Sidebar">
        <div class ="StaticHeader">
            <img src="../assets/AuxiLogoW.svg" alt= "Logo" class = "Logo"/>
            <p class="Text">Auxi Admin Portal</p>
        </div>
        <div class ="CompNav">
            <div class ="CSelectedTab">
                <img src="../assets/home.svg" alt= "Dashboard" class = "SelectedTabLogo"/>
                <p class="SelectedTabText">Dashboard</p>
            </div>

            <div class ="CTab">
                <img src="../assets/users.svg" alt= "Users" class = "TabLogo"/>
                <p class="TabText">Users</p>
            </div>

            <div class ="CTab">
                <img src="../assets/3-layers.svg" alt= "Departments" class = "TabLogo" />
                <p class="TabText">Departments</p>
            </div>

            <div class ="CTab">
                <img src="../assets/book.svg" alt= "Courses" class = "TabLogo"/>
                <p class="TabText">Courses</p>
            </div>

            <div class ="CTab">
                <img src="../assets/clipboard.svg" alt= "Timetable" class = "TabLogo"/>
                <p class="TabText">Timetable</p>
            </div>

            <div class ="CTab">
                <img src="../assets/calendar.svg" alt= "Events" class = "TabLogo"/>
                <p class="TabText">Events</p>
            </div>

            <div class ="CTab">
                <img src="../assets/flag.svg" alt= "Feedback" class = "TabLogo"/>
                <p class="TabText">Feedback</p>
            </div>
            
            <div class ="CTab">
                <img src="../assets/user.svg" alt= "Account Management" class = "TabLogo"/>
                <p class="TabText">Account Management</p>
            </div>
        </div>
        <div class ="Footer">
            <div class ="Tab">
                <img src="../assets/settings.svg" alt= "Settings" class = "TabLogo"/>
                <p class="TabText">Settings</p>
            </div>
            <div class ="Tab">
                <img src="../assets/log-out.svg" alt= "Logout" class = "TabLogo"/>
                <p class="TabText">Logout</p>
            </div>

        </div>
    </div>    
</template>

<script>
    export default{

    }
</script>

<style scoped>
:root{
    --textblue:#489CFF;
    --backgroundblue: #87bcf5;
    --textgrey: #919396;
}
.Sidebar{
    margin: 0;
    width: 100%;
    height: 100%;
    /* border: 2px solid blue;  */
}
.StaticHeader{
    width: 100%;
    height: 10%; 
    /* border: 2px solid red; */
    /* background-color: #0571F0; */
    display: flex;
}

.Logo{
    /* border: 1px solid black; */
    width: 30%;
    height: 100%;
}
.Text{
    margin: 0;
    width: 70%; 
    height: 100%;
    margin-top: 20px;
    font-family: Ubuntu; 
    font-weight: 700; 
    font-style: normal; 
    font-size: 20px;
}
.CompNav{
    width: 100%; 
    height: 75%;
    /* border: 2px dotted green; */
}
.CTab{
    width: 90%; 
    height: 7.25%; 
    margin-left: 5%;
    margin-top: 1.5%;
    border: 2px solid white; 
    display: flex; 
    border-radius: 6px;
}
.CTab:hover{
    cursor: pointer;
}
.CTab:hover .TabLogo{
    width: 24px; 
    height: 24px;
    margin-left: 5%;
    margin-top: 2%;
    filter: invert(50%) sepia(27%) saturate(4473%) hue-rotate(198deg) brightness(109%) contrast(102%);
}
.CTab:hover .TabText{
    margin: 0;
    margin-left: 5%;
    margin-top: 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #489CFF;   
}

.CSelectedTab{
    width: 90%; 
    height: 7.25%; 
    margin-left: 5%;
    margin-top: 1%;
    border: 2px solid white; 
    display: flex; 
    border-radius: 6px;
    background-color:  #b0d1f5;    
}

.Footer{
    width: 100%; 
    height: 15%;
    /* border: 2px dotted red; */
}
.Tab{
    width: 90%; 
    height: 30%; 
    margin-left: 5%;
    margin-top: 1.5%;
    border: 2px solid white; 
    display: flex; 
    border-radius: 6px;
}
.Tab:hover{
    cursor: pointer;
}
.Tab:hover .TabLogo{
    width: 24px; 
    height: 24px;
    margin-left: 5%;
    margin-top: 2%;
    filter: invert(50%) sepia(27%) saturate(4473%) hue-rotate(198deg) brightness(109%) contrast(102%);
}
.Tab:hover .TabText{
    margin: 0;
    margin-left: 5%;
    margin-top: 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #489CFF;   
}
.TabLogo{
    width: 24px; 
    height: 24px;
    margin-left: 5%;
    margin-top: 2%;
}
.TabText{
    margin: 0;
    margin-left: 5%;
    margin-top: 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #919396;
}

.SelectedTab{
    width: 90%; 
    height: 35%; 
    margin-left: 5%;
    margin-top: 1%;
    border: 2px solid white; 
    display: flex; 
    border-radius: 6px;
    background-color:  #b0d1f5;    
}
.SelectedTabLogo{
    width: 24px; 
    height: 24px;
    margin-left: 5%;
    margin-top: 2%;
    filter: invert(50%) sepia(27%) saturate(4473%) hue-rotate(198deg) brightness(109%) contrast(102%);
}
.SelectedTabText{
    margin: 0;
    margin-left: 5%;
    margin-top: 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #489CFF;  
}

</style>