<script>
export default {
name: 'NavBar'
}
</script>

<template>
    <nav>
    <img id="foodifylogo" src="@/assets/Logo.png" alt="Logo" class="logo"/> 
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/overview">Recepies</router-link></li>
        <!-- Add other navigation links here -->
      </ul>
    </nav>

  </template>
  


<style>
nav {
  padding-left: 40px;
  padding-right: 40px;
    width: 100%;
  height: 64px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex; /* make nav a flex container */
  justify-content: space-between; /* space out logo and ul */
  align-items: center; /* vertically center */
  background-color: rgb(255, 255, 255);
}

.logo {
  height: 30px; /* adjust logo size as needed */
  width: auto;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: flex-start; /* Align items to the start (left) horizontally */
}

nav li {
  margin: 0 20px;
}

nav a {
  color: #121212;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}

nav a:hover {
  color: #EC4040;
  transition: 0.3s;
}

router-link {
  text-decoration: none;
  color: inherit;
}
</style>