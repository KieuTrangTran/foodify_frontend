<script>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from '../router';

export default {
  name: 'NavBar',
  setup() {
    const isLoggedin = ref(false);
    let auth;

    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        isLoggedin.value = !!user;
      });
    });

    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          router.push('/');
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    };

    return { isLoggedin, handleSignOut };
  }
}
</script>

<template>
    <nav>
        <router-link to="/"><img id="foodifylogo" src="@/assets/Logo.png" alt="Logo" class="logo"/></router-link>
      <ul>
          <li><router-link to="/overview">Recepies</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li v-if="isLoggedin">Angemeldet</li>
      <li v-else><router-link to="/login">Login</router-link></li>
      <button @click="handleSignOut" v-if="isLoggedin">Sign Out</button>

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