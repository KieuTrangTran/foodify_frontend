<template>
    <main>
        <NavBar/>
    <button @click="createRecipe">Create Recipes</button>
    <input v-model="nameField" placeholder="Name">
    <input v-model="caloriesField" placeholder="Kalorien">
    <input v-model="cookTimeField" placeholder="Kochzeit">
    <input v-model="prepTimeField" placeholder="Vorbereitungszeit">
    <input v-model="countryField" placeholder="Land">

    <section>{{ allRecipes }}</section>
    <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Kalorien</th>
                <th>Kochzeit</th>
                <th>Vorbereitungszeit</th>
                <th>Land</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="allRecipes.length === 0">
                <td colspan="5">Keine Rezepte :(</td>
            </tr>
            <tr v-for="allRecipe in allRecipes" :key="allRecipe.id">
                <td>{{ allRecipe.name }}</td>
                <td>{{ allRecipe.calories }}</td>
                <td>{{ allRecipe.cookTime }}</td>
                <td>{{ allRecipe.prepTime }}</td>
                <td>{{ allRecipe.country }}</td>
            </tr>
            <tr>
                <td>{{ nameField }}</td>
                <td>{{ caloriesField }}</td>
                <td>{{ cookTimeField }}</td>
                <td>{{ prepTimeField }}</td>
                <td>{{ countryField }}</td>
            </tr>
            </tbody>
        </table>
    </div>
    </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {

    components: {NavBar},
    data() {
        return {
            nameField: "",
            caloriesField: "",
            cookTimeField: "",
            prepTimeField: "",
            countryField: "",
            allRecipes: []
        }

    },
    methods: {
        getRecipe() {
            // GET REQUEST
            const endpoint = "http://localhost:8080/recipes"
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            }

            fetch(endpoint, requestOptions)
                .then(response => {
                    return response.json()
                }).then(result => {
                console.log(this.allRecipes = result)
            }).catch(error => console.log("error", error))
        },

        createRecipe() {
            const endpoint = "http://localhost:8080/recipes"
            const data = {
                name: this.nameField,
                calories: this.caloriesField,
                cookTime: this.cookTimeField,
                prepTime: this.prepTimeField,
                country: this.countryField,

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


}


</script>

<style>

</style>