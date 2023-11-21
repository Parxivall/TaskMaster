<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card>
                    <v-card-title>
                        <h2>Registro</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="registerUser">
                            <v-text-field v-model="phone" label="Teléfono" required></v-text-field>
                            <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
                            <v-text-field v-model="email" label="Email" required></v-text-field>
                            <v-text-field v-model="roles" label="Role" required></v-text-field>
                            <v-btn type="submit" color="primary">Registrarse</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';

export default {
    name: 'Register',
    setup() {
        const phone = ref('');
        const nombre = ref('');
        const email = ref('');
        const roles = ref('');

        const registerUser = async () => {
            try {
                if (!phone.value || !nombre.value || !email.value || !roles.value) {
                    throw new Error('Bad Request: Missing required fields');
                }

                const response = await axios.post('http://localhost:3333/api/users', {
                    phone: phone.value,
                    nombre: nombre.value,
                    email: email.value,
                    roles: [roles.value],  // Envía un array con el valor de roles
                });

                console.log('User created:', response.data);
            } catch (error) {
                console.error('Error creating user:', error);
            }
        };

        return {
            phone,
            nombre,
            email,
            roles,
            registerUser,
        };
    },
};
</script>

<style scoped>
</style>
