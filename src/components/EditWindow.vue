<template>
  <div class="edit-window-overlay" v-if="isVisible">
    <div class="edit-window">
      <h2>Edit Recipe</h2>
      <form @submit.prevent="saveChanges">
        <div>
          <label for="name">Name:</label>
          <input id="name" v-model="editableData.name" type="text" />
        </div>
        <div>
          <label for="calories">Calories:</label>
          <input id="calories" v-model.number="editableData.calories" type="number" />
        </div>
        <div>
          <label for="cookTime">Cook Time:</label>
          <input id="cookTime" v-model.number="editableData.cookTime" type="number" />
        </div>
        <div>
          <button type="submit" class="save-changes-button">Save Changes</button>
          <button @click="deleteRecipe" class="delete-button">Delete</button>
          <button @click="closeWindow" class="close-button">Close</button>

        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  recipeData: Object,
  isVisible: Boolean
})

const editableData = ref({ ...props.recipeData })
const emit = defineEmits(['update:isVisible'])

watch(() => props.recipeData, (newData) => {
  editableData.value = { ...newData };
  console.log("Editable data in EditWindow: ", editableData.value); // Debugging line
});

const saveChanges = async () => {
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL}/recipes/${editableData.value.id}`;
    console.log('URL:', url); // Debugging line
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editableData.value)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText)
    }

    const updatedRecipe = await response.json()
    console.log('Saved Successfully', updatedRecipe)
    emit('recipe-saved', updatedRecipe) // Emit the updated recipe
    emit('update:isVisible', false) // Close the window
  } catch (error) {
    console.error('Error saving changes', error)
  }
}

const deleteRecipe = async () => {
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL}/recipes/${editableData.value.id}`;
    const response = await fetch(url, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    console.log('Recipe Deleted Successfully');
    emit('recipe-deleted', editableData.value.id);
    emit('update:isVisible', false); // Close the window
  } catch (error) {
    console.error('Error deleting recipe', error);
  }
};

const closeWindow = () => {
  emit('update:isVisible', false) // Sichtbarkeit auf false setzen
}
</script>

<style scoped>
input[type="text"],
input[type="number"] {
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 100%;
}

label {
  display: block;
  margin-top: 15px;
}

.save-changes-button,
.delete-button,
.close-button {
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #d32f2f;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

.save-changes-button,
.delete-button {
  margin-right: 10px;
}

.save-changes-button:hover,
.delete-button:hover,
.close-button:hover {
  background-color: #671818;
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
