<template>
    <NavBar/>
    <main class="hauptsite3">
        <div class="redbar">
            <h1 class="redbar-text">ACCOUNT</h1>
        </div>
        <div class="box">
            <div class="content-container-account-reg">

                <div class="sign-up-section">

                    <h2>SIGN UP</h2>

                    <form method="post" action='#'>
                        <fieldset class="container">
                            <label for="email" class="email-label-reg"><b>Login </b><input id="email" name="email" type="email"
                                                                                       placeholder="Enter Email" required/></label>
                            <label for="new-password" class="new-password-label-reg"><b>Password </b><input id="password-reg" name="password" type="password"
                                                                                                        pattern="[a-z0-5]{8,}"
                                                                                                        placeholder="Enter Password" required/></label>
                            <label for="repeat-password" class="repeat-password-label-reg"><b>Repeat Password </b><input id="repeat-password-reg" name="repeat-password" type="password"
                                                                                                        pattern="[a-z0-5]{8,}"
                                                                                                        placeholder="Repeat Password" required/></label>


                            <div class="terms-container">
                                <p>By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>

                            </div>

                            <button type="submit" class="sign-up">Sign Up</button>
                            <div class="line-login"></div>



                        </fieldset>
                    </form>
                </div>
                <div class="google-apple">
                    <button class="google">Sign Up with Google</button>
                    <button class="apple">Sign Up with Apple</button>
                    <div class="AlrdyAccount">
                        <p>Already have an account?</p>
                        <a href="/login">Sign in now</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="backgroundicons-register">
        <img src="src/assets/BakedIcon.svg" alt="Baked Icon" class="baked-icon-register"/>
        <img src="src/assets/BurgerIcon.svg" alt="Burger Icon" class="burger-icon-register"/>
    </div>

    </main>
    <FooterComponent/>

</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "RegisterView",
    components: {FooterComponent, NavBar}
}
</script>

<style>

.backgroundicons-register {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    max-width: 100%;
    top: 350px;
}

.baked-icon-register, .burger-icon-register {
    z-index: 1;
    overflow: hidden;
}

.baked-icon-register {
    rotate: -120deg;
    height: auto;
    width: 557px;
    margin-left: -15vw;
    margin-top: 250px;
}

.burger-icon-register {
    rotate: -17deg;
    height: auto;
    width: 444px;
    margin-left: 70vw;
    margin-top: -430px;
}

#repeat-password-reg, #password-reg {
    background-image: url('src/assets/EyeIcon.svg'); /* path to your custom arrow icon */
    background-repeat: no-repeat;
    background-position: right 20px center; /* adjust as necessary */
    background-size: 18px;
}

.hauptsite3 {
    margin-top: 64px; /*Damit der Banner unter der Navbar ist*/
    height: 920px;
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

.content-container-account-reg {
    z-index: 2;
    position: relative;
}



.sign-up-section h2 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    padding-top: 100px;
    padding-bottom: 10px;
}

.email-label-reg b,
.new-password-label-reg b,
.repeat-password-label-reg b {
    font-size: 10px;
    font-weight: normal;
    color: #333333;
    margin-left: 10px;
}

input[type=email],
input[type=password] {
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

.terms-container {
    margin-top: 12px;
}

.terms-container p {
    font-size: 11px;
    text-align: center;
}

.sign-up {
    background-color: #EC4040;
    color: white;
    margin-top: 25px;
    margin-left: 0 !important;
    margin-right: 0 !important;
    border: none;
    cursor: pointer;
    height: 54px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    box-shadow: 2px 6px 4px rgba(0, 0, 0, 0.15);

}

.sign-up:hover {
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

    background-image: url('src/assets/GoogleLogo.png'); /* path to your custom arrow icon */
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

    background-image: url('src/assets/AppleIcon.png'); /* path to your custom arrow icon */
    background-repeat: no-repeat;
    background-position: left 160px center; /* adjust as necessary */
    background-size: 24px;

}

.apple:hover {
    background-color: #2f2f2f;
    transition: 0.3s;


}

.AlrdyAccount {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    font-size: 14px;
}

.AlrdyAccount a {
    text-decoration: none;
}

@media (max-width: 570px) {
    .AlrdyAccount {
        justify-content: space-between;
    }

}

p {
    margin-bottom: 0;
    padding-right: 30px;
}

</style>