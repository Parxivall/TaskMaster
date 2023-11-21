<template>
  <v-container>
    <v-row justify="center">

      <div class="page-login">
        <v-card class="login-card">
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
            ¿Olvidaste tu contraseña? <span @click="handleForgotPassword" class="forgot-password-link">Recupérala aquí</span>.
          </p>

          <div class="button-group">
            <v-btn
              color="primary"
              class="mr-2"
              @click="login"
              :disabled="!isFormValid"
            >
              Iniciar sesión
            </v-btn>

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
    login() {
      // Agrega aquí tu lógica de inicio de sesión
      console.log("Lógica de inicio de sesión aquí");
    },
    reset() {
      // Agrega aquí tu lógica de restablecimiento de contraseña
      console.log("Lógica de restablecimiento de contraseña aquí");
    },
    loginWithGoogle() {
      // Agrega aquí tu lógica de inicio de sesión con Google
      console.log("Lógica de inicio de sesión con Google aquí");
    },
    handleForgotPassword() {
      // Lógica que se ejecutará al hacer clic en "Recupérala aquí"
      console.log('Enlace "Recupérala aquí" clicado');
    },
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
  margin-top: 50px; /* Ajusta el margen superior según tus necesidades */
}

.login-title {
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: rgb(91, 143, 185);
}

.forgot-password-link {
  color: blue; /* Color del enlace */
  text-decoration: underline; /* Subrayado como un enlace */
  cursor: pointer; /* Cambia el cursor al pasar sobre el "enlace" */
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Ajusta el margen superior según tus necesidades */
}

.google-btn {
  flex: 1;
  display: flex;
  align-items: center;
}

.google-img {
  margin-right: 10px; /* Ajusta el margen derecho según tus necesidades */
}
</style>
