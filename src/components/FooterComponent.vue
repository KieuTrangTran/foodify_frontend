<template>
    <section class="footer-section">
        <div class="footer-content">
            <div class="create-an-account-section">
                <h5 class="slogan">PREP UP YOUR DAY WITH A SMILE</h5>
                <h4 class="title-slogan">CREATE AN ACCOUNT</h4>
                <h5 class="goal">Foodify wants to bring you closer to your goals while saving you <br>time and money</h5>
                <button class="register-button"><router-link to="/register">REGISTER</router-link></button>
                <h6 class="copyrights">© 2023 Foodify, GmbH</h6>
            </div>
            <div class="line"></div>
            <div class="legal-stuff">
                <img id="foodifylogo" src="@/assets/LogoWhite.png" alt="LogoWhite" class="logo-white"/>
                <ul class="footer-legal-links">
                    <li class="legal-impressum"><router-link to="/">Impressum</router-link></li>
                    <li class="legal-datenschutz"><router-link to="/about">Datenschutz</router-link></li>
                    <li class="legal-contact"><router-link to="/login">Contact</router-link></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style>

.logo-white {
    height: auto;
    width: 100px;
}

dl, ol, ul {
    margin-bottom: 0;
}
/*Styles für den Footer*/
.footer-section {
    background-color: #121212;
    min-height: 595px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 900;
    position: absolute;

}

.create-an-account-section {
    text-align: center;

}

.slogan {
    color: #EC4040;
    font-weight: bold;
    font-size: 16px;
}

.title-slogan {
    color: white;
    font-weight: bold;
    font-size: 39px;
}

.goal {
    color: #808080;
    font-size: 16px;
}

.register-button {
    background-color: #EC4040;
    border: none;
    color: white;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    height: 47px;
    width: 40%;
    border-radius: 10px;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 12px 35px;
}

.register-button:hover {
    background-color:#B22E2E ;
    transition: 0.3s;
}

.register-button a {
    text-decoration: none;
    color: white;
    font-weight: bold;
}

.copyrights {
    color: white;
    font-weight: bold;
    font-size: 13px;
}

.line {
    background-color: #EC4040;
    height: 1px;
    width: 100%;
    margin-bottom: 50px;
    margin-top: 50px;
}


.legal-stuff {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    justify-content: space-between;
}

.footer-legal-links {
    list-style: none;
    display: inline-flex;
    flex-direction: row;
}

.footer-legal-links a{
    text-decoration: none;
    color: #ffffff;
}

.footer-legal-links a:hover{
    color: #EC4040;
    transition: 0.3s;
}

ul {
    margin-bottom: 0;
}

.legal-impressum,
.legal-contact,
.legal-datenschutz {
    margin-bottom: 0;
    margin-left: 20px;
    margin-right: 20px;
}

footer a {
    color: white;
    text-decoration: none;
    font-size: 16px;
}

footer a:hover{
    color: #EC4040;
    transition: 0.3s;
}

.footer-content {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
}


</style>