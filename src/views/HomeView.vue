<script setup>
import NavBar from '../components/NavBar.vue'
import RecepieContainer from '../components/RecepieContainer.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref, onMounted } from 'vue'

const recipes = ref([])

const fetchRecipes = async () => {
  try {
    const response = await fetch('http://localhost:8080/recipes')
    recipes.value = await response.json()
  } catch (error) {
    console.error('Error fetching recipes:', error)
  }
}

onMounted(fetchRecipes)
</script>

<template>
  <main>
    <NavBar />
    <div class="hero">
      <div class="hero-text">
        <h1 id="firsthero">Prep up your day with a Smile</h1>
        <h1 id="secondhero">Quick, Tasty, Easy.</h1>
      </div>
      <div class="herobuttons">
        <button @click="getRecipe" class="view-recipes-button">View Recipes</button>
        <button @click="navigateToCreate" class="create-new-button">+</button>
      </div>
    </div>

    <div class="new-recipe-container">
      <div class="new-recipe-content">
        <h1>NEW RECIPES</h1>

        <div class="recepie-containers">
          <div v-for="recipe in recipes" :key="recipe.id">
            <RecepieContainer
              @recipe-saved="handleRecipeSaved"
              :recipe="recipe"
              :name="recipe.name"
              :calories="recipe.calories"
              :cookTime="recipe.cookTime"
              :prepTime="recipe.prepTime"
              :image="recipe.image"
            />
          </div>
        </div>
        <a class="viewall" href="/overview">VIEW ALL</a>
        <div class="backgroundicons-home">
          <img src="src/assets/BakedIcon.svg" alt="Baked Icon" class="baked-icon-home" />
          <img src="src/assets/BurgerIcon.svg" alt="Burger Icon" class="burger-icon-home" />
          <img src="src/assets/EggIcon.svg" alt="Egg Icon" class="egg-icon-home" />
        </div>
      </div>
    </div>
    <div class="redgoals">
      <h2 class="redgoals-heading">RECIPES FOR YOUR GOALS</h2>
      <div class="goalcontainers">
        <div class="lose-weight-container">
          <img src="src/assets/ScaleIcon.svg" alt="Scale Icon" class="scale-icon" />
          <p>LOSE WEIGHT</p>
        </div>

        <div class="build-muscle-container">
          <img src="src/assets/MuscleIcon.svg" alt="Muscle Icon" class="muscle-icon" />
          <p>BUILD MUSCLE</p>
        </div>

        <div class="balanced-diet-container">
          <img src="src/assets/DietIcon.svg" alt="Food Icon" class="food-icon" />
          <p>BALANCED DIET</p>
        </div>
      </div>
    </div>
  </main>
  <FooterComponent />
</template>

<script>
export default {
  components: { NavBar, RecepieContainer },
  data() {
    return {
      nameField: '',
      caloriesField: '',
      cookTimeField: '',
      prepTimeField: '',
      countryField: '',
      allRecipes: []
    }
  },
  methods: {
    getRecipe() {
      // GET REQUEST
      const endpoint = 'http://localhost:8080/recipes'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          console.log((this.allRecipes = result))
        })
        .catch((error) => console.log('error', error))
    },

    navigateToCreate() {
      this.$router.push('/create')
    },

    createRecipe() {
      const endpoint = 'http://localhost:8080/recipes'
      const data = {
        name: this.nameField,
        calories: this.caloriesField,
        cookTime: this.cookTimeField,
        prepTime: this.prepTimeField,
        country: this.countryField
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data)
        })
        .catch((error) => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.plus-icon {
  height: auto;
  width: 21px;
}

.goalcontainers {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.scale-icon,
.muscle-icon,
.food-icon {
  height: auto;
  width: 100px;
  padding-bottom: 50px;
  padding-top: 60px;
}

.redgoals h2 {
  color: #fff;
  font-size: 25px;
  font-weight: bold;
  margin-top: 76px;
  margin-bottom: 57px;
}

.lose-weight-container,
.build-muscle-container,
.balanced-diet-container {
  height: 347px;
  width: 296px;
  background-color: #ec4040;
  border: #fff 2px solid;
  border-radius: 36px;
  box-shadow: 2px 6px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 33px;
  margin-right: 33px;
  margin-bottom: 53px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.lose-weight-container:hover,
.build-muscle-container:hover,
.balanced-diet-container:hover {
  transform: scale(1.02); /* Erhöht die Größe um 5% */
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.25); /* Fügt einen Schlagschatten hinzu */
  cursor: pointer;
}

.lose-weight-container p,
.build-muscle-container p,
.balanced-diet-container p {
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  padding-right: 0;
}

.redgoals {
  background-color: #ec4040;
  position: relative;
  width: 100%;
  z-index: 50;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backgroundicons-home {
  position: absolute;
  z-index: 1;
  overflow: hidden;
  max-width: 100%;
  top: 450px;
}

.baked-icon-home,
.burger-icon-home,
.egg-icon-home {
  z-index: 1;
  overflow: hidden;
}

.baked-icon-home {
  rotate: -120deg;
  height: auto;
  width: 557px;
  margin-left: -15vw;
  margin-top: 250px;
}

.burger-icon-home {
  rotate: -17deg;
  height: auto;
  width: 444px;
  margin-left: 70vw;
  margin-top: -430px;
}

.egg-icon-home {
  position: relative;
  rotate: -11deg;
  height: auto;
  width: 500px;
  margin-left: 40vw;
  margin-top: 160px;
}

/* ... other styles... */
.viewall {
  color: #808080;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 70px;
  z-index: 40;
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

.new-recipe-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-recipe-content h1 {
  font-size: 25px;
  color: #000000;
  font-weight: bold;
  margin-top: 30px;
}

.view-recipes-button {
  margin-top: 100px;
}

main {
  margin-top: 64px; /* same as the height of the fixed navbar */
}

#secondhero {
  color: #ffd073; /* help */
}

.hero {
  width: 100%; /* Full width */
  height: 474px; /* Adjust height as needed */
  background-image: url('@/assets/HeroBackground.jpeg');
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #353535;
  margin-top: 0; /* Remove any margin that might have been previously added */
  position: relative; /* Ensure it respects the z-index */
  z-index: 1; /* Lower than NavBar */
  flex-direction: column;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent black */
  z-index: -1; /* Behind the content of the hero section */
}

.hero-text {
  text-align: center;
  color: rgb(255, 255, 255); /* Adjust text color as needed */
}

.hero-text h1 {
  font-weight: bold;
}

button {
  background-color: #ec4040; /* Button color */
  color: white;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 8px !important;
  margin-left: 6px !important;
  margin-right: 6px !important;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

button:hover {
  background-color: #c23333; /* Darker shade for hover effect */
  transform: scale(1.05); /* Erhöht die Größe um 5% */
}

tr {
  display: flex;
  flex-direction: column;
}
</style>
