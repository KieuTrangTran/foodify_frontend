<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar />
  <main>
    <div class="hero">
      <div class="hero-text">
        <h1 id="firsthero">Prep up your day with a Smile</h1>
        <h1 id="secondhero">Quick, Tasty, Easy.</h1>
      </div>
      <button>View Recieps</button>
    </div>
  </main>
</template>

<style>
/* ... other styles... */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* This ensures padding doesn't affect overall width */
}

main {
  width: 100vw;
  margin-top: 64px; /* same as the height of the fixed navbar */
}

#secondhero {
  color: #FFD073;
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
  justify-content: space-between;
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
</style>
