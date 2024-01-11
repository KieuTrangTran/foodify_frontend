<template>
  <div class="recepiecontainer">
    <img
        v-if="isHeartActive"
        src="@/assets/BurgerIcon.svg"
        alt="Heart Icon"
        class="heart-icon"
        @click="toggleHeartIcon"
    />
    <img
        v-else
        src="@/assets/HeartIcon.svg"
        alt="Heart Icon"
        class="heart-icon"
        @click="toggleHeartIcon"
    />
    <img :src="image" :alt="title" class="container-image" />
    <img
      src="@/assets/dots.svg"
      alt="Dots Icon"
      class="dots-icon"
      @click="toggleEditableWindow"
    />
    <div class="prefcontainer">
      <p class="containerpref">{{ preference }}</p>
    </div>
    <div class="containermaininfos">
      <p class="containertitle">{{ recipe.name }}</p>
      <p class="containercalories">{{ recipe.calories }} CALS/{{ recipe.cookTime }} MIN.</p>
    </div>
    <div class="linkcontainer">
      <a :href="link" class="containerlink">VIEW RECEPIE</a>
    </div>
  </div>
  <div class="edit-window-overlay" v-if="showEditableWindow" @click.self="closeWindow">
    <EditWindow
    :isVisible="showEditableWindow"
    :recipeData="editableRecipeData"
    @update:isVisible="handleEditWindowVisibility"
    @recipe-deleted="handleRecipeDeleted"
  />
  </div>
</template>

<script>
import EditWindow from '@/components/EditWindow.vue' // Stellen Sie sicher, dass der Pfad korrekt ist
import { ref } from 'vue'

export default {
  name: 'RecepieContainer',
  components: {
    EditWindow
  },
  props: {
    recipe: Object,
    image: {
      type: String,
      default: 'src/assets/PrepBox1.jpg' // Setzen Sie hier den Pfad zu Ihrem Standardbild
    }
  },

  emits: ['recipeSaved'],

  data() {
    return {
      showEditableWindow: false,
      editableRecipeData: {
        // Initialisieren Sie dies mit den Rezeptdaten
        // Beispiel: name: this.name, calories: this.calories, ...
      },
      isHeartActive: false, // Zustandsvariable für das Herz-Icon
    }
  },
  methods: {
    toggleEditableWindow() {
      this.showEditableWindow = !this.showEditableWindow
      if (this.showEditableWindow) {
        // Aktualisieren Sie die Daten, bevor Sie das Fenster öffnen
        this.editableRecipeData = {
          id: this.recipe.id, // Make sure this is correctly set
          name: this.recipe.name,
          calories: this.recipe.calories,
          cookTime: this.recipe.cookTime,
          prepTime: this.recipe.prepTime,
          image: this.image
        }
      }
      document.body.style.overflow = this.showEditableWindow ? 'hidden' : ''
    },
    closeWindow() {
      this.showEditableWindow = false
      document.body.style.overflow = ''
    },
    handleEditWindowVisibility(isVisible) {
      this.showEditableWindow = isVisible
      document.body.style.overflow = isVisible ? 'hidden' : ''
    },
    handleRecipeDeleted(deletedRecipeId) {
      this.$emit('recipe-deleted', deletedRecipeId);
    },
    toggleHeartIcon() {
      this.isHeartActive = !this.isHeartActive;
    },
  }
}
const showEditableWindow = ref(false)
const editableRecipeData = ref({
  /* initialisieren Sie dies mit den Rezeptdaten */
})

// Fügen Sie Logik hinzu, um recipeData zu aktualisieren, wenn ein Rezept zur Bearbeitung ausgewählt wird
</script>

<style scoped>
.edit-window-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
}
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

.containertitle,
.containercalories {
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
  color: #ec4040;
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

.dots-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 20px;
  height: 20px;
  z-index: 10;
}

.dots-icon:hover {
  cursor: pointer;
}
</style>
