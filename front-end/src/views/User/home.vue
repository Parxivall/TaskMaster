<template>
  <h1>Home User</h1>
  <div>
    <v-btn
      color="primary"
      @click="linkWithGoogle"
      class="google-btn"
    >
      <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/c/c1/20230822192910%21Google_%22G%22_logo.svg/118px-Google_%22G%22_logo.svg.png"
        alt="Google"
        height="30"
        width="20"
        class="google-img"
      />
      Google
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';

const linkWithGoogle = async () => {
  try {
    const response = await axios.get('http://localhost:3333/google/authUrl');
    const authUrl = response.data.authUrl;
    
    if (authUrl) {
      window.open(authUrl, '_blank');
    } else {
      console.error('No se encontró la URL de autorización en la respuesta del servidor.');
    }
  } catch (error) {
    console.error(error);
  }
};

</script>
