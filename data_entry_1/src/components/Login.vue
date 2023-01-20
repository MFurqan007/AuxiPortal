<template>
    <div class = "LoginPage">
     <div class = "LoginBox">
        <div class ="Static">
          <img src="@/assets/AuxiLogo.svg" alt= "Logo" class = "Logo"/>
          <p class = "Title">Auxi - Admin Portal</p>
          <div class= "Phone">
            <img src= "@/assets/Phone.svg" alt= "Phone Logo" class="PhoneLogo"/>
            <p class="PhoneText">111-128-128</p>
          </div>
          <div class= "Email">
            <img src= "@/assets/Email.svg" alt= "Email Logo" class="EmailLogo"/>
            <p class="EmailText">onestop.isb@nu.edu.pk</p>
          </div>
        </div>

        <div class ="LoginForm">
          <p class= "LoginTitle">Welcome Back!</p>
          <p class= "LoginSubTitle">We're happy to see you. Please sign in to continue.</p>
          <form>
            <!-- Add Additional CSS for Error Messg -->
            <!-- Write an onSubmit Function -->
            <input type= "text" v-model= "Email" name= "text" placeholder="Email" class="FormEmail"/>
            <input type= "password" v-model= "Password" name= "password" placeholder="Password" class="FormPassword"/>
            <input type="submit" value="Login" class="FormButton"/>
          </form>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style scoped>
body{
  margin: 0; 
  background-image: url("@/assets/Background.svg");
  font-family: 'Ubuntu';
}
.LoginPage{
  display: flex;
  align-items: center;
  justify-content: center;
}
.LoginBox{
  width: 1000px; 
  height: 500px;
  /* background-color: black; */
  margin-top:50px;
  box-shadow: 2px 0px 40px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 20px 20px;
  display: flex;
}
.LoginForm{
  width: 500px; 
  height: 500px; 
  background-color:#FFFFFF;
  border-radius: 0px 20px 20px 0px;
}
.LoginTitle{
  margin: 0px;
  margin-top: 100px;
  margin-left: 80px;
  width: 250px; 
  height: 40px;
  /* border: 2px solid black; */
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
}
.LoginSubTitle{
  margin: 0px;
  margin-left: 80px;
  width: 375px; 
  height: 20px;
  /* border: 2px solid green; */
  color: #C4C4C4;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
}
.FormEmail{
  margin-left: 80px; 
  margin-top: 40px;
  width: 300px; 
  height: 40px;
  background-color:  #F3F3F3;
  border-radius: 10px;
  border: none;
  outline: none;
}
.FormEmail:focus{
  outline: 2px solid #0571F0;
}
.FormEmail::placeholder{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: black;
  padding-left: 20px;
}
.FormPassword{
  margin-left: 80px; 
  margin-top: 10px;
  width: 300px; 
  height: 40px;
  background-color:  #F3F3F3;
  border-radius: 10px;
  border: none;
  outline: none;
}
.FormPassword:focus{
  outline: 2px solid #0571F0;
}
.FormPassword::placeholder{
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: black;
  padding-left: 20px;
}
.FormButton{
  margin-left: 80px; 
  margin-top: 50px;
  width: 305px; 
  height: 40px;
  background-color:  #0571F0;
  border-radius: 10px;
  border: none;
  outline: none;
  /* button text styling */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
}
.FormButton:hover{
  margin-left: 80px; 
  margin-top: 50px;
  width: 305px; 
  height: 40px;
  background-color:  white;
  border: 2px solid  #0571F0;
  border-radius: 10px;
  cursor: pointer;
  /* button text styling */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #0571F0;
}

.Static{
  width: 500px; 
  height: 500px; 
  background-color:#0571F0;
  border-radius: 20px 0px 0px 20px;
}
.Logo{
  width: 110px;
  height: 110px;
  /* border: 2px solid black; */
  margin-left: 200px;
  margin-top: 80px;
}
.Title{
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  /* border: 2px solid black;  */
}
.Phone{
  /* border: 2px solid black; */
  height: 30px; 
  width: 300px;
  margin-left: 100px;
  display: flex;
}
.PhoneLogo{
  width: 30px;
  height: 25px;
  /* border: 2px solid blueviolet; */
}
.PhoneText{
  margin: 0px;
  /* border: 2px solid yellow; */
  height: 25px;
  width: 270px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  padding-left: 20px;
}
.Email{
  /* border: 2px solid black; */
  height: 30px; 
  width: 300px;
  margin-top: 15px;
  margin-left: 100px;
  display: flex;
} 
.EmailLogo{
  width: 30px;
  height: 25px;
  /* border: 2px solid blueviolet;    */
}
.EmailText{
  margin: 0px;
  /* border: 2px solid yellow;  */
  height: 25px;
  width: 270px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  padding-left: 20px;
}
</style>