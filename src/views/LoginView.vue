<template>
    <NavBar/>
    <main class="hauptsite2">
        <div class="redbar">
            <h1 class="redbar-text">ACCOUNT</h1>
        </div>
        <div class="box">
            <div class="content-container-account">

            <div class="sign-in-section">

                <h2>SIGN IN WITH YOUR ACCOUNT</h2>

                <form method="post" action='#'>
                    <fieldset class="container">
                        <label for="email" class="email-label"><b>Login </b><input id="email" name="email" type="email"
                                                               placeholder="Enter Email" required/></label>

                        <label for="new-password" class="new-password-label"><b>Password </b><input id="password" name="password" type="password"
                                                                         pattern="[a-z0-5]{8,}"
                                                                         placeholder="Enter Password" required/></label>


                        <div class="extra-container">
                            <div class="remember-container">
    <label class="switch">
        <input type="checkbox" v-model="rememberMe">
        <span class="slider round"></span>
    </label>
    Remember me
</div>

                            <div class="password">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" class="sign-in">Sign In</button>
                        <div class="line-login"></div>



                    </fieldset>
                </form>
            </div>
            <div class="google-apple">
                <button class="google">Continue with Google</button>
                <button class="apple">Continue with Apple</button>
                <div class="NoAccount">
                <p>Don't have an account?</p>
                    <a href="/register" >Sign up now</a>
                </div>
            </div>
            </div>
        </div>
        <div class="backgroundicons-login">
        <img src="@/assets/BakedIcon.svg" alt="Baked Icon" class="baked-icon-login"/>
        <img src="@/assets/BurgerIcon.svg" alt="Burger Icon" class="burger-icon-login"/>
    </div>
    </main>
    <FooterComponent/>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "LoginView",
    components: {FooterComponent, NavBar},
    data() {
        return {
            rememberMe: true
        };
    }
}
</script>

<style>

.remember-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.backgroundicons-login {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    max-width: 100%;
    top: 350px;
}

.baked-icon-login, .burger-icon-login {
    z-index: 1;
    overflow: hidden;
}

.baked-icon-login {
    rotate: -120deg;
    height: auto;
    width: 557px;
    margin-left: -15vw;
    margin-top: 250px;
}

.burger-icon-login {
    rotate: -17deg;
    height: auto;
    width: 444px;
    margin-left: 70vw;
    margin-top: -430px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;
  margin-right: 10px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


.hauptsite2 {
    margin-top: 64px; /*Damit der Banner unter der Navbar ist*/
    height: 850px;
}

.redbar {
    background-color: #EC4040;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.redbar-text {
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0;
}

.container {
    display: flex;
    flex-direction: column;
    max-width: 622px;
    padding: 0;
}

.content-container-account {
    z-index: 2;
    position: relative;
}

#password {
    background-image: url('@/assets/EyeIcon.svg'); /* path to your custom arrow icon */
    background-repeat: no-repeat;
    background-position: right 20px center; /* adjust as necessary */
    background-size: 18px;
}

.sign-in-section h2 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    padding-top: 100px;
    padding-bottom: 10px;
}

.email-label b,
.new-password-label b {
    font-size: 10px;
    font-weight: normal;
    color: #333333;
    margin-left: 10px;
}

input[type=email], input[type=password] {
    width: 100%;
    height: 48px;
    padding: 12px 14px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    font-size: 15px;
    color: #808080;
    background-color: #f2f2f2;
}

.sign-in {
    background-color: #EC4040;
    color: white;
    margin-top: 40px;
    margin-left: 0 !important;
    margin-right: 0 !important;
    border: none;
    cursor: pointer;
    height: 54px;
    border-radius: 10px;
    box-shadow: 2px 6px 4px rgba(0, 0, 0, 0.15);
    font-size: 20px;
    font-weight: bold;

}

.sign-in:hover {
    opacity: 1.8;
    transition: 0.3s;
}

.password a{
    text-decoration: none;
}

.extra-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
}

.line-login {
    background-color: #e5e5e5;
    height: 1px;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 30px;
}

.google-apple {
    max-width: 622px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Horizontale Ausrichtung zentrieren */
    justify-content: center; /* Vertikale Ausrichtung zentrieren */
    margin: 0 auto; /* Horizontale Zentrierung im Elterncontainer */
}

.google,
.apple {
    width: 100%;
    height: 54px;
    padding: 12px 14px;
    margin: 10px 0;
    border-radius: 10%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-size: 20px;
}

.google {
    color: #808080;
    background-color: white;
    cursor: pointer;

    background-image: url('@/assets/GoogleLogo.png'); /* path to your custom arrow icon */
    background-repeat: no-repeat;
    background-position: left 160px center; /* adjust as necessary */
    background-size: 24px;
}

.google:hover {
    background-color: #eeeeee;
    transition: 0.3s;

}

.apple {
    color: white;
    background-color: black;
    border: none;
    cursor: pointer;

    background-image: url('@/assets/AppleIcon.png'); /* path to your custom arrow icon */
    background-repeat: no-repeat;
    background-position: left 160px center; /* adjust as necessary */
    background-size: 24px;

}

.apple:hover {
    background-color: #2f2f2f;
    transition: 0.3s;


}

.NoAccount {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    font-size: 14px;
}

.NoAccount a {
    text-decoration: none;
}


@media (max-width: 570px) {
    .NoAccount {
        justify-content: space-between;
    }

}

p {
    margin-bottom: 0;
    padding-right: 30px;
}

</style>