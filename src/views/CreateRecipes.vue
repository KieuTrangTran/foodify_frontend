<template>
    <main>
        <NavBar/>
        <div class="redbar-create">
            <h1 class="redbar-text">CREATE RECIPE</h1>
        </div>
        <div class="createsection">


          <input v-model="nameField" type="text" placeholder="Name">
          <input v-model.number="caloriesField" type="number" placeholder="Kalorien">
          <input v-model.number="cookTimeField" type="number" placeholder="Kochzeit">
          <input v-model.number="prepTimeField" type="number" placeholder="Vorbereitungszeit">
          <button @click="createRecipe">Create Recipes</button>

    <div v-for="recipe in allRecipes" :key="recipe.id">
            <RecipeContainer
                :name="recipe.name"
                :calories="recipe.calories"
                :cookTime="recipe.cookTime"
                :prepTime="recipe.prepTime"
            />
        </div>

    <section>{{ allRecipes }}</section>
    <div>
        <div v-for="recipe in allRecipes" :key="recipe.id">
                <h2>{{ recipe.name }}</h2>
                <p>{{ recipe.calories }}</p>
                <p>{{ recipe.cookTime }}</p>
                <p>{{ recipe.prepTime }}</p>
            </div>
    </div>
</div>

    

    </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import RecipeContainer from "@/components/RecepieContainer.vue";

export default {
  name: "CreateRecipiesView",
  components: { NavBar, RecipeContainer },
  data() {
    return {
      nameField: "",
      caloriesField: "",
      cookTimeField: "",
      prepTimeField: "",
      allRecipes: [],
    };
  },
  methods: {
    getRecipe() {
      const url = `${import.meta.env.VITE_BACKEND_URL}/recipes`;
      fetch(url, { method: "GET" })
        .then(response => response.json())
        .then(result => this.allRecipes = result)
        .catch(error => console.log('error', error));
    },

    createRecipe() {
      const url = `${import.meta.env.VITE_BACKEND_URL}/recipes`;
      const data = {
        name: this.nameField,
        calories: this.caloriesField,
        cookTime: this.cookTimeField,
        prepTime: this.prepTimeField,
      };

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          console.log("Success:", data);
          this.getRecipe(); // Update the recipe list after creating a new recipe
        })
        .catch(error => console.log("error", error));
    }
  },
  mounted() {
    this.getRecipe();
  }
}
</script>


<style>

main {
    margin-top: 64px;
}

.createsection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.redbar-create {
    background-color: #EC4040;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 150px;
}

.redbar-text {
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0;
}

input, button {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 300px;
}

button {
  background-color: #EC4040;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #bf3330;
}



</style>