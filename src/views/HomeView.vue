<template>
    <main>
        <NavBar/>
        <div class="hero">
            <div class="hero-text">
                <h1 id="firsthero">Prep up your day with a Smile</h1>
                <h1 id="secondhero">Quick, Tasty, Easy.</h1>
            </div>
            <button @click="getRecipe">View Recipes</button>



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
/* ... other styles... */



main {
    margin-top: 64px; /* same as the height of the fixed navbar */
}

#secondhero {
    color: #FFD073; /* help */
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
    padding-top: 90px;
    padding-bottom: 140px;
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
    background-color: #EC4040; /* Button color */
    color: white;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    border-radius: 8px !important;
}

button:hover {
    background-color: #c23333; /* Darker shade for hover effect */
}

tr {
    display: flex;
    flex-direction: column;
}

</style>
