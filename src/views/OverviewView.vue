<script setup>
import NavBar from '../components/NavBar.vue'
import RecepieContainer from '../components/RecepieContainer.vue';
</script>

<template>
  <NavBar />
  <main>
    <div class="redbar">
        <h1 class="redbar-text">ALL RECIPES</h1>
      </div>
    <div class="custom-options">

        <div class="countryoption">
            <label for="country-select">COUNTRY</label>
                <select name="country" id="country-select">
                <option value="">ALL</option>
                <option value="dog">Germany</option>
                <option value="cat">Italy</option>
                <option value="hamster">Korea</option>
                </select>
        </div>

        <div class="timeoption">
            <label for="time-select">TIME</label>
                <select name="time" id="time-select">
                <option value="">ALL</option>
                <option value="15min">15 min</option>
                <option value="30min">30 min</option>
                <option value="1hour">1 Hour</option>
                </select>
        </div>


        <div class="dietoption">
            <label for="diet-select">DIET</label>
                <select name="diet" id="diet-select">
                <option value="">ALL</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                </select>
        </div>

        <div class="caloriesoption">
            <label for="calories-select">CALORIES</label>
                <select name="calories" id="calories-select">
                <option value="">ALL</option>
                <option value="-500">-500</option>
                <option value="+500">+500</option>
                <option value="+1000">+1000</option>
                </select>
        </div>

        <div class="goalsoption">
            <label for="goals-select">GOALS</label>
                <select name="goals" id="goals-select">
                <option value="">ALL</option>
                <option value="lose_weight">Lose weight</option>
                <option value="build_muscle">Build muscle</option>
                <option value="balanced_diet">Balanced diet</option>
                </select>
        </div>

    </div>
    <div class="recepies-overview">
        <h1 class="recepieamount">12 Recepies</h1>
        <div class="recepie-containers">
            <RecepieContainer
                    image="src/assets/PrepBox1.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox2.jpg" 
                    title="QUINOA SALAD" 
                    preference="Vegan" 
                    details="420 CALS/15 MIN."
                    link="/quinoa-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox2.jpg" 
                    title="QUINOA SALAD" 
                    preference="Vegan" 
                    details="420 CALS/15 MIN."
                    link="/quinoa-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox2.jpg" 
                    title="QUINOA SALAD" 
                    preference="Vegan" 
                    details="420 CALS/15 MIN."
                    link="/quinoa-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox2.jpg" 
                    title="QUINOA SALAD" 
                    preference="Vegan" 
                    details="420 CALS/15 MIN."
                    link="/quinoa-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox3.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox4.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox1.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox1.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox5.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox1.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox1.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

            <RecepieContainer
                    image="src/assets/PrepBox1.jpg" 
                    title="AVOCADO SALAD" 
                    preference="Vegetarian" 
                    details="530 CALS/45 MIN."
                    link="/avocado-salad"
            />

        </div>
        <p class="endtext">OOPS YOU'VE REACHED THE END</p>
     <div class="backgroundicons">
        <img src="src/assets/BakedIcon.svg" alt="Baked Icon" class="baked-icon"/>
        <img src="src/assets/BurgerIcon.svg" alt="Burger Icon" class="burger-icon"/>
        <img src="src/assets/EggIcon.svg" alt="Egg Icon" class="egg-icon"/>
    </div>
    </div>
  </main>
  <footer>

    <p>Hello</p>
  </footer>
</template>

<style>

footer {
    background-color: #121212;
    width: 100%;
    height: 600px;
    z-index: 3;
    position: relative;
}

.recepieamount {
    z-index: 2;
}

.backgroundicons {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    max-width: 100%;
}

.baked-icon, .burger-icon, .egg-icon {
    z-index: 1;
    overflow: hidden;
}

.baked-icon {
    rotate: -120deg;
    height: auto;
    width: 557px;
    margin-left: -15vw;
    margin-top: 450px;
}

.burger-icon {
    rotate: -17deg;
    height: auto;
    width: 444px;
    margin-left: 70vw;
    margin-top: -430px;
}

.egg-icon {
    position: relative;
    rotate: -11deg;
    height: auto;
    width: 500px;
    margin-left: 40vw;
    margin-top: 300px;
}

.endtext {
    margin-top: 60px;
    font-size: 16px;
    font-weight: bold;
    color: #808080;
    z-index: 2;
}

label {
    font-size: 10px;
    margin-bottom: 3px;
    color: #6d6d6d;
}

#calories-select, #country-select, #diet-select, #time-select, #goals-select {
    background-color: #D9D9D9;
    height: 39px;
    width: 222px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 13px;
    padding-left: 20px;
    padding-right: 30px;
    margin-left: -15px;
    margin-right: 30px;
    -webkit-appearance: none; /* Removes default styling in WebKit browsers */
    -moz-appearance: none;    /* Removes default styling in Firefox */
    appearance: none; 
    font-size: 13px;
    color: #6d6d6d;
    text-decoration: none;
    font-weight: bold;
    border: 0;
    cursor: pointer;

    background-image: url('src/assets/DropDownArrow.svg'); /* path to your custom arrow icon */
    background-repeat: no-repeat;
    background-position: right 20px center; /* adjust as necessary */
    background-size: 12px;
}

.caloriesoption, .dietoption, .countryoption, .timeoption, .goalsoption {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the start of the container */
    padding-left: 20px; 
}

.recepie-containers {
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; /* Enable wrapping */
    max-width: 1164px;
    max-height: 1270px;
    overflow: hidden;
    height: auto;
    justify-content: center; /* Center the items */
    z-index: 2;
}

.recepies-overview {
    width: 100%;
    height: 1540px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}

.custom-options {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.recepies-overview h1 {
    font-size: 25px;
    color: #808080;
    font-weight: bold;
    margin-top: 30px;
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

</style>