<template>
    <NavBar/>
    <main class="hauptsite">

        <div class="redbar">
        <h1 class="redbar-text">ABOUT US</h1>
      </div>
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
    <FooterComponent/>

</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style scoped>

.hauptsite {
    margin-top: 64px;
}

/* Stile für About-Section */
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



.background-container {
    background-image: url('src/assets/AboutUsBG.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: local;
    min-height: 100vh;
    overflow: hidden;

}

.infotext {
    max-width: 800px;
    height: 100vh; /* 100% der Bildschirmhöhe verwenden */
    margin-right: 30%;
    margin-left: 25%;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Zentriert vertikal */
    align-items: center; /* Hinzugefügt, um vertikal zu zentrieren */
    text-align: justify;

}

.info-title {
    font-size: 30px;
    font-weight: bold;
}

.info-content {
    font-size: 16px;
}

.info-title p,
.info-content p {
    padding-right: 0;
}


</style>