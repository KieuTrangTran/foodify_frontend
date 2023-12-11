<template>
    <NavBar/>
    <main class="hauptsite2">
        <div class="login">
            <h1>ACCOUNT</h1>
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
                                <input type="checkbox" checked="checked" name="remember"> Remember me
                            </div>

                            <div class="password">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" class="sign-in">Sign In</button>


                    </fieldset>
                </form>
            </div>
            <hr class="hr-login">
            <div class="google-apple">
                <button class="google">Continue with Google</button>
                <br>
                <button class="apple">Continue with Apple</button>
                <div class="NoAccount">
                <p>Don't have an account?</p>
                    <a href="#">Sign up now</a>
                </div>
            </div>
            </div>
        </div>
    </main>
    <FooterComponent/>
</template>


<script>
import NavBar from "@/components/NavBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: "LoginView",
    components: {FooterComponent, NavBar}
}
</script>

<style>
.hauptsite2 {
    margin-top: 64px; /*Damit der Banner unter der Navbar ist*/
    height: 750px;
}

.login h1 {
    color: white;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin: 0;
}

.login {
    background-color: #EC4040;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin: 0;
}

.container {
    display: flex;
    flex-direction: column;
    max-width: 622px;
}

.content-container-account {
    background-color: aquamarine;
}

.sign-in-section h2 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    padding-top: 40px;
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
    padding: 14px 20px;
    margin-top: 25px;
    border: none;
    cursor: pointer;
    height: 48px;
    border-radius: 10px;
}

.sign-in:hover {
    opacity: 1.8;
    transition: 0.3s;
}

.remember-container,
.password {
}

.extra-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    height: 48px;
    padding: 12px 14px;
    margin: 8px 0;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
}

.NoAccount {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
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