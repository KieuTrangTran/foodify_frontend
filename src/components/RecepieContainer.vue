<template>
    <div class="recepiecontainer">
      <img src="src/assets/HeartIcon.svg" alt="Heart Icon" class="heart-icon"/>
      <img :src="image" :alt="title" class="container-image"/>
      <div class="prefcontainer">
        <p class="containerpref">{{ preference }}</p>
      </div>
      <div class="containermaininfos">
        <p class="containertitle">{{ title }}</p>
        <p class="containercalories">{{ details }}</p>
      </div>
      <div class="linkcontainer">
        <a :href="link" class="containerlink">VIEW RECEPIE</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecepieContainer',
    props: {
      image: String,
      title: String,
      preference: String,
      details: String,
      link: String
    }
  }
  </script>


<style scoped>
.recepiecontainer {
    background-color: #fff;
    height: 400px;
    width: 269px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 11px;
    margin-right: 11px;
    margin-bottom: 24px;
}

.container-image {
    position: absolute;
    width: 350px;
    height: auto;
    display: block;
    bottom: 130px;
    left: -40px;
}

.weißerbereich {
    background-color: #fff;
    height: 133px;
    border-radius: 0 0 30px 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

p {
    margin-bottom: 5px;
}

.prefcontainer {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.containerpref {
    color: #808080;
    font-size: 10px;
    font-weight: bold;
}

.containermaininfos {
    width: 100%;
    height: auto;
    display: block;
    text-align: center;
}

.containertitle, .containercalories {
    margin: -6px;
    padding: 0;
}

.containertitle {
    font-weight: bold;
    font-size: 20px;
}

.containercalories {
    font-weight: bold;
    color: #808080;
    font-size: 16px;
}

.linkcontainer {
    margin-bottom: 20px;
    margin-top: 13px;
    display: block;
    text-align: center;
}

.containerlink {
    color:#EC4040;
    font-weight: bold;
    text-decoration: none;
    font-size: 13px;
}

/* Add styles for heart-icon if it's part of this component */
.heart-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    z-index: 10;
}
</style>