<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card >
                    <v-card-title>
                        <h2>Registro</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="registerUser">
                            <v-text-field v-model="phone" label="Teléfono" required></v-text-field>
                            <v-text-field v-model="nombre" label="Nombre" required></v-text-field>
                            <v-text-field v-model="email" label="Email" required></v-text-field>
                            <v-text-field v-model="password" label="Contraseña" type="password" required outlined/>
                            <v-btn type="submit" color="primary" class="mx-auto">Registrarse</v-btn>
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
import { useRouter } from 'vue-router';

export default {
    name: 'Register',
    setup() {
        const phone = ref('');
        const nombre = ref('');
        const email = ref('');
        const password = ref('');
        const roles = ref('user');
        const router = useRouter();

        const registerUser = async () => {
            try {
                if (!phone.value || !nombre.value || !email.value || !password.value || !roles.value) {
                    throw new Error('Bad Request: Missing required fields');
                }
                await axios.post('http://localhost:3333/api/users', {
                    phone: phone.value,
                    nombre: nombre.value,
                    email: email.value,
                    password: password.value,
                    roles: [roles.value],
                });
                router.push('/login');
            } catch (error) {
                console.error('Error creating user:', error);
            }
        };

        return {
            phone,
            nombre,
            email,
            password,
            roles,
            registerUser,
        };
    },
};
</script>

<style scoped>
</style>
