<template>
    <main>
        <NavBar/>
        <div class="redbar-create">
            <h1 class="redbar-text">CREATE RECIPE</h1>
        </div>
        <div class="createsection">

    <button @click="createRecipe">Create Recipes</button>
    <input v-model="nameField" placeholder="Name">
    <input v-model="caloriesField" placeholder="Kalorien">
    <input v-model="cookTimeField" placeholder="Kochzeit">
    <input v-model="prepTimeField" placeholder="Vorbereitungszeit">

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

    components: {NavBar},
    components: {RecipeContainer, NavBar},
    data() {
        return {
            nameField: "",
            caloriesField: "",
            cookTimeField: "",
            prepTimeField: "",
            allRecipes: "",
        }

    },
    methods: {
        getRecipe() {
            const endpoint = "http://localhost:8080/recipes"
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            }

            fetch(endpoint, requestOptions)
                .then(response => response.json())
                .then(result => this.allRecipes = result)
                .catch(error => console.log('error', error));
        },

        createRecipe() {
            const endpoint = "http://localhost:8080/recipes"
            const data = {
                name: this.nameField,
                calories: this.caloriesField,
                cookTime: this.cookTimeField,
                prepTime: this.prepTimeField,
            }

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            fetch(endpoint, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("Success:", data);
                    this.getRecipe(); // Aktualisieren Sie die Rezeptliste nach dem Erstellen eines neuen Rezepts
                })
                .catch(error => console.log("error", error));
        }
    },

    mounted() {
    this.getRecipe();
},

        createRecipe() {
            const endpoint = "http://localhost:8080/recipes"
            const data = {
                name: this.nameField,
                calories: this.caloriesField,
                cookTime: this.cookTimeField,
                prepTime: this.prepTimeField,

            }

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
            fetch(endpoint, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log("Success:", data)
                })
                .catch(error => console.log("error", error))
        }
    }



</script>

<style>

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

</style>