<template>
    <NavBar/>
    <main class="hauptsite">

        <section class="about">
            <h1>ABOUT US</h1>
        </section>
        <section class="background-container">

            <div class="infotext">
                <p class="info-title">Hello :)</p>
                <p class="info-content">
                    Welcome to Foodyify, where passion meets practicality! We're two
                    students navigating the bustling world of academia with insatiable
                    appetites for delicious, homemade meals. Caught between textbooks
                    and tight schedules, we discovered a game-changing solution: meal
                    prep.
                </p>
                <p class="info-content">
                    In our busy lives, the kitchen became our sanctuary, and meal prep
                    our culinary superhero. Foodyify is our humble space to share the
                    love and joy we find in preparing scrumptious, time-efficient
                    meals. Imagine indulging in flavorful dishes without sacrificing
                    precious study or social time—meal prep is the secret, and we're
                    here to spill it!
                </p>
                <p class="info-content">
                    Join us on this delectable journey as we curate and unveil our
                    favorite meal prep recipes. From quick and easy weekday wonders to
                    weekend feasts, Foodyify is your go-to source for simplifying your
                    culinary adventures. Let's savor every bite and conquer the student
                    life together—one delicious, time-saving recipe at a time. Cheers
                    to good food, good times, and the joy of hassle-free cooking!
                </p>
            </div>
        </section>
    </main>
    <footer>
        <section class="test">
            <div class="footer-content">
            <div class="create-an-account-section">
                <h5 class="slogan">PREP UP YOUR DAY WITH A SMILE</h5>
                <h4 class="title-slogan">CREATE AN ACCOUNT</h4>
                <h5 class="goal">Foodify wants to bring you closer to your goals while saving you time and money</h5>
                <button class="register-button">REGISTER</button>
                <h6 class="copyrights">© 2023 Foodify, GmbH</h6>
            </div>
            <hr class="line-footer">
            <div class="right-stuff">
                <img id="foodifylogo" src="@/assets/Logo.png" alt="Logo" class="logo"/>
                <ul class="footer-legal-links">
                    <li class="legal-impressum"><router-link to="/">Impressum</router-link></li>
                    <li class="legal-datenschutz"><router-link to="/about">Datenschutz</router-link></li>
                    <li class="legal-contact"><router-link to="/login">Contact</router-link></li>
                </ul>
            </div>
            </div>
        </section>
    </footer>

</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style>
.hauptsite {
    margin-top: 64px;
//margin-bottom: 70px;
}

/* Stile für About-Section */
.about h1 {
    color: white;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    margin: 0;
}

.about {
    background-color: #EC4040;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.background-container {
    background-image: url('https://img.freepik.com/fotos-premium/die-bestandteile-fuer-selbst-gemachte-pizza-auf-weissem-hoelzernem-hintergrund_35641-2959.jpg?w=900');
    background-size: cover;
    background-position: center;
    background-attachment: local;
    min-height: 100vh;
    overflow: hidden;

}

.infotext {
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 50px 120px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    text-align: justify;

}

.info-title {
    font-size: 30px;
    font-weight: bold;
}

.info-content {
    font-size: 16px;
}


/*Styles für den Footer*/
.test {
    background-color: #121212;
    min-height: 595px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.create-an-account-section {
    padding-top: 70px;
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
    height: 47px;
    border-radius: 10px;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 12px 35px;
}

.register-button:hover {
    background-color:#B22E2E ;
    transition: 0.3s;
}

.copyrights {
    color: white;
    font-weight: bold;
    font-size: 13px;
}

.line-footer {
    color: #EC4040;
    width: 100%;
    margin: 50px auto;

}

.right-stuff {
    display: flex;
    align-items: center;
    width: 100%;
}

.footer-legal-links {
    list-style: none;
    display: inline-flex;
    flex-direction: row;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}



</style>