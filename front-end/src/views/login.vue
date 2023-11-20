<template>
    <div class="page-login">
      <v-card class="login-card">
        <v-card-title class="login-title">
          Iniciar sesión
        </v-card-title>
  
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="login.email"
              label="Correo electrónico"
              required
              outlined
            />
  
            <v-text-field
              v-model="login.password"
              label="Contraseña"
              type="password"
              required
              outlined
            />
  
            <v-btn
              color="primary"
              class="mr-3"
              @click="login"
              :disabled="!isFormValid"
            >
              Iniciar sesión
            </v-btn>
  
            <v-btn
              color="error"
              class="mr-3"
              @click="reset"
            >
              Reestablecer contraseña
            </v-btn>
  
            <v-btn color="red" @click="loginWithGoogle">
              Iniciar sesión con Google
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        login: {
          email: '',
          password: ''
        }
      };
    },
    computed: {
      isFormValid() {
        return this.login.email !== '' && this.login.password !== '';
      }
    },
    methods: {
      login() {
        // Add your login logic here
        console.log("Login logic here");
      },
      reset() {
        // Add your password reset logic here
        console.log("Password reset logic here");
      },
      loginWithGoogle() {
        // Add your Google login logic here
        console.log("Google login logic here");
      }
    }
  };
  </script>
  
  <style scoped>
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
  }
  
  .login-title {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: rgb(91, 143, 185);
  }
  </style>
  