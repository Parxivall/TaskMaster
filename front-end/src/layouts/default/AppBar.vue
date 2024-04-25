<template>
    <v-navigation-drawer 
    app v-model="drawerOpen" 
    color="#090738"
    dark
    >
      <!-- Contenido del drawer -->
      <v-list>

        <v-list-item @click="handleMenuItemClick('Item 1')" >
          <v-list-item-content @click="$router.push('/login')">
            <v-list-item-title>Login</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-alien</v-icon>
            </v-list-item-icon>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="handleMenuItemClick('Item 2')">
          <v-list-item-content @click="$router.push('/register')">
            <v-list-item-title>Register</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-alien</v-icon>
            </v-list-item-icon>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="handleMenuItemClick('Item 3')">
          <v-list-item-content>
            <v-list-item-title>Item 3</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-alien</v-icon>
            </v-list-item-icon>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="handleMenuItemClick('Item 4')">
          <v-list-item-content>
            <v-list-item-title>Item 4</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-alien</v-icon>
            </v-list-item-icon>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat>
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-app-bar-title>
        <v-icon icon="mdi-circle-slice-4" />
        <span class="ml-2">TaskMaster</span>
      </v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const drawerOpen = ref(false);

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value;
};

const handleMenuItemClick = (item: string) => {
  console.log(`Hiciste clic en: ${item}`);
  // Agrega lógica adicional según sea necesario
};
</script>

<style scoped>
/* Estilos personalizados para la barra de aplicaciones y el drawer */
</style>
