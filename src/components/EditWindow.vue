<template>
    <div class="edit-window-overlay" v-if="isVisible">
      <div class="edit-window">
        <h2>Edit Recipe</h2>
        <form @submit.prevent="saveChanges">
          <div>
            <label for="name">Name:</label>
            <input id="name" v-model="editableData.name" type="text">
          </div>
          <div>
            <label for="calories">Calories:</label>
            <input id="calories" v-model.number="editableData.calories" type="number">
          </div>
          <div>
            <label for="cookTime">Cook Time:</label>
            <input id="cookTime" v-model.number="editableData.cookTime" type="number">
          </div>
          <div>
            <button type="submit">Save Changes</button>
            <button @click="closeWindow" class="close-button">Close Window</button> <!-- Schließen-Button -->

          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
    import { ref, watch, defineProps } from 'vue';

  const props = defineProps({
    recipeData: Object,
    isVisible: Boolean
  });
  
  const editableData = ref({ ...props.recipeData });
  const emit = defineEmits(['update:isVisible']); // Event-Emittent definieren

  
  watch(() => props.recipeData, (newData) => {
    editableData.value = { ...newData };
  });
  
  const saveChanges = () => {
    // Hier müssten Sie die PUT-Anfrage an Ihre Datenbank senden
    // Zum Beispiel: axios.put('your-api-endpoint', editableData.value)
    // Danach können Sie ein Event emittieren oder den Zustand entsprechend aktualisieren
    console.log('Saving', editableData.value);
  };

  const closeWindow = () => {
  emit('update:isVisible', false); // Sichtbarkeit auf false setzen
};
  </script>
  
  <style scoped>

  .close-button {
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #671818;
    color: white;
    cursor: pointer;
  }

  .edit-window-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .edit-window {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Weitere Stil-Anpassungen hier */
  </style>