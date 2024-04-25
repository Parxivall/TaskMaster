<template>
  <v-container>
    <v-row justify="center">

      <div class="page-login">
        <v-card class="login-card">
          <div class="logo-container">
            <v-img
              src="@/assets/logo.jpeg"
              alt="UTP"
              height="100"
              width="100"
              class="rounded-circle"
            >
            </v-img>
          </div>
      <v-card-title class="login-title">
        Iniciar sesión
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field
            v-model="email"
            label="Correo electrónico"
            required
            outlined
          />
          
          <v-text-field
            v-model="password"
            label="Contraseña"
            type="password"
            required
            outlined
          />
          
          <p>
            ¿Olvidaste tu contraseña? <router-link to="" @click="handleForgotPassword" class="forgot-password-link">Recupérala aquí</router-link>.
          </p>
          <p>
            ¿No tiene cuenta aún? <router-link to="/register" class="register">Regístrese aquí</router-link>.
          </p>

          <div class="button-group">
            <v-btn
              color="primary"
              class="mr-2"
              @click="login"
              :disabled="!isFormValid"
              enter-key-behavior
            >
              Iniciar sesión
            </v-btn>

            <br>
            <v-btn
              color="primary"
              @click="loginWithGoogle"
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
        
        </v-form>
      </v-card-text>
    </v-card>
  </div>
  </v-row>
</v-container>
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    isFormValid() {
      return this.email !== '' && this.password !== '';
    }
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3333/api/users/login', {
          email: this.email,
          password: this.password
        });
        const { token } = response.data;
        sessionStorage.setItem('token', token);
        this.$router.push('/home');
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    },

    async loginWithGoogle() {
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
    },

    reset() {
      console.log("Lógica de restablecimiento de contraseña aquí");
    },

    handleForgotPassword() {
      console.log('Enlace "Recupérala aquí" clicado');
    },
    
  }
};
</script>

<style scoped>
.logo-container {

  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.page-login {

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {

  max-width: 400px;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
}

.login-title {

  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: rgb(91, 143, 185);
}

.forgot-password-link {

  color: rgb(9, 9, 219);
  text-decoration: underline;
  cursor: pointer;
}

.button-group {

  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.google-btn {

  flex: 1;
  display: flex;
  align-items: center;
}

.google-img {
  
  margin-right: 10px;
}
</style>
